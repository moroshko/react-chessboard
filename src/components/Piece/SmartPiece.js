'use strict';

import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import { SQUARES, PIECES, DND_TYPES } from '../../utils/constants/constants';
import DumbPiece from './DumbPiece';

const pieceSource = {
  canDrag(props) {
    return props.dnd;
  },

  beginDrag(props) {
    return {
      from: props.square
    };
  }
};

function collect(connect, monitor) {
  return {
    isDragging: monitor.isDragging(),
    connectDragSource: connect.dragSource()
  };
}

@DragSource(DND_TYPES.PIECE, pieceSource, collect)
export default class SmartPiece extends Component {
  static propTypes = {
    dnd: PropTypes.bool.isRequired,
    square: PropTypes.oneOf(SQUARES).isRequired,
    connectDragSource: PropTypes.func.isRequired,
    name: PropTypes.oneOf(PIECES).isRequired,
    isDragging: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { connectDragSource, name, isDragging } = this.props;

    return connectDragSource(
      <DumbPiece name={name} isDragging={isDragging} />
    );
  }
}