/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const dictionary = {};
    let res = [];

    nums.forEach((item, index) => {
        if (dictionary[item]) {
            dictionary[item] += 1;
        } else {
            dictionary[item] = 1;
        }
    })

    Object.keys(dictionary).forEach(item => {
        if (dictionary[item] > 1) {
            res.push(+item);
        }
    })

    return res;
};

console.log(findDuplicate(  [1,1,2]))