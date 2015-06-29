require('./Examples.less');

import React, { Component } from 'react';
import classnames from 'classnames';
import PlayGame from './PlayGame/SmartPlayGame';
import Puzzle from './Puzzle/SmartPuzzle';

export default class Examples extends Component {
  constructor() {
    super();

    this.examples = [
      'Play game',
      'Puzzle'
    ];

    this.state = {
      activeExample: decodeURI(location.hash).split('#')[1] || this.examples[0]
    };
  }

  changeExample(example) {
    this.setState({
      activeExample: example
    });
  }

  renderMenu() {
    return (
      <div className="examples__menu" role="menu">
        {this.examples.map(example => {
          const classes = classnames({
            'examples__menu-item': true,
            'examples__menu-item--active': example === this.state.activeExample
          });

          return (
            <div className={classes}
                 key={example}
                 role="menuitem"
                 tabIndex="0"
                 onClick={this.changeExample.bind(this, example)}>
              {example}
            </div>
          );
        })}
      </div>
    );
  }

  renderExample() {
    switch (this.state.activeExample) {
      case 'Play game': return <PlayGame />;
      case 'Puzzle': return <Puzzle />;
    }
  }

  render() {
    return (
      <div className="examples">
        {this.renderMenu()}
        {this.renderExample()}
      </div>
    );
  }
}
