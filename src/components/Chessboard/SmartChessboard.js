'use strict';

import React, { Component, PropTypes } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd/modules/backends/HTML5';
import { ORIENTATION } from '../../utils/constants/constants';
import DumbChessboard from './DumbChessboard';

@DragDropContext(HTML5Backend)
export default class SmartChessboard extends Component {
  static propTypes = {
    dnd: PropTypes.bool,
    orientation: PropTypes.oneOf(
      Object.keys(ORIENTATION).map(name => ORIENTATION[name])
    ).isRequired,
    fen: PropTypes.string.isRequired,
    canMove: PropTypes.func,
    onMove: PropTypes.func
  };

  static defaultProps = {
    dnd: true,
    canMove: () => true,
    onMove: () => {}
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { dnd, orientation, fen, canMove, onMove } = this.props;

    return (
      <DumbChessboard dnd={dnd} orientation={orientation}
                      fen={fen} canMove={canMove} onMove={onMove} />
    );
  }
}
