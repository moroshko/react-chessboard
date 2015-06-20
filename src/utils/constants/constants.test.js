'use strict';

import { expect } from 'chai';
import { BOARD, SQUARE, PIECE } from './constants';

describe('constants', () => {
  describe('BOARD', () => {
    it('should have 2 orientations', () => {
      expect(Object.keys(BOARD.ORIENTATION)).to.have.length(2);
    });
  });

  describe('SQUARE', () => {
    it('should have 64 squares', () => {
      expect(Object.keys(SQUARE.NAMES)).to.have.length(64);
    });
  });

  describe('PIECE', () => {
    it('should have 12 pieces', () => {
      expect(Object.keys(PIECE.NAMES)).to.have.length(12);
    });
  });
});
