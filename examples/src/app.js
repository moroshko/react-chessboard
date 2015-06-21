'use strict';

require('./app.less');

import React, { Component } from 'react';
import Chess from 'chess.js';
import Chessboard from '../../src/components/Chessboard/Chessboard';
import { ORIENTATION } from '../../src/utils/constants/constants';

class App extends Component { // eslint-disable-line no-shadow
  constructor() {
    super();

    this.game = new Chess();

    this.state = {
      orientation: ORIENTATION.WHITE,
      fen: this.game.fen()
    };

    this.flipBoard = ::this.flipBoard;
    this.canMove = ::this.canMove;
    this.onMove = ::this.onMove;
  }

  flipBoard() {
    this.setState({
      orientation: this.state.orientation === ORIENTATION.WHITE
        ? ORIENTATION.BLACK
        : ORIENTATION.WHITE
    });
  }

  canMove(fromSquare, toSquare) {
    const legalMoves = this.game.moves({ verbose: true });

    return legalMoves
      .filter(legalMove => legalMove.from === fromSquare &&
                           legalMove.to === toSquare).length === 1;
  }

  onMove(fromSquare, toSquare) {
    this.game.move({
      from: fromSquare,
      to: toSquare
    });

    this.setState({
      fen: this.game.fen()
    });
  }

  render() {
    return (
      <div>
        <h1>react-chessboard</h1>
        <div className="chessboard">
          <Chessboard orientation={this.state.orientation}
                      fen={this.state.fen}
                      canMove={this.canMove}
                      onMove={this.onMove} />
          <button onClick={this.flipBoard}>Flip board</button>
        </div>
      </div>
    );
  }
}

React.render(<App />, document.getElementById('app'));
