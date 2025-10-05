'use strict';

const values = [null, undefined, 0, '', false, {}, [], () => {}];

const countTypes = (arr) => {
    const counts = {};
    for (const el of arr){
        const type = typeof el;
        const count = counts[type] || 0;
        counts[type] = count + 1;
    }
    return counts;
};

console.log(countTypes(values));