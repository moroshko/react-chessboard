'use strict';

require('./app.less');

import React, { Component } from 'react';
import a11y from 'react-a11y';
import Chessboard from '../../src/Chessboard/Chessboard';

class App extends Component { // eslint-disable-line no-shadow
  render() {
    return (
      <div>
        <h1>react-chessboard</h1>
        <div className="chessboard">
          <Chessboard />
        </div>
      </div>
    );
  }
}

React.render(<App />, document.getElementById('app'));

a11y(React, { includeSrcNode: true });
