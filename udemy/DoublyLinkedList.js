class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if(!this.head) return undefined;

        const removed = this.tail;
        if (this.length === 1) {
            this.tail = null;
            this.head = null;
        } else {
            const removed = this.tail;
            this.tail = removed.prev;
            this.tail.next = null;
            removed.prev = null;
        }

        this.length--;
        return removed;
    }

    shift() {
        if(!this.head) return undefined;
        const removed = this.head;

        if (this.length === 1) {
            this.tail = null;
            this.head = null;
        } else {
            this.head = removed.next;
            this.head.prev = null;
            removed.next = null;
        }

        this.length--;
        return  removed;
    }

    unshift(newValue) {
        const newNode = new Node(newValue);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    get(index) {
        if (!this.length || index >= this.length) return undefined;
        if (index === 0) return this.head;
        let isLeft = index < this.length/2;

        let current = isLeft ? this.head : this.tail;
        let count = isLeft ? 0 : this.length - 1;
        while (count !== index) {
            current = isLeft ? current.next : current.prev;
            isLeft ? count++ : count--;
        }

        return current;
    }

    set(index, value) {
        const foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = value;
            return true;
        }

        return false;
    }

    insert(index, value) {
        if (index === this.length) !!this.push(value);
        if (index === 0) !!this.unshift(value);

        const newNode = new Node(value);
        const beforeNode = this.get(index - 1);
        const afterNode = beforeNode.next;
        if (beforeNode) {
            newNode.next = afterNode;
            newNode.prev = beforeNode;
            afterNode.prev = newNode;
            beforeNode.next = newNode
            return true;
        }

        return false;
    }

    remove(index) {
        if (!this.length || this.length <= index) return undefined;
        if (this.length === 1) return this.shift();
        if (index === this.length - 1) return this.pop();

        const foundNode = this.get(index);
        const prevNode = foundNode.prev;
        const nextNode = foundNode.next;

        nextNode.prev = prevNode;
        prevNode.next = nextNode;
        foundNode.prev = null;
        foundNode.next = null;

        this.length--;
        return foundNode;
    }

}

const doubleList = new DoublyLinkedList();
doubleList.push('resort')
doubleList.push('data')
doubleList.push('hi')
doubleList.remove(1)
console.log("list", doubleList)
