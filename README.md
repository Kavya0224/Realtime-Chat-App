# 💬 Realtime Chat Application

A full-stack real-time chat application built using **React**, **Node.js**, **Express**, **Socket.io**, and **MongoDB**. The application enables users to exchange messages instantly, stores chat history in MongoDB, and provides a clean, responsive user interface.

---

# Features

## Mandatory Features

* Real-time messaging using Socket.io
* Send and receive messages instantly
* Fetch previous chat history after refresh
* Message timestamps
* REST APIs for sending and retrieving messages
* MongoDB database for message storage
* Clean and modular project architecture
* Error handling for API and Socket events

## Bonus Features

* Username-based login (dummy authentication)
* Typing indicator
* Online user count
* Responsive chat interface

---

# Tech Stack

## Frontend

* React
* Vite
* Axios
* Socket.io Client
* CSS

## Backend

* Node.js
* Express.js
* Socket.io
* MongoDB
* Mongoose

---

# Project Structure

```
Realtime-Chat-App
│
├── backend
│   ├── src
│   │   ├── config
│   │   │   └── db.js
│   │   ├── controllers
│   │   │   └── messageController.js
│   │   ├── models
│   │   │   └── Message.js
│   │   ├── routes
│   │   │   └── messageRoutes.js
│   │   ├── sockets
│   │   │   └── socket.js
│   │   ├── app.js
│   │   └── server.js
│   ├── .env.example
│   ├── package.json
│   └── package-lock.json
│
├── frontend
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   ├── pages
│   │   ├── socket
│   │   ├── styles
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── package-lock.json
│
└── README.md
```

---

# Project Setup Instructions

## Prerequisites

Install the following:

* Node.js (v20 or later recommended)
* npm
* MongoDB Atlas account or local MongoDB instance
* Git

---

# Backend Setup

### 1. Navigate to the backend folder

```bash
cd backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

Create a file named `.env` inside the `backend` folder.

Add the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Example:

```env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/chatApp
```

### 4. Start the backend server

```bash
npm run dev
```

The backend will run on:

```
http://localhost:5000
```

---

# Frontend Setup

### 1. Navigate to the frontend folder

```bash
cd frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the frontend

```bash
npm run dev
```

The frontend will run on:

```
http://localhost:5173
```

---

# Environment Variables

## Backend

Create a `.env` file inside the backend directory.

| Variable  | Description               |
| --------- | ------------------------- |
| PORT      | Server port               |
| MONGO_URI | MongoDB connection string |

Example:

```env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/chatApp
```

---

# API Endpoints

## Get Chat History

```
GET /api/messages
```

Returns all stored chat messages.

---

## Send Message

```
POST /api/messages
```

Request Body

```json
{
  "username": "Kavya",
  "message": "Hello World"
}
```

---

# Socket Events

## Client → Server

| Event      | Description         |
| ---------- | ------------------- |
| join       | User joins the chat |
| typing     | User is typing      |
| stopTyping | User stopped typing |

## Server → Client

| Event             | Description               |
| ----------------- | ------------------------- |
| newMessage        | Broadcast new message     |
| onlineUsers       | Send updated online users |
| userTyping        | Notify typing             |
| userStoppedTyping | Remove typing indicator   |

---

# Design Decisions

* React was chosen for a simple and responsive frontend.
* Express.js provides lightweight REST APIs.
* Socket.io is used for real-time bidirectional communication.
* MongoDB stores chat history so messages persist after page refresh.
* Components are divided into reusable modules for better maintainability.
* Axios is used for REST API communication.
* Socket.io handles live updates without polling.

---

# Assumptions Made

* This application supports a single public chat room.
* Users enter a username before joining.
* Authentication is intentionally kept simple (dummy username login).
* Internet connectivity is available.
* Messages are visible to all connected users.

---

# Assignment Status

## Mandatory Requirements

* ✅ React Frontend
* ✅ Node.js + Express Backend
* ✅ REST APIs
* ✅ Socket.io Real-time Communication
* ✅ Message History
* ✅ Message Timestamps
* ✅ MongoDB Storage
* ✅ Error Handling
* ✅ Clean Project Structure

## Bonus Features

* ✅ Username-based Login (Dummy Authentication)
* ✅ Typing Indicator
* ✅ Online User Count
* ❌ Message Read/Delivered Status (Not Implemented)
* ❌ Backend Deployment (Not Deployed)

---

# Future Improvements

* User authentication using JWT
* Multiple chat rooms
* Private messaging
* Emoji support
* File and image sharing
* Read/Delivered status
* Push notifications
* Backend deployment on Render or Railway

---

# Submission Links

## GitHub Repository

Add your GitHub repository link here.

```
https://github.com/your-username/realtime-chat-app
```

---

## Screen Recording

Add your Google Drive link here.

```
https://drive.google.com/...
```

---

## Live Backend API (Optional)

If deployed on Render or Railway, add the URL here.

Example:

```
https://your-backend.onrender.com
```

---

# Author

**Kavya**
