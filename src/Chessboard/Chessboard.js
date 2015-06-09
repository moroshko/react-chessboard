'use strict';

require('./Chessboard.less');

import React, { Component, PropTypes } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd/modules/backends/HTML5';
import { SQUARE } from '../constants';
import { getPieces } from '../fen/fen';
import Square from '../Square/Square';
import Piece from '../Piece/Piece';

@DragDropContext(HTML5Backend)
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

    for (let i = 0; i < 64; i++) {
      const piece = pieces[i];
      const square = SQUARE.NAMES[i];

      squares.push(
        <Square name={square} key={square}>
          {piece && <Piece name={piece} square={square} />}
        </Square>
      );
    }

    // for (let r = 7; r >= 0; r--) {
    //   for (let c = 0; c <= 7; c++) {
    //     const color = ((r + c) % 2 === 0 ? 'b' : 'w');
    //     const key = 8 * (7 - r) + c;
    //     const piece = pieces[key];

    //     squares.push(<Square color={color} piece={piece} key={key} />);
    //   }
    // }

    return (
      <div className="react-chessboard">
        {squares}
      </div>
    );
  }
}
