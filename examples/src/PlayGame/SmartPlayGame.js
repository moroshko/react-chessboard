import React, { Component } from 'react';
import { createRedux, createDispatcher, bindActionCreators } from 'redux';
import { Provider, Connector } from 'redux/react';
import store from './flux/store';
import * as actions from './flux/actions';
import DumbPlayGame from './DumbPlayGame';

export default class SmartPlayGame extends Component {
  constructor() {
    super();

    this.redux = createRedux(createDispatcher(store));
  }

  select(state) {
    return {
      orientation: state.orientation,
      fen: state.fen,
      canMove: state.canMove
    };
  }

  render() {
    return (
      <Provider redux={this.redux}>
        {() =>
          <Connector select={this.select}>
            {({ orientation, fen, canMove, dispatch }) =>
              <DumbPlayGame dnd={true}
                            orientation={orientation}
                            fen={fen}
                            canMove={canMove}
                            {...bindActionCreators(actions, dispatch)} />
            }
          </Connector>
        }
      </Provider>
    );
  }
}
