// const validMountain = (arr) => {
//     if (arr.length < 3) return  false;
//     let left = 0;
//     let right = arr.length - 1;
//
//     while (arr[left] < arr[left + 1] || arr[right] < arr[right - 1]) {
//         if (arr[left] < arr[left + 1]) {
//             left++;
//         }
//
//         if (arr[right] < arr[right - 1]) {
//             right--;
//         }
//     }
//
//     if (left !== right || left === arr.length - 1 || right === 0) {
//         return false;
//     }
//
//     return true;
// };

const validMountain = (arr) => {
    if(arr.length < 3) return false

    let i = 0;
    while (i < arr.length && arr[i] < arr[i+1]) {
        i++;
    }

    if (i === 0 || i === arr.length - 1) {
        return false;
    }

    while (i < arr.length && arr[i] > arr[i+1]) {
        i++;
    }

    console.log(i)

    return i === arr.length - 1;
};

// console.log(validMountain([0,3,2,1]));
// console.log(validMountain([0,3,2,1]));
// console.log(validMountain([0,2,3,3,5,2,1,0]));
// console.log(validMountain([0,2,3,4,5,2,1,0]));
// console.log(validMountain([0,1,2,1,2]));