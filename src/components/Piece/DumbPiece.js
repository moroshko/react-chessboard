'use strict';

require('./Piece.less');

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { PIECES } from '../../utils/constants/constants';

export default class DumbPiece extends Component {
  static propTypes = {
    name: PropTypes.oneOf(PIECES).isRequired,
    isDragging: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { name, isDragging } = this.props;
    const classes = classNames({
      'react-chessboard-piece': true,
      [`react-chessboard-piece--${name}`]: true,
      'react-chessboard-piece--dragging': isDragging
    });

    return (
      <div className={classes} />
    );
  }
}
