'use strict';

const average = (a, b) => (a + b) / 2;
const square = (x) => x * x;
const cube = (x) => x * x * x;

const calculate = () => {
    const res = [];
    for (let i=0; i<10; i++) {
        const sq = square(i);
        const cb = cube(i);
        const av = average(sq, cb);
        res.push(av);
    }
    return res;
}

console.log(calculate());