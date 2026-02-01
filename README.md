# 🐾 Petzone – Full Stack MERN Application

Petzone is a full-stack MERN web application for pet adoption and management.  
Users can register, log in, view pets available for adoption, and add pets securely.

---

## 🚀 Tech Stack

### Frontend
- React (Vite)
- Axios
- React Router DOM
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Cookie-based authentication

---

## 📁 Project Structure

Petzone/
│
├── Petzone-backend-main/
│ ├── routes/
│ ├── model/
│ ├── middleware/
│ ├── index.js
│ └── .env
│
├── Petzone-frontend-main/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ └── api/
│ ├── vite.config.js
│ └── .env
│
└── README.md


---

## 🔐 Environment Variables

### Backend `.env`
```env
MONGO_URL=mongodb://127.0.0.1:27017/petzone
PORT=5000
SECRET=your_jwt_secret
Frontend .env
VITE_SERVER_URL=http://localhost:5000

▶️ How to Run the Project
1️⃣ Start Backend
cd Petzone-backend-main
npm install
node index.js
Backend runs on:
http://localhost:5000

2️⃣ Start Frontend
cd Petzone-frontend-main
npm install
npm run dev
Frontend runs on:
http://localhost:5173

🔑 Features
User signup & login

JWT + cookie authentication

Protected routes

View pets available for adoption

Add new pets

MongoDB data storage

👤 Author
Jitendra Kumar Gupta
GitHub: https://github.com/jitendrakumargupta07
