
class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST {
    constructor() {
        this.root = null
    }
    insert(value) {
        let newNode = new Node(value)
        let node = this.root;
        if (!node) {
            this.root = newNode
            return this
        }
        while (true) {
            if (value < node.value) {
                if (!node.left) {
                    node.left = newNode
                    return this
                }
                node = node.left
            } else {
                if (!node.right) {
                    node.right = newNode
                    return this
                }
                node = node.right
            }
        }
    }
    insertRecursion(value, node = this.root) {
        if (!node) {
            this.root = new Node(value)
            return
        }
        if (value < node.value) {
            if (!node.left) {
                node.left = new Node(value)
                return
            }
            return this.insertRecursion(value, node.left)
        } else {
            if (!node.right) {
                node.right = new Node(value)
                return
            }
            return this.insertRecursion(value, node.right)
        }
    }
    inOrder(node = this.root) {
        if (node) {
            this.inOrder(node.left)
            process.stdout.write(`${node.value}  `)
            this.inOrder(node.right)
        }
    }
    preOrder(node = this.root) {
        if (node) {
            process.stdout.write(`${node.value}  `)
            this.preOrder(node.left)
            this.preOrder(node.right)
        }
    }
    postOrder(node = this.root) {
        if (node) {
            this.preOrder(node.left)
            this.preOrder(node.right)
            process.stdout.write(`${node.value}  `)
        }
    }
    breadthFirst() {
        let queue = [this.root]
        while (queue.length > 0) {
            let node = queue.shift()
            process.stdout.write(`${node.value}  `)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    }
    deleteValue(value, node = this.root) {
        if (!node) return null
        if (value < node.value) {
            node.left = this.deleteValue(value, node.left)
        } else if (value > node.value) {
            node.right = this.deleteValue(value, node.right)
        } else {
            if (!node.left) return node.right
            if (!node.right) return node.left

            node.value = this.getMinValue(node.left)
            node.right =this.deleteValue(value,node.right)

        }
        return node
    }
    getMinValue(node) {
        while (node) node.left
        return node.value
    }
}

const bst = new BST();
// let arr = [50,25,75,12,35,60,90,5,20,30,40,55,65,80,100]
let arr = [50, 64, 31, 13, 44, 55, 25, 15]
for (let i of arr) bst.insert(i)

bst.inOrder()
console.log('....');
bst.deleteValue(25)
bst.inOrder()
console.log();