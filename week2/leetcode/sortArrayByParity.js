/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let anchor = 0;

    function swap(idx1, idx2) {
        let temp = nums[idx1];
        nums[idx1] = nums[idx2];
        nums[idx2] = temp;
    }

    for(let i = 0; nums.length > i; i++) {
        if (nums[i] % 2 === 0) {
            swap(i, anchor);
            anchor++;
        }
    }

    return  nums
};

console.log(sortArrayByParity([3,1,2,4]));

