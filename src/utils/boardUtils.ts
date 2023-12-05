import {IBoardCell} from "../types/boardReducer.ts";
import {makepuzzle} from "sudoku";

function check(board: IBoardCell[][], pos: [number, number]): boolean {
  const current = board[pos[0]][pos[1]].value;

  for (let i = 0; i < board.length; i++) {
    if (board[i][pos[1]].value === current && i !== pos[0]) {
      return false;
    }
  }

  for (let j = 0; j < board.length; j++) {
    if (board[pos[0]][j].value === current && j !== pos[1]) {
      return false;
    }
  }

  const up = Math.floor(pos[0] / 3) * 3;
  const left = Math.floor(pos[1] / 3) * 3;

  for (let i = up; i < up + 3; i++) {
    for (let j = left; j < left + 3; j++) {
      if (board[i][j].value === current && (i !== pos[0] || j !== pos[1])) {
        return false;
      }
    }
  }

  return true;
}

export function isValidSudoku(board: IBoardCell[][]): boolean {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j].value !== '.' && !check(board, [i, j])) {
        return false;
      }
    }
  }

  return true;
}


export function initBoard(): IBoardCell[][] {
  const values =  makepuzzle() as never[];
  const board = [] as IBoardCell[][];
  for (let i = 0; i < values.length; i++) {
    if (i % 9 === 0) {
      board.push([]);
    }
    board[board.length - 1].push({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      value: values[i] ? values[i].toString() : '.',
      error: false,
      immutable: !!values[i],
    });
  }
  console.log(board);

  return board;
}
