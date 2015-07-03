import Chess from 'chess.js';
import { FLUX_ACTIONS } from './constants';
import { COLOR, ORIENTATION } from '../../../../src/utils/constants/constants';

const { NEW_GAME, FLIP_BOARD, MOVE_PIECE, PROMOTE_PAWN } = FLUX_ACTIONS;
const initialFen = 'r2qkb1r/pPpbpppp/5n2/8/8/8/PPPP1PPP/RNBQKBNR w KQkq - 1 5';

// `game` is not part of the state because game.move() mutates `game`
let game = new Chess(initialFen);

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
      game = new Chess(initialFen);

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

    case PROMOTE_PAWN:
      console.log(action);

      return state;

    default:
      return state;
  }
}
