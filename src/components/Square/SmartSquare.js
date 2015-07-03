import React, { Component, PropTypes } from 'react';
import { DropTarget } from 'react-dnd';
import { COLOR, SQUARES, DND_TYPES } from '../../utils/constants/constants';
import DumbSquare from './DumbSquare';

const squareTarget = {
  canDrop(props, monitor) {
    const fromSquare = monitor.getItem().from;
    const toSquare = props.name;

    return props.canMove(fromSquare, toSquare);
  },

  drop(props, monitor) {
    const draggedItem = monitor.getItem();
    const fromSquare = draggedItem.from;
    const toSquare = props.name;

    if (draggedItem.piece === 'wP' && toSquare.charCodeAt(1) === 56) {
      props.onPromotion(fromSquare, toSquare, COLOR.WHITE);
    } else if (draggedItem.piece === 'bP' && toSquare.charCodeAt(1) === 49) {
      props.onPromotion(fromSquare, toSquare, COLOR.BLACK);
    } else {
      props.onMove(fromSquare, toSquare);
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

@DropTarget(DND_TYPES.PIECE, squareTarget, collect)
export default class SmartSquare extends Component {
  static propTypes = {
    name: PropTypes.oneOf(SQUARES).isRequired,
    canMove: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    onMove: PropTypes.func.isRequired,
    onPromotion: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { name, connectDropTarget, isOver } = this.props;
    const isBlack = (name.charCodeAt(0) + name.charCodeAt(1)) % 2 === 0;

    return connectDropTarget(
      <DumbSquare isBlack={isBlack} isOver={isOver}>
        {this.props.children}
      </DumbSquare>
    );
  }
}
