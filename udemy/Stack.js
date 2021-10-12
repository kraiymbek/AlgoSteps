class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.size = 0;
        this.first = null;
        this.last = null;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }

        this.size++;
        return this;
    }

    pop() {
        if (!this.first) return undefined;
        if (this.size === 1 ) {
            this.last = null;
        }
        const removed = this.first;
        this.first = removed.next;
        removed.next = null;

        this.size--;
        return removed.value ;
    }
}

const stack = new Stack();

stack.push("hi")
stack.pop()

console.log(stack)