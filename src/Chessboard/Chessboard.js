'use strict';

import React, { Component, PropTypes } from 'react';
import Square from '../Square/Square';

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
    return (
      <div className="react-chessboard">
        <Square color="w" piece="bQ" />
        <Square color="b" piece="wN" />
        <Square color="b" />
      </div>
    );
  }
}
