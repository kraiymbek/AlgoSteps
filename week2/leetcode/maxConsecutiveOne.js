/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxSum = 0;
    let counter = 0;
    for(let i of nums) {
        maxSum = Math.max(counter +=i, maxSum);
        if (!i) counter = 0;
    }

    return maxSum;
};

//       i
// 1 1 0 1 1 1 0 1
//     a

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1, 0, 1, 1,1,1]))