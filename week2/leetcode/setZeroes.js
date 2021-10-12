/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let [left, right, top, bottom] = [0, matrix[0].length, 0, matrix.length];
    for(let i = 0; matrix.length > i; i++) {
        for (let j = 0; matrix.length > j; j++) {
            if (matrix[i][j] === 0) {
                top = 1;
            }
        }
    }
};

console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]));