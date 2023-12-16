export const saveGameToStorage = ({ newBoard, newTurn}) => {
  
  //guarda aquí la partida
  window.localStorage.setItem('board', JSON.stringify(newBoard))
  window.localStorage.setItem('turn', newTurn);

}

export const resetGameStorage = () => {
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')  

}