VibeCheck API + Button Smash UI
CPE 411L: Activity #3

A simple full-stack application consisting of a Node.js + Express backend API and a vanilla JavaScript frontend. This project demonstrates basic API routing, state management (in-memory counter), and the GitHub feature-branch workflow.

Project Structure
    VibeCheck-<yourname>/
        ├── backend/
        │   ├── index.js        # Express server and API routes
        │   └── package.json    # Backend dependencies (express, cors)
        ├── frontend/
        │   ├── index.html      # UI structure and buttons
        │   └── app.js          # Logic to fetch data from the API
        └── README.md           # Documentation

🚀 How to Run
1. Prerequisites

    Node.js (v14 or higher recommended)
        npm (installed with Node)

2. Backend Setup

    Navigate to the backend directory:
    Bash
     cd backend

    Install dependencies:
        npm install
    Start the server:
     node index.js
    The API should now be running at http://localhost:3000.

3. Frontend Setup
    Open the frontend/index.html file directly in any modern web browser (Chrome, Firefox, Edge).
    Ensure the backend server is still running in your terminal to allow the buttons to fetch data.