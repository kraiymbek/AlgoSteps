// var duplicateZeros = function(arr) {
//     for(let i = 0; arr.length > i; i++) {
//         if (arr[i] === 0) {
//             arr.splice(i, 0, 0);
//             arr.pop();
//             i++;
//         }
//     }
//
//     console.log(arr)
//
//     return null;
// };

var duplicateZeros = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            for (let j = arr.length - 1; j > i; j--) {
                console.log("i", i)
                console.log("j", j)
                arr[j] = arr[j - 1];
            }
            i++;
        }
    }

    console.log(arr)
};

// console.log(duplicateZeros([1, 0, 2,3,0,4,5,0]))
// console.log(duplicateZeros([1,2,3]))
console.log(duplicateZeros([8,4,5,0,0,0,0,7]))