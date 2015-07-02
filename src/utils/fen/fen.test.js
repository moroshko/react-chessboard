import { expect } from 'chai';
import { getPieces } from './fen';

describe('fen', () => {
  describe('getPieces()', () => {
    it('should return the right pieces in the right order', () => {
      const positions = [{
        fen: 'r1b1k2r/pp2nppp/1qn1p3/1B1pP3/8/b1P2N2/PP3PPP/R1BQK2R',
        pieces: [
          'bR', null, 'bB', null, 'bK', null, null, 'bR',
          'bP', 'bP', null, null, 'bN', 'bP', 'bP', 'bP',
          null, 'bQ', 'bN', null, 'bP', null, null, null,
          null, 'wB', null, 'bP', 'wP', null, null, null,
          null, null, null, null, null, null, null, null,
          'bB', null, 'wP', null, null, 'wN', null, null,
          'wP', 'wP', null, null, null, 'wP', 'wP', 'wP',
          'wR', null, 'wB', 'wQ', 'wK', null, null, 'wR'
        ]
      }, {
        fen: 'rnbq1rk1/pppp1p1p/4pn2/6p1/1bPP4/2N2N2/PP1BPPPP/R2QKB1R w KQkq -',
        pieces: [
          'bR', 'bN', 'bB', 'bQ', null, 'bR', 'bK', null,
          'bP', 'bP', 'bP', 'bP', null, 'bP', null, 'bP',
          null, null, null, null, 'bP', 'bN', null, null,
          null, null, null, null, null, null, 'bP', null,
          null, 'bB', 'wP', 'wP', null, null, null, null,
          null, null, 'wN', null, null, 'wN', null, null,
          'wP', 'wP', null, 'wB', 'wP', 'wP', 'wP', 'wP',
          'wR', null, null, 'wQ', 'wK', 'wB', null, 'wR'
        ]
      }];

      positions.forEach(position => {
        expect(getPieces(position.fen)).to.deep.equal(position.pieces);
      });
    });
  });
});
