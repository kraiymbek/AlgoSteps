class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor() {
        this.size = 0;
        this.first = null;
        this.last = null;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.size++;
        return this;
    }

    dequeue() {
        if (!this.size) return undefined;
        const removed = this.first;

        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = removed.next;
            removed.next = null;
        }

        this.size--;
        return  removed;
    }
}

const queue = new Queue();
queue.enqueue('hi')
queue.enqueue('how')
queue.enqueue('are')
queue.enqueue('you')
queue.dequeue()
queue.dequeue()
console.log(queue)

class BFS {
    constructor() {
        this.visited = [];
    }

    traverse() {

    }
}