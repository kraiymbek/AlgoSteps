class BinaryHeap {
    constructor() {
        this.values = [];
    }

    _swap(arr, idx1, idx2) {
        let temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }

    insert(newValue) {
        this.values.push(newValue);
        let newValueIndex = this.values.length - 1;

        while (true) {
            let parentIndex = Math.floor((newValueIndex - 1)/2);

            if (this.values[newValueIndex] > this.values[parentIndex]) {
                this._swap(this.values, newValueIndex, parentIndex);
                newValueIndex = parentIndex;
            } else {
                break;
            }
        }

        return this;
    }

    extractMax(arr) {
        if (this.values.length < 1) return undefined;
        const extracted = this.values.shift();
        this.values.unshift(this.values.pop());

        let index = 0;
        let element = this.values[index];
        let length = this.values.length;

        while (true) {
            let leftChildIdx = 2*index + 1;
            let rightChildIdx = 2*index + 2;
            let swapIndex = null;

            if (leftChildIdx < length) {
                if (this.values[leftChildIdx] > element) swapIndex = leftChildIdx;
            }

            if (rightChildIdx < length) {
                if ( (!swapIndex && this.values[rightChildIdx] > element)
                    || (swapIndex && this.values[rightChildIdx] > this.values[leftChildIdx])) {
                    swapIndex = rightChildIdx;
                }
            }

            if (!swapIndex) break;
            this.values[index] = this.values[swapIndex];
            this.values[swapIndex] = element;
            index = swapIndex;
        }

        return extracted;
    }

    sort() {
        let result = [];
        let length = this.values.length;
        for(let i = 0; length > i; i++) {
            result.push(this.extractMax())

        }

        return result;
    }

    heapify(arr, i) {
        console.log("called", arr[i])
        let n = arr.length;
        var largest = i; // Initialize largest as root
        var l = 2 * i + 1; // left = 2*i + 1
        var r = 2 * i + 2; // right = 2*i + 2

        // If left child is larger than root
        if (l < n && arr[l] > arr[largest])
            largest = l;

        // If right child is larger than largest so far
        if (r < n && arr[r] > arr[largest])
            largest = r;

        // If largest is not root
        if (largest !== i) {
            var swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;
           this.heapify(arr, largest);
        }
    }

    heapifyAll(arr) {
        for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
            this.heapify(arr, i);
        }

        return arr;
    }
}

const heap = new BinaryHeap();
// heap.insert(4)
// heap.insert(2)
// heap.insert(10)
// heap.insert(11)
// heap.insert(1)
// console.log(heap.sort())
let arr
console.log(heap.heapifyAll([10,20,15,12,40,25,18]))
