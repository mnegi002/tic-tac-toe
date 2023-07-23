import "./styles.css";
import Game from "./Game";
import { useState } from "react";
import { useEffect } from "react";
const initialState = ["", "", "", "", "", "", "", "", ""];

export default function App() {
  const [gameState, updateGameState] = useState(initialState);
  const [isXChance, updateIsXChance] = useState(false);

  useEffect(() => {
    let winner = checkWinner();
    if (winner) {
      clearGame();
      alert(`hurray!! ${winner} has won`);
    }
  }, [gameState]);

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a];
      }
    }
    return null;
  };

  const changeEvent = (index) => {
    let string = Array.from(gameState);
    if (string[index]) return;
    string[index] = isXChance ? "X" : "0";
    updateGameState(string);
    updateIsXChance(!isXChance);
  };

  const clearGame = () => {
    updateGameState(initialState);
  };

  return (
    <div className="app-header">
      <h2 className="heading-text">Tic-Tac-Toe Game </h2>
      <div className="jc-center row">
        <Game
          className=" square b-bottom-right"
          state={gameState[0]}
          onClick={() => changeEvent(0)}
        />
        <Game
          className=" square b-bottom-right"
          state={gameState[1]}
          onClick={() => changeEvent(1)}
        />
        <Game
          className="square b-bottom"
          state={gameState[2]}
          onClick={() => changeEvent(2)}
        />
      </div>
      <div className="jc-center row">
        <Game
          className=" square b-bottom-right"
          state={gameState[3]}
          onClick={() => changeEvent(3)}
        />
        <Game
          className=" square b-bottom-right"
          state={gameState[4]}
          onClick={() => changeEvent(4)}
        />
        <Game
          className=" square b-bottom"
          state={gameState[5]}
          onClick={() => changeEvent(5)}
        />
      </div>

      <div className="jc-center row">
        <Game
          className=" square b-right"
          state={gameState[6]}
          onClick={() => changeEvent(6)}
        />
        <Game
          className=" square b-right"
          state={gameState[7]}
          onClick={() => changeEvent(7)}
        />
        <Game
          className=" square "
          state={gameState[8]}
          onClick={() => changeEvent(8)}
        />
      </div>
      <button className="clear-button" onClick={() => clearGame()}>
        Clear Game
      </button>
      <p className="fc-aqua fw-600">Copyright &copy; 2023</p>
    </div>
  );
}
