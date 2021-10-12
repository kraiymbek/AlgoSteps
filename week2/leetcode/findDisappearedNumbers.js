/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let result = [];
    for(let i = 0; nums.length > i; i++) {
        let j = Math.abs(nums[i]) - 1;
        nums[j] = Math.abs(nums[j]) * -1;
    }

    for(let i = 0; nums.length > i; i++) {
        if (nums[i] > 0) {
            result.push(i+1)
        }
    }

    return  result;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));