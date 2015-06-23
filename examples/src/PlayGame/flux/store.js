'use strict';

import Chess from 'chess.js';
import { FLUX_ACTIONS } from './constants';
import { ORIENTATION } from '../../../../src/utils/constants/constants';
import { movePiece } from '../../../../src/utils/fen/fen';

const { FLIP_BOARD, MOVE_PIECE } = FLUX_ACTIONS;

const game = new Chess();

function canMove(fromSquare, toSquare) {
  const legalMoves = game.moves({ verbose: true });

  return legalMoves
    .filter(legalMove => legalMove.from === fromSquare &&
                         legalMove.to === toSquare).length === 1;
}

const initialState = {
  orientation: ORIENTATION.WHITE,
  fen: game.fen(),
  canMove: canMove
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FLIP_BOARD:
      return {
        ...state,
        orientation: state.orientation === ORIENTATION.WHITE
          ? ORIENTATION.BLACK : ORIENTATION.WHITE
      };

    case MOVE_PIECE:
      game.move({
        from: action.fromSquare,
        to: action.toSquare
      });

      return {
        ...state,
        fen: movePiece(state.fen, action.fromSquare, action.toSquare)
      };

    default:
      return state;
  }
}
