# Real-Time Multiplayer Tic-Tac-Toe Game

It is a real-time multiplayer Tic-Tac-Toe game built using **Node.js**, **Express.js**, **Socket.IO**, and **React.js**. Players can connect and play against each other with live game updates. 

## Features

- Real-time multiplayer gameplay using Socket.IO.
- Player move updates broadcasted live to connected players.
- Game state managed on the server and synced with all clients.
- Automatic detection of winners or draws.
- Ability to restart the game after it completes.

## Technologies

### Frontend:
- **React.js**: A JavaScript library for building user interfaces.
- **Socket.IO (Client)**: For real-time communication between the client and server.
- **HTML, CSS, JavaScript**: For creating the game board interface.

### Backend:
- **Node.js**: JavaScript runtime for building the server-side application.
- **Express.js**: Web framework for Node.js.
- **Socket.IO (Server)**: To handle real-time, bi-directional communication between the server and the clients.
- **CORS**: To enable communication between frontend and backend servers.

## Getting Started

Follow the steps below to get the project running on your local machine.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/nikkibarnwal/tic-tac-toe.git
    cd tic-tac-toe
    ```

2. Install backend dependencies:

    ```bash
    cd tic-tac-toe/backend
    npm install
    ```

3. Install frontend dependencies:

    ```bash
    cd tic-tac-toe/frontend
    npm install
    ```

### Running the Project

1. **Start the backend server:**

    Open a terminal and navigate to the `tic-tac-toe/backend` folder.

    ```bash
    cd tic-tac-toe/backend
    node index.js
    ```

    The server should now be running at `http://localhost:5000`.

2. **Start the frontend:**

    Open another terminal and navigate to the `tic-tac-toe/frontend` folder.

    ```bash
    cd ../tic-tac-toe/frontend
    npm start
    ```

    The frontend should now be running at `http://localhost:3000`.

### How to Play

1. Open the frontend URL in your browser (`http://localhost:3000`).
2. Two users can connect to the game (either from the same or different browsers) to play against each other.
3. Each player takes turns to click on the board cells.
4. The server updates the board and broadcasts the updated game state to all connected players.
5. Once a player wins or the game results in a draw, a reset button will appear, allowing players to restart the game.

### Project Structure

```
tic-tac-toe/
│
├── tic-tac-toe/backend/   # Backend (Node.js, Express.js, Socket.IO)
│   ├── index.js           # Main server file
│   ├── package.json       # Backend dependencies
│
└── tic-tac-toe/frontend/  # Frontend (React.js, Socket.IO)
    ├── src/
    │   ├── GameBoard.js   # React component for the game board
    │   ├── App.js         # Main React App component
    │   ├── index.js       # Entry point for React
    │   └── style.css      # Styles for the game
    ├── package.json       # Frontend dependencies
```
