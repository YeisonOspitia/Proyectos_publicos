import {WINNER_COMBOS} from '../constants'

export const checkWinnerFrom = (boardToCheck) => {
    //revisamos las combinaciones ganadores para ver si gano X o O
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
        return boardToCheck[a]
      }
    }
    // si no hay ganador
    return null
  }

  export const checkEndGame = (newBoard) => {
    //revisamos si hay empate en el juego
    return newBoard.every((square2) => square2 !== null)
  }