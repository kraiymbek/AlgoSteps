/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let result = [];
    let i = right;

     while(right >= left) {
         if (Math.pow(nums[right], 2) > Math.pow(nums[left], 2)) {
             result[i] = Math.pow(nums[right], 2);
             i--;
             right--;
         } else {
             result[i] = Math.pow(nums[left], 2);
             left++;
             i--
         }
    }

    return  result;
};

console.log(sortedSquares([-10000,-9999,-7,-5,0,0,10000]))