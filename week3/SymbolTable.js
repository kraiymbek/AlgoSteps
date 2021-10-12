class Node {
    constructor(key, value) {
        this.value = value;
        this.key = key;
        this.next = null;
    }
}

class SymbolTableBasedOnLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;

    }

    size() {
        return this.length;
    }

    isEmpty() {
        return !this.length;
    }

    put(key, value) {
        let newNode = new Node(key, value);
        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length ++;
        return this;
    }

    get(key) {
        let current = this.head;
        let value = undefined;
        while (current.next) {
            current = current.next;

            if (current.key === key) {
                value = current.value;
                break;
            }
        }

        return value;
    }
}

const linkedListSymbolTable = new SymbolTableBasedOnLinkedList();
linkedListSymbolTable.put('data', 1)
linkedListSymbolTable.put('hor', 3)
linkedListSymbolTable.put('lock', 2)
console.log(linkedListSymbolTable.get('nope'))
// console.log(linkedListSymbolTable)