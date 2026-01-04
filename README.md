# Booking Application (MERN Stack)

A full-stack booking application built using the MERN stack that allows users to book restaurant tables and event tickets through a clean, responsive interface.

## Tech Stack
- Frontend: React, Tailwind CSS, Vite
- Backend: Node.js, Express.js
- Database: MongoDB (Mongoose)
- Deployment Ready: Vercel / Render

## Features
- Browse restaurants and events
- Book a slot with date and time selection
- Real-time booking persistence using MongoDB
- Responsive UI for desktop and mobile
- Clean REST API architecture

## Project Structure

frontend/
├── src/
│ ├── components/
│ ├── pages/
│ └── config.js

backend/
├── routes/
├── models/
├── config/
└── index.js


## Getting Started (Local Setup)

### 1. Clone Repository

git clone <your-repo-url>
cd booking-app


### 2. Backend Setup

cd backend
npm install
cp .env.example .env
node index.js


### 3. Frontend Setup

npm install
npm run dev

Frontend runs on `http://localhost:5173`  
Backend runs on `http://localhost:5000`

## API Endpoints
- GET /api/listings
- POST /api/listings
- POST /api/bookings

## Future Improvements
- Authentication (login/signup)
- Admin dashboard
- Booking cancellation
- Payment integration

## Author
Harshit Srivastava
