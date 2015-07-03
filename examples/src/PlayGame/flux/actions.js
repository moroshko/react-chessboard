import { FLUX_ACTIONS } from './constants';

const { NEW_GAME, FLIP_BOARD, MOVE_PIECE, PROMOTE_PAWN } = FLUX_ACTIONS;

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

export function promotePawn(fromSquare, toSquare, color) {
  return {
    type: PROMOTE_PAWN,
    fromSquare,
    toSquare,
    color
  };
}
