from pymongo import MongoClient
from config import MONGO_URI

client = MongoClient(MONGO_URI, serverSelectionTimeoutMS=60000)
db = client["sepsis_db"]

users_col = db["users"]
profiles_col = db["profiles"]
predictions_col = db["predictions"]

try:
    client.admin.command("ping")
    print("✅ Connected to MongoDB successfully!")
except Exception as e:
    print("❌ MongoDB connection failed:", e)
