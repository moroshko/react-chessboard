'use strict';

require('./Square.less');

import React, { Component, PropTypes } from 'react';
import { DropTarget } from 'react-dnd';
import classNames from 'classnames';
import { SQUARE, DND_TYPES } from '../constants';

const squareTarget = {
  drop(props, monitor) {
    const from = monitor.getItem().from;
    const to = props.name;

    console.log(`From ${from} to ${to}`);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

@DropTarget(DND_TYPES.PIECE, squareTarget, collect)
export default class Square extends Component {
  static propTypes = {
    name: PropTypes.oneOf(SQUARE.NAMES).isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { name, connectDropTarget, isOver } = this.props;
    const black = (name.charCodeAt(0) + name.charCodeAt(1)) % 2 === 0;
    const classes = classNames({
      'react-chessboard-square': true,
      'react-chessboard-square--white': !black,
      'react-chessboard-square--black': black,
      'react-chessboard-square--over': isOver
    });

    return connectDropTarget(
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
}
