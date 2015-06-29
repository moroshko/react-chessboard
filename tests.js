import jsdom from 'jsdom';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.parentWindow;
global.navigator = global.window.navigator;

require('./src/utils/constants/constants.test');
require('./src/utils/fen/fen.test');
require('./src/components/Chessboard/Chessboard.test');
require('./src/components/Square/Square.test');
require('./src/components/Piece/Piece.test');
