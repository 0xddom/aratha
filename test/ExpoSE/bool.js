/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

var x = J$.readInput();

if (x.includes(true)) {

    if (x[4]) {
        throw 'Reachable';
    }

} else {
    if (x[4]) {
        throw 'Unreachable';
    }

    if (!x[4]) {
        throw 'Reachable';
    }
}
