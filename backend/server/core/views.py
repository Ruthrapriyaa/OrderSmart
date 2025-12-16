from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def delivery_insight(request):
    data = request.data

    restaurant_load = data.get("restaurant_load")
    distance_km = data.get("distance_km", 0)
    peak_hour = data.get("peak_hour")

    # Base ETA
    base_time = 15 + int(distance_km) * 5

    # Default values (VERY IMPORTANT)
    confidence = "Medium"
    reliability = "Medium"
    suggestion = "Moderate delay risk."

    # Logic
    if restaurant_load == "high" and peak_hour:
        confidence = "Low"
        reliability = "Low"
        suggestion = "High delay risk. Consider waiting 15 mins."
        base_time += 15

    elif restaurant_load == "medium":
        confidence = "Medium"
        reliability = "Medium"
        suggestion = "Moderate delay risk."
        base_time += 5

    else:
        confidence = "High"
        reliability = "High"
        suggestion = "Good time to order."

    # Response MUST be outside if-else
    return Response({
        "estimated_time": f"{base_time}-{base_time + 10} mins",
        "confidence": confidence,
        "reliability": reliability,
        "suggestion": suggestion
    })
