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

var _reactDndModulesBackendsHTML5 = require('react-dnd/modules/backends/HTML5');

var _reactDndModulesBackendsHTML52 = _interopRequireDefault(_reactDndModulesBackendsHTML5);

var _constants = require('../constants');

var _fenFen = require('../fen/fen');

var _SquareSquare = require('../Square/Square');

var _SquareSquare2 = _interopRequireDefault(_SquareSquare);

var _PiecePiece = require('../Piece/Piece');

var _PiecePiece2 = _interopRequireDefault(_PiecePiece);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./Chessboard.less');

var Chessboard = (function (_Component) {
  function Chessboard(props) {
    _classCallCheck(this, _Chessboard);

    _get(Object.getPrototypeOf(_Chessboard.prototype), 'constructor', this).call(this, props);
  }

  _inherits(Chessboard, _Component);

  var _Chessboard = Chessboard;

  _createClass(_Chessboard, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var dnd = _props.dnd;
      var orientation = _props.orientation;
      var fen = _props.fen;
      var canMove = _props.canMove;
      var onMove = _props.onMove;

      var pieces = (0, _fenFen.getPieces)(fen);
      var squares = [];

      for (var i = 0; i < 64; i++) {
        var piece = pieces[i];
        var square = _constants.SQUARE.NAMES[i];

        squares.push(_react2['default'].createElement(
          _SquareSquare2['default'],
          { name: square, key: square, canMove: canMove, onMove: onMove },
          piece && _react2['default'].createElement(_PiecePiece2['default'], { dnd: dnd, name: piece, square: square })
        ));
      }

      var classes = (0, _classnames2['default'])({
        'react-chessboard': true,
        'react-chessboard--flipped': orientation === _constants.BOARD.ORIENTATION.BLACK
      });

      return _react2['default'].createElement(
        'div',
        { className: classes },
        squares
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      dnd: _react.PropTypes.bool,
      orientation: _react.PropTypes.oneOf(Object.keys(_constants.BOARD.ORIENTATION).map(function (name) {
        return _constants.BOARD.ORIENTATION[name];
      })),
      fen: _react.PropTypes.string,
      canMove: _react.PropTypes.func,
      onMove: _react.PropTypes.func
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      dnd: true,
      orientation: _constants.BOARD.ORIENTATION.WHITE,
      fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
      canMove: function canMove() {
        return true;
      },
      onMove: function onMove() {}
    },
    enumerable: true
  }]);

  Chessboard = (0, _reactDnd.DragDropContext)(_reactDndModulesBackendsHTML52['default'])(Chessboard) || Chessboard;
  return Chessboard;
})(_react.Component);

exports['default'] = Chessboard;
module.exports = exports['default'];
