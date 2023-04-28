
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
}

const bst = new BST();
// let arr = [50,25,75,12,35,60,90,5,20,30,40,55,65,80,100]
let arr = [50, 64, 31, 13, 44, 55, 25, 15]
for (let i of arr) bst.insert(i)