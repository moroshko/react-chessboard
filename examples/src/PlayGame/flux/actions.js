import { FLUX_ACTIONS } from './constants';

const { NEW_GAME, FLIP_BOARD, MOVE_PIECE } = FLUX_ACTIONS;

export function newGame() {
  return {
    type: NEW_GAME
  };
}

export function flipBoard() {
  return {
    type: FLIP_BOARD
  };
}

export function movePiece(fromSquare, toSquare) {
  return {
    type: MOVE_PIECE,
    fromSquare,
    toSquare
  };
}
