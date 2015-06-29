require('./Piece.less');

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { PIECES } from '../../utils/constants/constants';

export default class DumbPiece extends Component {
  static propTypes = {
    name: PropTypes.oneOf(PIECES).isRequired,
    canMove: PropTypes.bool.isRequired,
    isDragging: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { name, canMove, isDragging } = this.props;
    const classes = classNames({
      'react-chessboard-piece': true,
      [`react-chessboard-piece--${name}`]: true,
      'react-chessboard-piece--can-move': canMove,
      'react-chessboard-piece--dragging': isDragging
    });

    return (
      <div className={classes} />
    );
  }
}
