'use strict';

require('./app.less');

import React, { Component } from 'react';
import Chessboard from '../../src/Chessboard/Chessboard';
import Chess from 'chess.js';

class App extends Component { // eslint-disable-line no-shadow
  constructor() {
    super();

    this.game = new Chess();

    this.state = {
      fen: this.game.fen()
    };

    this.onMove = ::this.onMove;
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
          <Chessboard fen={this.state.fen}
                      onMove={this.onMove} />
        </div>
      </div>
    );
  }
}

React.render(<App />, document.getElementById('app'));
