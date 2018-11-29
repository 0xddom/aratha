/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */


function Hello() {
	console.log('Called Hello with ' + JSON.stringify(arguments));
	if (arguments[4] == 'a') {
		throw 'Reachable';
	}
}

Hello.apply(null, J$.readInput());