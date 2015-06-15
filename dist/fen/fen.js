'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var piecesMap = {
  'p': 'bP',
  'b': 'bB',
  'n': 'bN',
  'r': 'bR',
  'q': 'bQ',
  'k': 'bK',
  'P': 'wP',
  'B': 'wB',
  'N': 'wN',
  'R': 'wR',
  'Q': 'wQ',
  'K': 'wK',
  '.': null
};

function removeRowNumbers(row) {
  return row.replace(/(\d)/g, function (digit) {
    return '.'.repeat(+digit);
  });
}

function getPieces(fen) {
  var pieces = [];

  fen.split(' ')[0].split('/').map(removeRowNumbers).forEach(function (row) {
    row.split('').forEach(function (char) {
      return pieces.push(piecesMap[char]);
    });
  });

  return pieces;
}

exports['default'] = {
  getPieces: getPieces
};
module.exports = exports['default'];
