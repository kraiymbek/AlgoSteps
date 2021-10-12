class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            if (value === current.value) return undefined;

            while (true) {
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left
                    }
                } else if (value > current.value) {
                    if (!current.right) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    find(value) {
       if (!this.root) return false;
       let current  = this.root;
       let found = false;
       while (current && !found) {
           if (value > current.value) {
               current = current.right;
           } else if (value < current.value) {
               current = current.left;
           } else {
               found = true;
           }
       }

       if (!found) return undefined;
       return current;
    }

    BFS() {
        const data = [];
        const queue = [];
        let node = this.root;
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return data;
    }

    preOrder(node) {

    }

    DFSPreOrder() {
        const data = [];
        const traverse = (node) => {
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        };

        traverse(this.root);
        return data;
    }

    DFSPostOrder() {
        const data = [];
        const traverse = (node) => {
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
            data.push(node.value)
        }

        traverse(this.root);
        return data;
    }

    DFSInOrder() {
        const data = [];
        const traverse = (node) => {
            if (node.left) traverse(node.left);
            data.push(node.value)
            if (node.right) traverse(node.right);
        };

        traverse(this.root);
        return data;
    }
}

const bts = new BST();
bts.insert(10)
bts.insert(6)
bts.insert(15)
bts.insert(3)
bts.insert(8)
bts.insert(20)

console.log(bts.DFSPreOrder());
console.log(bts.DFSPostOrder());
console.log(bts.DFSInOrder());