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
  return row.replace(/(\d)/g, digit => '.'.repeat(+digit));
}

function getFenArray(fen) {
  return fen.split(' ')[0].split('/').map(removeRowNumbers);
}

function getPieces(fen) {
  let pieces = [];

  getFenArray(fen).forEach(row => {
    row.split('').forEach(char => pieces.push(piecesMap[char]));
  });

  return pieces;
}

export default {
  getPieces
};
