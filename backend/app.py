from flask import Flask, jsonify
from flask_cors import CORS
from routes.auth import auth_bp
from routes.profile import profile_bp
from routes.prediction import pred_bp

def create_app():
    app = Flask(__name__)
    CORS(app)
    app.register_blueprint(auth_bp)
    app.register_blueprint(profile_bp)
    app.register_blueprint(pred_bp)

    @app.route("/api/ping")
    def ping():
        return jsonify({"ping": "pong"})

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True, port=5000)
