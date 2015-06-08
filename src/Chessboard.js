'use strict';

import React, { Component, PropTypes } from 'react';

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
        Chessboard
      </div>
    );
  }
}
