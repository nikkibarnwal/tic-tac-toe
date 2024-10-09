import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./style.css";

const socket = io("http://localhost:5000");

const GameBoard = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false); // State to track draw

  useEffect(() => {
    socket.on("gameUpdate", (data) => {
      setBoard(data.board);
      setCurrentPlayer(data.currentPlayer);
      setWinner(data.winner);
      setIsDraw(data.isDraw); // Update draw state from the server
    });

    return () => {
      socket.off("gameUpdate");
    };
  }, []);

  const handleCellClick = (index) => {
    if (!winner && !isDraw && board[index] === "") {
      socket.emit("makeMove", index);
    }
  };

  const handleResetGame = () => {
    socket.emit("resetGame");
    setWinner(null);
    setIsDraw(false);
  };

  return (
    <div>
      <h1>Tic-Tac-Toe</h1>
      <div id="game-board">
        {board.map((cell, index) => (
          <div
            key={index}
            className="cell"
            onClick={() => handleCellClick(index)}
          >
            {cell}
          </div>
        ))}
      </div>
      <div id="status">
        {winner === "Draw" ? (
          <div id="draw-message">Match Draw</div>
        ) : winner === "X" || winner === "O" ? (
          <div id="winner-message">Winner: {winner}</div>
        ) : (
          <div>Current Player: {currentPlayer}</div>
        )}
      </div>
      <button onClick={handleResetGame} style={{ marginTop: "20px" }}>
        Restart Game
      </button>
    </div>
  );
};

export default GameBoard;
