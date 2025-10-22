from flask import Blueprint, request, jsonify
from utils import decode_token
from models import predictions_col
from ml_model.model_placeholder import predict_sepsis_score
from bson.objectid import ObjectId
import time

pred_bp = Blueprint("prediction", __name__, url_prefix="/api/predict")

def auth_user(request):
    auth = request.headers.get("Authorization", "")
    if not auth.startswith("Bearer "):
        return None
    token = auth.split(" ", 1)[1]
    return decode_token(token)

@pred_bp.route("/", methods=["POST"])
def predict():
    payload = auth_user(request)
    if not payload:
        return jsonify({"error": "unauthorized"}), 401

    user_id = payload["sub"]
    data = request.json

    # ✅ Validate input
    required_fields = ["lactate", "heart_rate", "wbc", "sbp"]
    if not all(k in data for k in required_fields):
        return jsonify({"error": "Missing required fields"}), 400

    # ✅ Call ML model
    try:
        score = predict_sepsis_score(data)
    except Exception as e:
        print("Model prediction error:", e)
        return jsonify({"error": "Model error"}), 500

    record = {
        "user_id": ObjectId(user_id),
        "input": data,
        "score": float(score),
        "timestamp": time.time(),
    }
    res = predictions_col.insert_one(record)
    record["_id"] = str(res.inserted_id)

    return jsonify(record), 200

@pred_bp.route("/history", methods=["GET"])
def history():
    payload = auth_user(request)
    if not payload:
        return jsonify({"error": "unauthorized"}), 401

    user_id = payload["sub"]
    docs = predictions_col.find({"user_id": ObjectId(user_id)}).sort("timestamp", -1).limit(50)
    out = []
    for d in docs:
        d["_id"] = str(d["_id"])
        d["user_id"] = str(d["user_id"])
        out.append(d)
    return jsonify({"history": out}), 200
