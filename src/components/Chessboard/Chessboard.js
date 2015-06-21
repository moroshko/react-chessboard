'use strict';

require('./Chessboard.less');

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd/modules/backends/HTML5';
import { ORIENTATION, SQUARES } from '../../utils/constants/constants';
import { getPieces } from '../../utils/fen/fen';
import Square from '../Square/Square';
import Piece from '../Piece/Piece';

@DragDropContext(HTML5Backend)
export default class Chessboard extends Component {
  static propTypes = {
    dnd: PropTypes.bool,
    orientation: PropTypes.oneOf(
      Object.keys(ORIENTATION).map(name => ORIENTATION[name])
    ),
    fen: PropTypes.string,
    canMove: PropTypes.func,
    onMove: PropTypes.func
  };

  static defaultProps = {
    dnd: true,
    orientation: ORIENTATION.WHITE,
    fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR',
    canMove: () => true,
    onMove: () => {}
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { dnd, orientation, fen, canMove, onMove } = this.props;
    const pieces = getPieces(fen);
    let squares = [];

    for (let i = 0; i < 64; i++) {
      const piece = pieces[i];
      const square = SQUARES[i];

      squares.push(
        <Square name={square} key={square} canMove={canMove} onMove={onMove}>
          {piece && <Piece dnd={dnd} name={piece} square={square} />}
        </Square>
      );
    }

    const classes = classNames({
      'react-chessboard': true,
      'react-chessboard--flipped': orientation === ORIENTATION.BLACK
    });

    return (
      <div className={classes}>
        {squares}
      </div>
    );
  }
}
