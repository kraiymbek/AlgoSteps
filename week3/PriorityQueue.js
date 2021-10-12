class Node {
    constructor(val, priority) {
        this.value = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    swap(arr, idx1, idx2) {
        let temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }

    enqueue(value, priority) {
        const newNode = new Node(value, priority);
        this.values.push(newNode);
        let idx = this.values.length - 1;

        while (idx > 0) {
            let parentIndex = Math.floor((idx - 1)/2);

            if (this.values[idx].priority < this.values[parentIndex].priority) {
                this.swap(this.values, idx, parentIndex);
                idx = parentIndex;
            } else {
                break;
            }
        }

        return this;
    }

    dequeue() {
        if (this.values.length < 1) return undefined;
        let extracted = this.values.shift();
        this.values.unshift(this.values.pop());
        let index = 0;
        let length = this.values.length;
        let leftChild, rightChild;

        while (true) {
            let swapIndex = null;
            let element = this.values[index];
            let leftChildIndex = 2*index + 1;
            let rightChildIndex = 2*index + 2;

            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex].priority;
                if (leftChild < element.priority) {
                    swapIndex = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex].priority;

                if ((!swapIndex && rightChild < element.priority) || (swapIndex && rightChild < leftChild)) {
                    swapIndex = rightChildIndex;
                }
            }

            if (!swapIndex) break;

            this.values[index] = this.values[swapIndex];
            this.values[swapIndex] = element;
            index = swapIndex;
        }

        return extracted;
    }

    print() {
        let result = [];
        this.values.forEach(item => {
            result.push(item.priority);
        })

        return result;
    }
}

// const priorityQueue = new PriorityQueue();
// priorityQueue.enqueue("common cold", 5)
// priorityQueue.enqueue("gunshot wound", 1)
// priorityQueue.enqueue("high fever", 4)
// priorityQueue.enqueue("broken arm", 2)
// priorityQueue.enqueue("glass in foot", 3)
// // priorityQueue.enqueue("somedat1", 1)
// // priorityQueue.dequeue()
// console.log(priorityQueue.dequeue())
// console.log(priorityQueue.dequeue())
// console.log(priorityQueue.dequeue())
// console.log(priorityQueue.dequeue())
// console.log(priorityQueue.dequeue())
// console.log(priorityQueue.dequeue())
// console.log(priorityQueue.values)