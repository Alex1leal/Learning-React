import confetti from "canvas-confetti";
import { useState } from "react";
import { Square } from "./components/Square.jsx";
import { TURNS } from "./constanst.js";
import { checkWinnerForm, checkEndGame } from "./logic/board.js";
import { WinnerModal } from "./components/WinnerModal.jsx";
import { resetGameStorage, saveGameToStorage } from "./logic/storage/index.js";
function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    if (boardFromStorage) return JSON.parse(boardFromStorage);
    return Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const turnFormStorage = window.localStorage.getItem("turn");
    return turnFormStorage ?? TURNS.X;
  });

  const [winner, setWinner] = useState(null); //null no hay ganador, y false es que hay empate

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    resetGameStorage();
  };
  // Aca gestionamos lo referente a las actualizaciones del tablero (board)
  const updateBoard = (index) => {
    // si el tablero ya tiene algo, no hace nada
    if (board[index] || winner) return;

    // actualiza el tablero
    const newBoard = [...board];
    newBoard[index] = turn;

    setBoard(newBoard); // asincrono
    // cambia el turno

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    // guarda la partida aquí
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    });

    //revisa si hay un ganador
    const newWinner = checkWinnerForm(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false); //empate
    }
  };

  return (
    <main className="board">
      <h1> Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
        {board.map((square, index) => {
          return (
            // Estamos renderizando cada uno de los Squares dentro del tablero
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}> {TURNS.X}</Square>
        <Square is isSelected={turn === TURNS.O}>
          {" "}
          {TURNS.O}
        </Square>
      </section>
      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  );
}

export default App;
