class Sort {
    binarySearch(array, value) {
        let leftIndex = 0;
        let rightIndex = array.length - 1;
        let middleIndex = Math.floor((leftIndex + rightIndex )/2);
        while (array[middleIndex] !== value && leftIndex <= rightIndex) {
            if (array[middleIndex] < value) leftIndex = middleIndex + 1;
            else rightIndex = middleIndex - 1;
            middleIndex = Math.floor((leftIndex + rightIndex )/2);
        }

        if (array[middleIndex] === value) {
            return middleIndex;
        }

        return -1;
    }

    naiveStringSort(str, value) {
        let count = 0;
        for(let i = 0; str.length > i; i++) {
            for(let j = 0; value.length > j; j++) {
                console.log(`i: ${i}, j: ${j} value[j]: ${value[j]}, str[i+j]: ${str[i + j]}` )
                if (value[j] !== str[i + j]){
                    break;
                }
                // console.log(i)
                if (j === value.length - 1) {
                    count++;
                }
            }
        }

        return count;
    }

    _swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    bubbleSort(arr) {
        let isSwap = false;


        for (let i = arr.length; i > 0; i --) {
            for (let j = 0; j < i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    this._swap(arr, j, j + 1);
                    isSwap = true;
                }

            }

            if (!isSwap) break;
        }

        return arr;
    }

    insertionSort(arr) {
        for(let i = 0; arr.length > i; i++) {
            let lowest = i;
            for( let j = i + 1; arr.length > j; j++) {
                if (arr[lowest] > arr[j]) {
                    lowest = j;
                }
            }

            if(i !== lowest) this._swap(arr, lowest, i);
        }

        return arr;
    }
}

const sort = new Sort();
// console.log(sort.binarySearch([1, 2, 5, 9, 20, 45, 102, 650], 1))
// console.log(sort.naiveStringSort('haha dalmatinec omggmo', 'omg'))
// console.log(sort.bubbleSort([5, 3, 4, 1, 2]));
console.log(sort.insertionSort([5, 3, 4, 1, 2]));

