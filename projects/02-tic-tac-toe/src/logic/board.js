import { WINNER_COMBOS } from "../constanst";

//revisar si hay un ganador
export const checkWinnerForm = (boardToCheck) => {
  //revisamos todas las combinaciones  ganadoras
  //para ver su X u O ganó
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  //si no hay ganador
  return null;
};
export const checkEndGame = (newBoard) => {
  // revisa si hay un empate
  // si no hay mas espacios vacios
  // en el tablero
  // newBoard = ['x' ,'o' ,'x',null,null,null,null,null,null]
  return newBoard.every((square)=> square !== null)
}
