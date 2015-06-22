'use strict';

import React, { Component, PropTypes } from 'react';
import { createRedux, createDispatcher } from 'redux';
import { Provider, Connector } from 'redux/react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd/modules/backends/HTML5';
import store from '../../utils/flux/store';
import DumbChessboard from './DumbChessboard';

function select(state) {
  return {
    orientation: state.orientation,
    fen: state.fen
  };
}

@DragDropContext(HTML5Backend)
export default class SmartChessboard extends Component {
  static propTypes = {
    dnd: PropTypes.bool,
    canMove: PropTypes.func
  };

  static defaultProps = {
    dnd: true,
    canMove: () => true
  };

  constructor(props) {
    super(props);
    this.redux = createRedux(createDispatcher(store));
  }

  render() {
    const { dnd, canMove } = this.props;

    return (
      <Provider redux={this.redux}>
        {() =>
          <Connector select={select}>
            {({ orientation, fen, dispatch }) =>
              <DumbChessboard dnd={dnd} orientation={orientation}
                              fen={fen} canMove={canMove} dispatch={dispatch} />
            }
          </Connector>
        }
      </Provider>
    );
  }
}
