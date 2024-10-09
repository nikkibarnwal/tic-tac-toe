const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

let board = Array(9).fill("");
let currentPlayer = "X";
let winner = null;

// Handle a new connection
io.on("connection", (socket) => {
  console.log("A user connected");

  // Send initial game state to the new player
  socket.emit("gameUpdate", { board, currentPlayer, winner });

  // Handle player move
  socket.on("makeMove", (index) => {
    if (!winner && board[index] === "") {
      board[index] = currentPlayer;
      winner = checkWinner();
      currentPlayer = currentPlayer === "X" ? "O" : "X";

      io.emit("gameUpdate", { board, currentPlayer, winner });
    }
  });

  socket.on("resetGame", () => {
    board = Array(9).fill("");
    currentPlayer = "X";
    winner = null;

    // Broadcast reset game state to all clients
    io.emit("gameUpdate", { board, currentPlayer, winner });
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// Function to check for a winner
function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let combo of winningCombinations) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  if (board.every((cell) => cell !== "")) {
    return "Draw";
  }

  return null;
}

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
