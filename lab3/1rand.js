'use strict';

const random = (min, max) => {
    if (!max) {
        max = min;
        min = 0;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(random(87) + "\n");
console.log(random(-6, 10));