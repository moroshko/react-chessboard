'use strict';

export default {
  SQUARE: {
    NAMES: [
      'a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8',
      'a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7',
      'a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6',
      'a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5',
      'a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4',
      'a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3',
      'a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2',
      'a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'
    ]
  },
  PIECE: {
    wP: require(`!!raw!../pieces/wP.svg`),
    wN: require(`!!raw!../pieces/wN.svg`),
    wB: require(`!!raw!../pieces/wB.svg`),
    wR: require(`!!raw!../pieces/wR.svg`),
    wQ: require(`!!raw!../pieces/wQ.svg`),
    wK: require(`!!raw!../pieces/wK.svg`),
    bP: require(`!!raw!../pieces/bP.svg`),
    bN: require(`!!raw!../pieces/bN.svg`),
    bB: require(`!!raw!../pieces/bB.svg`),
    bR: require(`!!raw!../pieces/bR.svg`),
    bQ: require(`!!raw!../pieces/bQ.svg`),
    bK: require(`!!raw!../pieces/bK.svg`)
  },
  DND_TYPES: {
    PIECE: 'piece'
  }
};
