/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    for (let i=0;i<matrix.length;i++) {
        for (let j=i;j<matrix[0].length;j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    for (let i=0;i<matrix.length;i++) {
        for (let j=0;j<matrix[0].length;j++) {
            console.log("i", i, "j", j, "matrix[0].length - 1 - j", matrix[0].length - 1 - j)
            // let temp = matrix[i][j];
            // matrix[i][j] = matrix[i][matrix[0].length - 1 - j];
            // matrix[i][matrix[0].length - 1 - j] = temp;
        }
    }

    // for (let i=0;i<matrix.length;i++) {
    //     for (let j=0;j<matrix[0].length/2;j++) {
    //         // console.log(matrix[i][j])
    //         // console.log(matrix[i][matrix[0].length-j-1])
    //         let temp = matrix[i][j];
    //         console.log("i", i, "j", j)
    //         console.log("temp", temp, "secondvalue", matrix[i][matrix[0].length-j-1])
    //         // matrix[i][j] = matrix[i][matrix[0].length-j-1];
    //         // matrix[i][matrix[0].length-j-1] = temp;
    //     }
    // }

    return matrix;
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))