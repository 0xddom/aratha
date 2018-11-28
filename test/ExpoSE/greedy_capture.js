/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

var x = J$.readInput();
var b = /^(.+)(.?)$/.exec(x);

if (b) {
	
	if (b[2] != '') {
		throw 'Unreachable';
	}

	if (b[1] == 'Hello world yanky doodle') {
		throw 'Reachable';
	}

	throw 'Reachable';
}
