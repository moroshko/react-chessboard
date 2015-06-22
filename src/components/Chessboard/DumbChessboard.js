'use strict';

require('./Chessboard.less');

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { ORIENTATION, SQUARES } from '../../utils/constants/constants';
import { getPieces } from '../../utils/fen/fen';
import SmartSquare from '../Square/SmartSquare';
import SmartPiece from '../Piece/SmartPiece';

export default class DumbChessboard extends Component {
  static propTypes = {
    dnd: PropTypes.bool.isRequired,
    orientation: PropTypes.oneOf(
      Object.keys(ORIENTATION).map(name => ORIENTATION[name])
    ).isRequired,
    fen: PropTypes.string.isRequired,
    canMove: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { dnd, orientation, fen, canMove, dispatch } = this.props;
    const pieces = getPieces(fen);
    let squares = [];

    for (let i = 0; i < 64; i++) {
      const piece = pieces[i];
      const square = SQUARES[i];

      squares.push(
        <SmartSquare name={square} key={square}
                     canMove={canMove} dispatch={dispatch}>
          {piece && <SmartPiece dnd={dnd} square={square} name={piece} />}
        </SmartSquare>
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
