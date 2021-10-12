let merge = (arr1, arr2) => {
    let i = 0;
    let j = 0;
    let result = [];
    while (arr1.length > i && arr2.length > j) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while (arr1.length > i) {
        result.push(arr1[i]);
        i++;
    }

    while (arr2.length > j) {
        result.push(arr2[j]);
        j++;
    }

    return result;
};

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor((arr.length)/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

// console.log(merge([1, 10, 50], [2, 14, 99, 100]))
console.log(mergeSort(Array.from({length: 40}, () => Math.floor(Math.random() * 40))))
