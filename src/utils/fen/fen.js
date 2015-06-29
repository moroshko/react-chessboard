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

function replaceChar(str, index, char) {
  return str.slice(0, index) + char + str.slice(index + 1);
}

function getSquareIndices(square) {
  return [56 - square.charCodeAt(1), square.charCodeAt(0) - 97];
}

function removeRowNumbers(row) {
  return row.replace(/(\d)/g, digit => '.'.repeat(+digit));
}

function getFenArray(fen) {
  return fen.split(' ')[0].split('/').map(removeRowNumbers);
}

function insertRowNumbers(row) {
  return row.replace(/(\.+)/g, dots => dots.length);
}

function getFenFromArray(fenArray) {
  return fenArray.map(insertRowNumbers).join('/');
}

function getPieces(fen) {
  let pieces = [];

  getFenArray(fen).forEach(row => {
    row.split('').forEach(char => pieces.push(piecesMap[char]));
  });

  return pieces;
}

function movePiece(fen, fromSquare, toSquare) {
  const fenArray = getFenArray(fen);
  let [r, c] = getSquareIndices(fromSquare);

  if (fenArray[r][c] === '.') {
    return fen;
  }

  const piece = fenArray[r][c];

  fenArray[r] = replaceChar(fenArray[r], c, '.');
  [r, c] = getSquareIndices(toSquare);
  fenArray[r] = replaceChar(fenArray[r], c, piece);

  return getFenFromArray(fenArray);
}

export default {
  getPieces,
  movePiece
};
