'use strict';

require('./Square.less');

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

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
    const classes = classNames({
      'react-chessboard-square': true,
      'react-chessboard-square--white': this.props.color === 'w',
      'react-chessboard-square--black': this.props.color === 'b'
    });

    return (
      <div className={classes}
           dangerouslySetInnerHTML={{ __html: this.piece }}>
      </div>
    );
  }
}
