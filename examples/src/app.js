require('./app.less');

import React, { Component } from 'react';
import Examples from './Examples';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="header">react-chessboard</h1>
        <Examples />
      </div>
    );
  }
}

React.render(<App />, document.getElementById('app'));
