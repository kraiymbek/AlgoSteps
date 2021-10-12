class Node {
    constructor(val) {
        this.val = val;
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
        const newValue = new Node(val);
        if (!this.head) {
            this.head  = newValue;
            this.tail = this.head ;
        } else {
            this.tail.next = newValue;
            this.tail = newValue;
        }

        this.length++;
        return this;
    }

   pop() {
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        return current;
   }

   shift() {
        if(!this.head) return undefined;
        let currentHead = this.head
        this.head = currentHead.next;
        if (this.length === 1) {
            this.tail = null;
        }
        this.length--;
        return currentHead;
   }

   unshift(value) {
        const newValue = new Node(value);
        if(!this.head) {
            this.head = newValue;
            this.tail = newValue;
        } else {
            newValue.next = this.head;
            this.head = newValue;
        }

        this.length++;
        return this;
   }

   get(index) {
        if (index < 0 || this.length <= index) return null;
        let current = this.head;
        let i = 0;
        while (i !== index) {
            current = current.next;
            i++;
        }

        return current;
   }

   set(index, newValue) {
       const foundNode = this.get(index);

       if (foundNode) {
           foundNode.val = newValue;
           return true;
       }

       return false;
   }

   insert(index, newValue) {
        if (this.length < 0 || this.length < index) return false;
        if (this.length === index) !!this.push(newValue)
        if (index === 0)  !!this.unshift(newValue);


       const foundNode = this.get(index - 1);
       const newNode = new Node(newValue);
       newNode.next = foundNode.next;
       foundNode.next = newNode;
        this.length++;
        return true;
   }

   remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();
        const targetBeforeToRemoveNode = this.get(index - 1);
        const removed = targetBeforeToRemoveNode.next;
        targetBeforeToRemoveNode.next = removed.next;
        this.length--;
        return removed;
   }

    reverse() {
        let node = this.head
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next;
        for(let i = 0; this.length > i++; i++) {
            next = node.next;
            node.next = prev
            prev = node;
            node = next;
        }

        return this;
    }

   print() {
        let current = this.head;
        const array = [];
        while (current) {
            array.push(current.val);
            current = current.next;
        }

        return array;
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
