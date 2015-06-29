import Chess from 'chess.js';
import { FLUX_ACTIONS } from './constants';
import { COLOR, ORIENTATION } from '../../../../src/utils/constants/constants';

const { NEW_GAME, FLIP_BOARD, MOVE_PIECE } = FLUX_ACTIONS;

// `game` is not part of the state because game.move() mutates `game`
let game = new Chess();

function canMove(fromSquare, toSquare) {
  const legalMoves = game.moves({ verbose: true });

  if (typeof toSquare === 'undefined') {
    return legalMoves
      .filter(legalMove => legalMove.from === fromSquare).length > 0;
  }

  return legalMoves
    .filter(legalMove => legalMove.from === fromSquare &&
                         legalMove.to === toSquare).length > 0;
}

function makeRandomMove() {
  const legalMoves = game.moves();
  const randomMove = legalMoves[Math.floor(Math.random() * legalMoves.length)];

  game.move(randomMove);
}

const initialState = {
  color: COLOR.WHITE,
  orientation: ORIENTATION.WHITE,
  fen: game.fen(),
  canMove: canMove
};

export default function(state = initialState, action) {
  switch (action.type) {
    case NEW_GAME:
      game = new Chess();

      return {
        ...state,
        fen: game.fen()
      };

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

      makeRandomMove();

      return {
        ...state,
        fen: game.fen()
      };

    default:
      return state;
  }
}
