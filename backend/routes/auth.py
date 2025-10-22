from flask import Blueprint, request, jsonify
from models import users_col
from utils import hash_password, check_password, create_token

auth_bp = Blueprint("auth", __name__, url_prefix="/api/auth")

@auth_bp.route("/signup", methods=["POST"])
def signup():
    data = request.json
    email = data.get("email")
    password = data.get("password")
    name = data.get("name", "")

    if not email or not password:
        return jsonify({"error": "email and password required"}), 400

    if users_col.find_one({"email": email}):
        return jsonify({"error": "user already exists"}), 400

    pw_hash = hash_password(password)
    user = {"email": email, "password": pw_hash.decode("utf-8"), "name": name}
    res = users_col.insert_one(user)

    token = create_token(str(res.inserted_id))
    return jsonify({
        "token": token,
        "user": {"id": str(res.inserted_id), "email": email, "name": name}
    }), 201

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    user = users_col.find_one({"email": email})
    if not user:
        return jsonify({"error": "invalid credentials"}), 401

    hashed_pw = user["password"]
    if not check_password(password, hashed_pw):
        return jsonify({"error": "invalid credentials"}), 401

    token = create_token(str(user["_id"]))
    return jsonify({
        "token": token,
        "user": {"id": str(user["_id"]), "email": user["email"], "name": user.get("name", "")}
    }), 200
