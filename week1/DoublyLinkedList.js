class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.length = 0;
        this.tail = null;
        this.head = null;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.prev = prev;
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let removed = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = removed.prev;
            this.tail.next = null;
            removed.prev = null;
        }


        this.length--;
        return removed;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let prev = this.head;
            this.head = newNode;
            newNode.next = prev;
        }

        this.length ++;
        return this;
    }

    shift() {
        if(!this.head) return undefined;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }

        let removed = this.head;
        this.head = removed.next;
        this.head.prev = null;
        removed.next = null;

        this.length--;
        return removed;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let current = this.head;

        let i = 0;
        while(index !== i) {
            i++;
            current = current.next;
        }

        return current;
    }

    print() {
        let current = this.head;
        let result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }

        return result;
    }

    set(index, value) {
        let found = this.get(index);
        if (!found) return false;
        found.value = value;
        return true;
    }

    insert(index, value) {
        if (index === 0) return !!this.unshift(value);
        if (this.length === index) return !!this.push(value);

        let newNode = new Node(value);
        let prevNode = this.get(index - 1);

        if (prevNode) {
            let nextNode = prevNode.next;
            newNode.prev = prevNode;
            newNode.next = nextNode;
            nextNode.prev = newNode;
            prevNode.next = newNode;
            return true;
        }

        return  false;
    }

    remove(index) {
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        let removed = this.get(index);
        if (!removed) return undefined;

        let prev = removed.prev;
        let next = removed.next;
        prev.next = next;
        next.prev = prev;

        removed.next = null;
        removed.prev = null;

        this.length --;
        return removed;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next;

        for(let i = 0; this.length > i; i++) {
            next = node.next;
            node.next = prev;
            node.prev = next;
            prev = node;
            node = next;
        }

        return this;
    }

}