import { expect } from 'chai';
import { getPieces, movePiece } from './fen';

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

  describe('movePiece()', () => {
    it('should move piece to empty square', () => {
      expect(
        movePiece('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR', 'e2', 'e4')
      ).to.equal('rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR');
    });

    it('should move piece to square with opponent\'s piece', () => {
      expect(
        movePiece('r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R', 'f3', 'e5')
      ).to.equal('r1bqkbnr/pppp1ppp/2n5/4N3/4P3/8/PPPP1PPP/RNBQKB1R');
    });

    it('should move piece to square with my piece', () => {
      expect(
        movePiece('r1bqkbnr/pppp1ppp/2n5/4N3/4P3/8/PPPP1PPP/RNBQKB1R', 'd1', 'a1')
      ).to.equal('r1bqkbnr/pppp1ppp/2n5/4N3/4P3/8/PPPP1PPP/QNB1KB1R');
    });

    it('should not change fen if `from` square is empty', () => {
      expect(
        movePiece('rnbqkbnr/ppp2ppp/4p3/8/3Pp3/2N5/PPP2PPP/R1BQKBNR', 'e2', 'c4')
      ).to.equal('rnbqkbnr/ppp2ppp/4p3/8/3Pp3/2N5/PPP2PPP/R1BQKBNR');
    });

    it('should not change fen if `from` and `to` are the same', () => {
      expect(
        movePiece('rnbqkb1r/pp3ppp/4pn2/2pp4/2PP4/2N2N2/PP2PPPP/R1BQKB1R', 'c4', 'c4')
      ).to.equal('rnbqkb1r/pp3ppp/4pn2/2pp4/2PP4/2N2N2/PP2PPPP/R1BQKB1R');
    });
  });
});
