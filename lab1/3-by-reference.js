'use strict';

const inc = (obj) => {
    if (obj !== null && typeof obj === 'object' && 'n' in obj) {
        obj.n += 1;
    }
};

const obj = {n:-3}
inc(obj)
console.dir(obj)