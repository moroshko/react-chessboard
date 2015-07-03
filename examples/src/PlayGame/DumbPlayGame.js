require('./PlayGame.less');

import React, { Component, PropTypes } from 'react';
import { ORIENTATION } from '../../../src/utils/constants/constants';
import Chessboard from '../../../src/components/Chessboard/Chessboard';

export default class DumbPlayGame extends Component {
  static propTypes = {
    dnd: PropTypes.bool.isRequired,
    orientation: PropTypes.oneOf(
      Object.keys(ORIENTATION).map(name => ORIENTATION[name])
    ).isRequired,
    fen: PropTypes.string.isRequired,
    canMove: PropTypes.func.isRequired,
    movePiece: PropTypes.func.isRequired,
    promotePawn: PropTypes.func.isRequired,
    newGame: PropTypes.func.isRequired,
    flipBoard: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { dnd, orientation, fen, canMove,
            movePiece, promotePawn, newGame, flipBoard } = this.props;

    return (
      <div className="play-game">
        <div className="chessboard">
          <Chessboard dnd={dnd}
                      orientation={orientation}
                      fen={fen}
                      canMove={canMove}
                      onMove={movePiece}
                      onPromotion={promotePawn} />
        </div>
        <div className="controls">
          <button onClick={newGame}>New game</button>
          <button onClick={flipBoard}>Flip board</button>
        </div>
      </div>
    );
  }
}
