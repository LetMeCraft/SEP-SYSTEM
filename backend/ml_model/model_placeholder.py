import random

def predict_sepsis_score(input_data):
    """
    Mock sepsis prediction model.
    Accepts patient clinical data and returns a prediction score & risk level.
    Replace with your trained ML model later.
    """
    try:
        lactate = float(input_data.get("lactate", 1))
        hr = float(input_data.get("heart_rate", 80))
        wbc = float(input_data.get("wbc", 8))
        sbp = float(input_data.get("sbp", 120))

        # A simple weighted heuristic formula (for demo only)
        score = (lactate * 0.15 + hr * 0.005 + (15 - sbp * 0.008) + wbc * 0.02) / 10
        score = max(0, min(1, score))  # clamp between 0 and 1
        percentage = round(score * 100, 2)

        # Simple threshold-based classification
        if percentage >= 70:
            prediction = "High risk of Sepsis"
        elif percentage >= 40:
            prediction = "Moderate risk"
        else:
            prediction = "Low risk"

        return {
            "prediction": prediction,
            "score": round(score, 3),
        }

    except Exception as e:
        print("⚠️ Error in mock model:", e)
        return {
            "prediction": "Error in model",
            "score": random.random(),
        }
