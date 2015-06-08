'use strict';

import React, { Component, PropTypes } from 'react';
import pawn from '!!raw!./pieces/wP.svg';

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
      <div>
        <div dangerouslySetInnerHTML={{ __html: pawn }}></div>
      </div>
    );
  }
}
