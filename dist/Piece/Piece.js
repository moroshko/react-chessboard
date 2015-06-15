'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _constants = require('../constants');

var _reactDnd = require('react-dnd');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./Piece.less');

var pieceSource = {
  canDrag: function canDrag(props) {
    return props.dnd;
  },

  beginDrag: function beginDrag(props) {
    return {
      from: props.square
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

var Piece = (function (_Component) {
  function Piece(props) {
    _classCallCheck(this, _Piece);

    _get(Object.getPrototypeOf(_Piece.prototype), 'constructor', this).call(this, props);
  }

  _inherits(Piece, _Component);

  var _Piece = Piece;

  _createClass(_Piece, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props;
      var name = _props.name;
      var connectDragSource = _props.connectDragSource;
      var isDragging = _props.isDragging;

      var classes = (0, _classnames2['default'])((_classNames = {
        'react-chessboard-piece': true
      }, _defineProperty(_classNames, 'react-chessboard-piece--' + name, true), _defineProperty(_classNames, 'react-chessboard-piece--dragging', isDragging), _classNames));

      return connectDragSource(_react2['default'].createElement('div', { className: classes }));
    }
  }], [{
    key: 'propTypes',
    value: {
      dnd: _react.PropTypes.bool.isRequired,
      name: _react.PropTypes.oneOf(_constants.PIECE.NAMES).isRequired,
      square: _react.PropTypes.oneOf(_constants.SQUARE.NAMES).isRequired,
      connectDragSource: _react.PropTypes.func.isRequired,
      isDragging: _react.PropTypes.bool.isRequired
    },
    enumerable: true
  }]);

  Piece = (0, _reactDnd.DragSource)(_constants.DND_TYPES.PIECE, pieceSource, collect)(Piece) || Piece;
  return Piece;
})(_react.Component);

exports['default'] = Piece;
module.exports = exports['default'];
