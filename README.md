OrderSmart - DELIVERY CONFIDENCE SYSTEM ORDERSMART : 
OrderSmart is a full-stack web application that helps users decide whether to order food now or wait, instead of just showing a basic delivery ETA.
Inspired by platforms like Swiggy and Zomato, this project focuses on decision confidence, not just time estimates.

PROBLEM STATEMENT  :

Food delivery apps often show only delivery time, but users still face:
Sudden delivery delays
No clarity on why ETA changes
Uncertainty during peak hours
This leads to frustration and poor decision-making.

SOLUTION :

OrderSmart analyzes real-world factors and provides:
Estimated delivery time range
Confidence level (High / Medium / Low)
Restaurant reliability indicator
Clear suggestion like
“Order now” or “Wait 15 minutes”

API ENDPOINT : 

POST /api/delivery-insight/

Request Body
{
  "restaurant_load": "high",
  "distance_km": 5,
  "peak_hour": true
}

Response
{
  "estimated_time": "55-65 mins",
  "confidence": "Low",
  "reliability": "Low",
  "suggestion": "High delay risk. Consider waiting 15 mins."
}

FEATURES : 
ETA calculation based on:
Restaurant load (Low / Medium / High)
Distance (km)
Peak hour (7–9 PM)
Visual confidence & reliability badges
Clean two-column responsive UI (Laptop-first)
Animated result card for better UX
REST API integration between frontend & backend

TECH STACK :
FRONTEND :
React (Vite)
JavaScript
CSS (custom styling)
Fetch API

BACKEND : 
Django
Django REST Framework
JSON-based REST API

FEATURES : 
ETA calculation based on:
Restaurant load (Low / Medium / High)
Distance (km)
Peak hour (7–9 PM)
Visual confidence & reliability badges
Clean two-column responsive UI (Laptop-first)
Animated result card for better UX
REST API integration between frontend & backend

TECH STACK :
FRONTEND :
WHY THIS PROJECT ? 
This project demonstrates:
Real-world problem solving
Full-stack integration (React + Django)
API design & consumption
Clean UI/UX thinking
Practical decision-based logic

FUTURE IMPROVEMENTS :
User location detection
Historical delay analysis
Order history & insights
Mobile-first responsive version
Deployment (Vercel + Render)

AUTHOR :
Ruthrapriya
Full-Stack Developer (React + Django)

### Backend Setup
```bash
cd backend
venv\Scripts\activate
cd server
python manage.py runserver 8003
Backend runs at:
http://127.0.0.1:8003//

Frontend Setup : 
```bash
cd frontend
npm install
npm run dev
Frontend runs at:
http://localhost:5173/

