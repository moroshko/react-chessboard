'use strict';

import { FLUX_ACTIONS } from './constants';

const { FLIP_BOARD, MOVE_PIECE } = FLUX_ACTIONS;

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
