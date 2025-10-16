'use strict';

const range = (start, end) => {
    if (start > end) return [];
    const res = [];
    for (let i = start; i <= end; i++) {
        res[i-start] = i;
    }
    return res;
};

const rangeOdd = (start, end) => {
    if (start > end) return [];
    const res = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) res.push(i);
    }
    return res;
};

console.log(range(-3, 16));
console.log(rangeOdd(-3, 16));