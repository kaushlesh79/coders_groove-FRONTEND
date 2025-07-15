# Coders Groove

Real‑time collaborative code editor built to make remote hackathon projects painless.  
Front‑end in **React**, back‑end in **Node + Express**, live sync via **Socket.io**, and in‑browser editing powered by **CodeMirror**.

---

## ✨ Features
- **Live collaboration** – multiple users share a room via a unique ID and edit code together in real time.
- **Language‑aware editor** – CodeMirror provides syntax highlighting, auto‑completion, and key‑bindings.
- **Room management** – create / join rooms, participant list, and disconnect handling.
- **Persist & restore** – optional REST endpoint to save / load a session’s code.
- **Responsive UI** – works smoothly on desktop and tablets.

---


### 🧱 Tech Stack

![React](https://img.shields.io/badge/-React-20232A?style=flat&logo=react)
![Socket.IO](https://img.shields.io/badge/-Socket.IO-010101?style=flat&logo=socket.io)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![CodeMirror](https://img.shields.io/badge/-CodeMirror-324ABD?style=flat)
![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/-Express-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)


| Layer        | Main Tools                               |
|--------------|------------------------------------------|
| Front‑end    | React 18, Vite, Tailwind CSS             |
| Real‑time    | Socket.io (web‑socket transport)         |
| Back‑end     | Node.js 20, Express 5                    |
| Editor       | CodeMirror 6 (next‑gen modular build)    |
| Misc         | ESLint + Prettier, Husky git hooks       |





## 📁 PROJECT STRUCTURE

```
coders-groove/
├── client/               --> React frontend
│   ├── src/
│   │   ├── components/   --> Reusable UI components
│   │   ├── hooks/        --> Custom React hooks
│   │   └── pages/        --> Main views / screens
│   └── vite.config.js    --> Vite configuration
│
├── server/               --> Node.js + Express backend
│   ├── index.js          --> Entry point for backend
│   └── routes/           --> Optional API endpoints
│
├── package.json          --> Project metadata
└── README.md             --> Documentation
```

## ⚙️  STEPS TO RUN LOCALLY

  
  1. Clone the repository:
     git clone https://github.com/<your-username>/coders-groove.git
     cd coders-groove
  
  2. Install dependencies:
     If using pnpm:
       pnpm install
     Or use npm:
       npm install
  
  3. Setup environment variables:
     Create a .env file inside the server folder with the following content:
       PORT=4000
  
  4. Start the development servers:
     ```
       # In one terminal (Backend):
       cd server
       npm run dev    OR   node index.js
    
       # In another terminal (Frontend):
       cd client
       npm run dev
  
  5. Open your browser and visit:
     http://localhost:5173
  
     You can now create or join a room and start collaborating live!


## ✅ REQUIREMENTS


- Node.js version 18 or above
- pnpm / npm / yarn (any package manager)



## 📌LEARNING FROM THE PROJECT


1. Gained hands-on experience with WebSockets using Socket.io for real-time communication.
2. Improved my understanding of structuring a full-stack application from scratch.
3. Learned how to integrate CodeMirror into a React app for an interactive code editor.
4. Understood how to manage shared state between multiple users in a real-time environment.
5. Strengthened knowledge of REST APIs and asynchronous event handling on both client and server sides.
6. Improved frontend-backend integration and deployment strategy for full-stack apps.
7. Learned about edge cases like user disconnection, syncing late-joiners, and race conditions in collaborative apps.

## 📌NEXT FEATURES / ROADMAP


- Support for multiple files in a single room.
- Language selection for syntax highlighting (e.g., JavaScript, Python, C++).
- Secure sandboxed code execution feature.
- GitHub OAuth login and user-based room tracking.
- Shareable invite links for easier collaboration.
- Integrated chat and voice features.
- Code version history with time-travel playback.
- Custom themes and font settings for better UX.
- Mobile and tablet responsive design.

## 📌 SUMMARY THOUGHTS

This project was born out of a real-world pain point during a hackathon, which made the process deeply personal and meaningful. It pushed me to explore real-time technologies beyond tutorials and apply them in a collaborative setting.

Building Coders Groove gave me practical insights into the end-to-end development lifecycle—from UI design to backend setup to deployment. It also helped me become more comfortable with debugging real-time sync issues and handling live user interactions.

Overall, the project has fueled my interest in building interactive, user-centric tools that solve real problems.

## 🎯 WHAT'S NEXT FOR ME

- 🐳 Explore containerization using Docker to make deployment easier.
- ⚙️ Learn more about real-time performance optimization and socket scaling.
- 🤝 Contribute to open source collaborative tools to learn from large-scale systems.
- 🚀 Continue building full-stack apps that combine utility with strong UX.
