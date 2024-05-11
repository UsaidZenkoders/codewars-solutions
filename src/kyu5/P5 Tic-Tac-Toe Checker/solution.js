function isSolved(board) {
  for (let i = 0; i < board.length; i++) {
    if (board[i][0] === 1 && board[i][1] === 1 && board[i][2] === 1) {
      return 1;
    } else if (board[i][0] === 2 && board[i][1] === 2 && board[i][2] === 2) {
      return 2;
    }
  }

  for (let j = 0; j < board[0].length; j++) {
    if (board[0][j] === 1 && board[1][j] === 1 && board[2][j] === 1) {
      return 1;
    } else if (board[0][j] === 2 && board[1][j] === 2 && board[2][j] === 2) {
      return 2;
    }
  }

  if (
    (board[0][0] ===1 && board[1][1] === 1 && board[2][2] === 1) ||
    (board[0][2] ===1 && board[1][1] === 1 && board[2][0] === 1)
  ) {
    return 1;
  } else if (
    (board[0][0] === 2 && board[1][1] === 2 && board[2][2] === 2) ||
    (board[0][2] === 2 && board[1][1] === 2 && board[2][0] === 2)
  ) {
    return 2;
  }
  let isEmptyCell = false;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 0) {
        isEmptyCell = true;
        break;
      }
    }
    if (isEmptyCell) break;
  }

  if (!isEmptyCell) {
    return 0;
  }
  return -1;
}
