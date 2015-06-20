'use strict';

const piecesMap = {
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
  return row.replace(/(\d)/g, (digit) => '.'.repeat(+digit));
}

function getPieces(fen) {
  let pieces = [];

  fen.split(' ')[0].split('/').map(removeRowNumbers).forEach(row => {
    row.split('').forEach(char => pieces.push(piecesMap[char]));
  });

  return pieces;
}

export default {
  getPieces
};
