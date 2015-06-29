import { expect } from 'chai';
import { COLOR, ORIENTATION, SQUARES, PIECES } from './constants';

describe('constant', () => {
  describe('COLOR', () => {
    it('should have 2 keys', () => {
      expect(Object.keys(COLOR)).to.have.length(2);
    });
  });

  describe('ORIENTATION', () => {
    it('should have 2 keys', () => {
      expect(Object.keys(ORIENTATION)).to.have.length(2);
    });
  });

  describe('SQUARES', () => {
    it('should have 64 items', () => {
      expect(Object.keys(SQUARES)).to.have.length(64);
    });
  });

  describe('PIECES', () => {
    it('should have 12 items', () => {
      expect(Object.keys(PIECES)).to.have.length(12);
    });
  });
});
