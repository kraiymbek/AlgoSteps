class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
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
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }

        newTail.next = null;
        this.tail = newTail;

        this.length--;
        return current;
    }

    unshift(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.tail = newNode;
            this.head = newNode;
        } else {
            const current = this.head;
            this.head = newNode;
            this.head.next = current;
        }

        this.length++;
        return this;
    }

    shift() {
        if (!this.head) return undefined;
        let removed = this.head;
        if (this.length === 1) {
            this.tail = null;
        }
        this.head = removed.next;
        removed.next = null;
        this.length--;
        return removed;
    }

    get(index) {
        if (index >= this.length || index < 0) return undefined;
        let found = undefined;
        let current = this.head;
        let idx = 0;
        while (idx <= index) {
            if (index === idx) {
                found = current;
                break;
            }
            idx++;
            current = current.next;
        }

        return found;
    }

    set(index, newValue) {
        const found = this.get(index);
        if (!found) return false;

        found.value = newValue;

        return true;
    }

    insert(index, newValue) {
        if (!index) return !!this.unshift(newValue);
        if (this.length === index) return !!this.push(newValue);
        const found = this.get(index - 1);
        if (!found) return false;
        const newNode = new Node(newValue);
        const prevNext = found.next;
        found.next = newNode;
        newNode.next = prevNext;

        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || this.length <= index) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        let preRemoved = this.get(index - 1);
        const removed = preRemoved.next;
        preRemoved.next = removed.next;
        this.length--;
        return removed;
    }

    print() {
        let current = this.head;
        let res = [];
        while(current) {
            res.push(current.value);
            current = current.next;
        }

        return res;
    }

    reverse() {
        let node = this.head
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next;
        for(let i = 0; this.length > i; i++) {
           next = node.next;
           node.next = prev;
           prev = node;
           node = next;
        }

        return this;
    }
}

const list = new SinglyLinkedList();
list.push("45");
list.push("25");
list.push("10");
list.push("1");
list.push("9");
console.log("before", list.print());
list.reverse()
console.log("after", list.print());



