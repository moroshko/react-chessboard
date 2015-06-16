'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDnd = require('react-dnd');

var _constants = require('../constants');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./Square.less');

var squareTarget = {
  canDrop: function canDrop(props, monitor) {
    var fromSquare = monitor.getItem().from;
    var toSquare = props.name;

    return props.canMove(fromSquare, toSquare);
  },

  drop: function drop(props, monitor) {
    var fromSquare = monitor.getItem().from;
    var toSquare = props.name;

    props.onMove(fromSquare, toSquare);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

var Square = (function (_Component) {
  function Square(props) {
    _classCallCheck(this, _Square);

    _get(Object.getPrototypeOf(_Square.prototype), 'constructor', this).call(this, props);
  }

  _inherits(Square, _Component);

  var _Square = Square;

  _createClass(_Square, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var name = _props.name;
      var connectDropTarget = _props.connectDropTarget;
      var isOver = _props.isOver;

      var black = (name.charCodeAt(0) + name.charCodeAt(1)) % 2 === 0;
      var classes = (0, _classnames2['default'])({
        'react-chessboard-square': true,
        'react-chessboard-square--white': !black,
        'react-chessboard-square--black': black,
        'react-chessboard-square--over': isOver
      });

      return connectDropTarget(_react2['default'].createElement(
        'div',
        { className: classes },
        this.props.children
      ));
    }
  }], [{
    key: 'propTypes',
    value: {
      name: _react.PropTypes.oneOf(_constants.SQUARE.NAMES).isRequired,
      onMove: _react.PropTypes.func.isRequired,
      connectDropTarget: _react.PropTypes.func.isRequired,
      isOver: _react.PropTypes.bool.isRequired
    },
    enumerable: true
  }]);

  Square = (0, _reactDnd.DropTarget)(_constants.DND_TYPES.PIECE, squareTarget, collect)(Square) || Square;
  return Square;
})(_react.Component);

exports['default'] = Square;
module.exports = exports['default'];
