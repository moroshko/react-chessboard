'use strict';

import React, { Component, PropTypes } from 'react';

export default class Square extends Component {
  static propTypes = {
    color: PropTypes.oneOf(['w', 'b']).isRequired,
    piece: PropTypes.oneOf(['wP', 'wN', 'wB', 'wR', 'wQ', 'wK',
                            'bP', 'bN', 'bB', 'bR', 'bQ', 'bK'])
  };

  static defaultProps = {
    piece: null
  };

  constructor(props) {
    super(props);

    if (this.props.piece === null) {
      this.piece = null;
    } else {
      this.piece = require(`!!raw!../../pieces/${this.props.piece}.svg`);
    }
  }

  render() {
    return (
      <div className="react-chessboard-square"
           dangerouslySetInnerHTML={{ __html: this.piece }}></div>
    );
  }
}
