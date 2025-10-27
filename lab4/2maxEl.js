'use strict';

const max = (matrix) => {
    let maxEl = matrix[0][0];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > maxEl) {
                maxEl = matrix[i][j];
            }
        }
    }
    return maxEl;
}

console.log(max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));