require('./Square.less');

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class DumbSquare extends Component {
  static propTypes = {
    isBlack: PropTypes.bool.isRequired,
    isOver: PropTypes.bool.isRequired,
    children: PropTypes.any
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { isBlack, isOver } = this.props;
    const classes = classNames({
      'react-chessboard-square': true,
      'react-chessboard-square--black': isBlack,
      'react-chessboard-square--white': !isBlack,
      'react-chessboard-square--over': isOver
    });

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
}
