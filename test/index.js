'use strict';

import jsdom from 'jsdom';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.parentWindow;
global.navigator = global.window.navigator;

require('../src/Chessboard/Chessboard.test');
require('../src/Square/Square.test');
