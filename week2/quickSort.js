const pivot = (arr, start = 0, end = arr.length - 1) => {
    function swap(arr, index1, index2) {
        let temp = arr[index1];
        arr[index1]  = arr[index2];
        arr[index2] = temp;
    }

    let pivotIdx = start;
    let pivot = arr[start];
    for(let i = start + 1; arr.length > i; i++) {
        if (pivot > arr[i]) {
            pivotIdx++;
            swap(arr, pivotIdx, i);
        }
    }

    swap(arr, pivotIdx, start)

    return pivotIdx;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (right > left) {
        const pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr,pivotIndex + 1, right);
    }

    return arr;
};

// console.log(pivot([4, 8, 15, 1, 2, 9, 5, 77]))
console.log(quickSort([4, 8, 15, 1, 2, 9, 5, 77, 7]))