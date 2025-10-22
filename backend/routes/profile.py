from flask import Blueprint, request, jsonify
from utils import decode_token
from models import profiles_col
from bson.objectid import ObjectId

profile_bp = Blueprint("profile", __name__, url_prefix="/api/profile")

def auth_user(request):
    auth = request.headers.get("Authorization", "")
    if not auth.startswith("Bearer "):
        return None
    token = auth.split(" ", 1)[1]
    return decode_token(token)

@profile_bp.route("/create", methods=["POST"])
def create_profile():
    payload = auth_user(request)
    if not payload:
        return jsonify({"error": "unauthorized"}), 401

    user_id = payload["sub"]
    data = request.json
    data["user_id"] = ObjectId(user_id)

    try:
        profiles_col.update_one({"user_id": ObjectId(user_id)}, {"$set": data}, upsert=True)
        return jsonify({"status": "saved"}), 200
    except Exception as e:
        print("❌ Profile save error:", e)
        return jsonify({"error": str(e)}), 500

@profile_bp.route("/me", methods=["GET"])
def get_profile():
    payload = auth_user(request)
    if not payload:
        return jsonify({"error": "unauthorized"}), 401

    user_id = payload["sub"]
    profile = profiles_col.find_one({"user_id": ObjectId(user_id)})
    if profile:
        profile["_id"] = str(profile["_id"])
        profile["user_id"] = str(profile["user_id"])
    return jsonify({"profile": profile}), 200
