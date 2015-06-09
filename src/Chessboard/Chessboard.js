'use strict';

require('./Chessboard.less');

import React, { Component, PropTypes } from 'react';
import Square from '../Square/Square';
import { getPieces } from '../fen/fen';

export default class Chessboard extends Component {
  static propTypes = {
    fen: PropTypes.string
  };

  static defaultProps = {
    fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
  };

  constructor(props) {
    super(props);
  }

  render() {
    const pieces = getPieces(this.props.fen);
    let squares = [];

    for (let r = 7; r >= 0; r--) {
      for (let c = 0; c <= 7; c++) {
        const color = ((r + c) % 2 === 0 ? 'b' : 'w');
        const key = 8 * (7 - r) + c;
        const piece = pieces[key];

        squares.push(<Square color={color} piece={piece} key={key} />);
      }
    }

    return (
      <div className="react-chessboard">
        {squares}
      </div>
    );
  }
}
