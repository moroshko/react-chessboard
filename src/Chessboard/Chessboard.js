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
    dnd: PropTypes.bool,
    fen: PropTypes.string,
    onMove: PropTypes.func
  };

  static defaultProps = {
    dnd: true,
    fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
    onMove: () => {}
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { dnd, fen, onMove } = this.props;
    const pieces = getPieces(fen);
    let squares = [];

    for (let i = 0; i < 64; i++) {
      const piece = pieces[i];
      const square = SQUARE.NAMES[i];

      squares.push(
        <Square name={square} key={square} onMove={onMove} >
          {piece && <Piece dnd={dnd} name={piece} square={square} />}
        </Square>
      );
    }

    return (
      <div className="react-chessboard">
        {squares}
      </div>
    );
  }
}
