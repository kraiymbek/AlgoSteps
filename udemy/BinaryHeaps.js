class MaxBinaryHeap {
    constructor() {
        this.values =  [41, 39, 33, 18, 27, 12];
    }

    insert(newValue) {
        this.values.push(newValue);
        let newValueIndex = this.values.length - 1;
        let element = this.values[newValueIndex];
        while(newValueIndex > 0) {
            const parentElementIndex = Math.floor((newValueIndex-1)/2);
            const parentElement = this.values[parentElementIndex];
            if (parentElement >= element) break;
            this.values[parentElementIndex] = this.values[newValueIndex];
            this.values[newValueIndex] = parentElement;
            newValueIndex = parentElementIndex;
        }
    }

    sinkDown() {
        let index = 0;
        let length = this.values.length;
        const element = this.values[index];
        let swap;
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            if (leftChildIndex < length) {
                let leftChild = this.values[leftChildIndex];
                if (leftChild > element) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                let rightChild = this.values[rightChildIndex];
                if ((!swap) || (swap && this.values[swap] < rightChild)) {
                    swap = rightChildIndex;
                }
            }

            if(!swap) break;
            this.values[swap] = element;
        }
    }

    extractMax() {
        const max = this.values[0];
        this.values[0] = this.values.pop();
        sinkDown();
        return max;
    }
}

const maxBinaryHeap = new MaxBinaryHeap();
maxBinaryHeap.insert(55);
// maxBinaryHeap.extractMax();
console.log(maxBinaryHeap.values)