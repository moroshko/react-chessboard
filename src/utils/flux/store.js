'use strict';

import { ORIENTATION, FLUX_ACTIONS } from '../constants/constants';
import { movePiece } from '../fen/fen';

const { FLIP_BOARD, MOVE_PIECE } = FLUX_ACTIONS;

const initialState = {
  orientation: ORIENTATION.WHITE,
  fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'
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
      return {
        ...state,
        fen: movePiece(state.fen, action.fromSquare, action.toSquare)
      };

    default:
      return state;
  }
}
