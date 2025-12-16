import { useState } from "react";
import "./App.css";

export default function App() {
  const [restaurantLoad, setRestaurantLoad] = useState("medium");
  const [distance, setDistance] = useState("");
  const [peakHour, setPeakHour] = useState(false);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkOrder = async () => {
    if (!distance) {
      alert("Enter distance");
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const res = await fetch(
        "http://127.0.0.1:8003/api/delivery-insight/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            restaurant_load: restaurantLoad,
            distance_km: distance,
            peak_hour: peakHour,
          }),
        }
      );

      if (!res.ok) throw new Error("Server error");

      const data = await res.json();
      setResult(data);
    } catch (err) {
      alert("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="container">
        {/* LEFT CARD */}
        <div className="card">
          <h2 className="title">OrderSmart</h2>
          <p className="subtitle">Delivery confidence before you order</p>

          <label>Restaurant Load</label>
          <select
            value={restaurantLoad}
            onChange={(e) => setRestaurantLoad(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <label>Distance (km)</label>
          <input
            type="number"
            placeholder="Eg: 4"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />

          <label className="checkbox">
            <input
              type="checkbox"
              checked={peakHour}
              onChange={(e) => setPeakHour(e.target.checked)}
            />
            <span>Peak hour (7–9 PM)</span>
          </label>

          <button onClick={checkOrder} disabled={loading}>
            {loading ? "Checking..." : "Should I Order Now?"}
          </button>
        </div>

        {/* RIGHT CARD */}
        <div className="card">
          {result ? (
            <div className="result animate-in">
              <h3>📦 Order Insight</h3>

              <p>
                <strong>ETA:</strong> {result.estimated_time}
              </p>

              <p>
                <strong>Confidence:</strong>{" "}
                <span className={`badge ${result.confidence.toLowerCase()}`}>
                  {result.confidence}
                </span>
              </p>

              <p>
                <strong>Restaurant Reliability:</strong>{" "}
                <span className={`badge ${result.reliability.toLowerCase()}`}>
                  {result.reliability}
                </span>
              </p>

              <p>
                <strong>Suggestion:</strong> {result.suggestion}
              </p>
            </div>
          ) : (
            <p className="placeholder">
              Result will appear here after checking
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
