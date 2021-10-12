class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.size = 0;
        this.first = 0;
        this.last = 0;
    }

    push(val) {
        const newNode = new Node(val);

        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            console.log("1", this.last)
            this.last.next  = newNode;
            console.log("2", this.last)
            this.last = newNode;
            console.log("3", this.last)
        }

        return ++this.size;
    }
}

const queue = new Queue();
queue.push('new');
queue.push('data');