# 📰 Real-Time News Feed Application (MERN + Redux + Socket.io)

## 📌 Overview
This project delivers a real-time social news feed built on the MERN stack with Redux and Socket.io. Users can post updates, and all connected clients see new posts instantly without refreshing. This mirrors modern feed-driven platforms and demonstrates reactive UI, WebSocket communication, and state synchronization — all packaged in a production-aligned architecture.

---

## 🚀 Key Features
✅ Real-time news post updates  
✅ WebSocket-powered live feed using Socket.io  
✅ MERN stack with modular backend  
✅ Redux Toolkit for global state management  
✅ REST API for initial data fetching  
✅ Clean, scalable folder structure  
✅ Timestamped post history  

---

## 🛠 Tech Stack
### Frontend
- React
- Redux Toolkit
- Axios
- Socket.io Client

### Backend
- Node.js / Express
- MongoDB via Mongoose
- Socket.io Server

---

## 📂 Project Structure
```text
newsfeed-app/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── config/
│   │   └── db.js
│   └── models/
│       └── Post.js
│
└── frontend/
    ├── package.json
    ├── src/
    │   ├── App.js
    │   ├── store.js
    │   ├── socket.js
    │   ├── features/
    │   │   └── postsSlice.js
    │   ├── components/
    │   │   ├── PostForm.js
    │   │   └── PostList.js
    └── public/
        └── index.html


        Setup & Installation
1️⃣ Backend Setup
cd newsfeed-app/backend
npm install
node server.js


Backend runs at:

http://localhost:5000


MongoDB required — default URL:

mongodb://localhost:27017/newsfeed

2️⃣ Frontend Setup
cd newsfeed-app/frontend
npm install
npm start


Frontend runs at:

http://localhost:3000

🧪 How It Works
🔄 Data Flow

User submits a post

Frontend emits newPost via Socket.io

Backend persists to MongoDB

Backend emits postAdded event

Redux updates feed in real time
