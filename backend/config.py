import os
from dotenv import load_dotenv

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")
JWT_SECRET = os.getenv("JWT_SECRET", "change_this_for_prod")
JWT_EXP_SECONDS = int(os.getenv("JWT_EXP_SECONDS", "86400"))
