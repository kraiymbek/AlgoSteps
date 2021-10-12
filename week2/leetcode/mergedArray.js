/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m - 1, j = n - 1, idx3 = m + n - 1;
    while (j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[idx3] = nums1[i];
            idx3--;
            i--
        } else {
            nums1[idx3] = nums2[j];
            idx3--;
            j--
        }
    }
};

console.log(merge([1,2,3], 3, [2,5,6], 3))
// console.log(merge([1,2,3], 3, [2,5,6], 3))