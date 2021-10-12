const spiralMatrix = (matrix) => {
    let result = [];
    let [left, right, top, bottom] = [0, matrix[0].length-1, 0, matrix.length - 1];
    let dir = 0;

    while (left <= right && top <= bottom) {
        if (dir === 0) {
            for(let i = left; right >= i; i++) {
                result.push(matrix[top][i]);
            }
            top++;
        }
        else if(dir === 1) {
            for(let i = top; bottom >= i; i++) {
                result.push(matrix[i][right]);
            }
            right--;
        } else if (dir === 2) {
            for(let i = right; left <= i; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }
        else if (dir === 3) {
            for(let i = bottom; top <= i; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }

        dir = (dir + 1) % 4;
    }


    return result;
};

console.log(spiralMatrix([[1,2,3], [4,5,6], [7,8,9]]))
