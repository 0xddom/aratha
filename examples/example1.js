/* global J$ */

function foo() {
    console.log("foo");
}

function bar() {
    console.log("bar");
}

function program(b) {
    for (var i = 0; i < 10 && (b > 0 && (b / 3 === 2 / 3 || b + 9 === 0)); ++i) {
        if (i % 2 === 0) {
            foo();
        } else {
            bar();
        }
    }
    console.log("done");
}

program(J$.readInput());
