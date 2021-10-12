// const merge = (arr1, arr2) => {
//     let result = [];
//     let i = 0;
//     let j = 0;
//     while (arr1.length > i && arr2.length > j) {
//         if (arr1[i] < arr2[j]) {
//             result.push(arr1[i]);
//             i++;
//         } else {
//             result.push(arr2[j]);
//             j++;
//         }
//     }
//
//     while (arr1.length > i) {
//         result.push(arr1[i]);
//         i++;
//     }
//
//     while (arr2.length > j) {
//         result.push(arr2[j]);
//         j++;
//     }
//
//     return result;
// }
//
// const mergeSort = (arr) => {
//     if (arr.length <= 1) return arr;
//     let middle = Math.floor((arr.length) / 2);
//     let left = mergeSort(arr.slice(0, middle));
//     let right = mergeSort(arr.slice(middle));
//     return merge(left, right);
// };
//
//
// const pivat = (arr, left = 0, right = arr.length - 1) => {
//     function swap(idx1, idx2) {
//         let temp = arr[idx1];
//         arr[idx1] = arr[idx2];
//         arr[idx2] = temp;
//     }
//
//     while (left < right) {
//
//     }
//
//     let idx =
// };
//
// 22 77 5 1 9 10
//
//
//
// //
// // const quickSort = (arr) => {
// //
// // };
// //
// //
// console.log(mergeSort([2,77,5,1,9,10]));
// // console.log(quickSort([2,77,5,1,9,10]));


const binarySearch = (arr, n) => {
    let start = 0;
    let end = arr.length - 1;

    let mid = Math.floor((start + end)/2);

    while (arr[mid] !== n && start <= end) {
        if (arr[mid] > n) end = mid - 1;
        else start = mid + 1;

        mid = Math.floor((start + end)/2);
    }

        if(arr[mid] === n) {
            return  mid;
        }

        return -1;
    }

             //                       l  m        r
console.log(binarySearch([1, 12, 23, 46, 55, 77, 102, 144], 144));