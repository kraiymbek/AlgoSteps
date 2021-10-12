var moveZeroes = function(nums) {
    function swap(idx1,idx2) {
        let temp = nums[idx1];
        nums[idx1] = nums[idx2];
        nums[idx2] = temp;
    }
    //
    // let left = 0
    // let right = left + 1;
    // while (right > left && nums.length > right) {
    //     if (nums[left] === 0 && nums[right] !==0 ) {
    //         swap(left, right)
    //         left++;
    //         right++;
    //     } else if(nums[left] === 0 && nums[right] === 0) {
    //         right++;
    //     } else if (nums[left] !== 0 && (nums[right] === 0 ||  nums[right] !== 0)) {
    //         left++;
    //         right++;
    //     } else {
    //         break;
    //     }
    // }

    let anchor = 0;
    for(let i = 0; nums.length > i; i++) {
        if (nums[i] !== 0) {
            swap(i, anchor);
            anchor++;
        }
    }
    return nums;
};

//
//                  i
// [4,2,4,3,5,1,0,0,0,0]
//            a

// console.log(moveZeroes([0,1]))
// console.log(moveZeroes([2,1]))
console.log(moveZeroes([4,2,4,0,0,3,0,5,1,0]))