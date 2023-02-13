class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(value) {
        let newNode = new Node(value)
        let node = this.root
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
    inOrderDisplay(node = this.root) {  // left-root-right
        if (!node) return
        this.inOrderDisplay(node.left)
        process.stdout.write(`${node.value} `)
        this.inOrderDisplay(node.right)
    }
    contain(value) {
        if (!this.root) return false
        let node = this.root
        while (node) {
            if (node.value === value) return true
            if (node.value < node.value) {
                node = node.left
            } else {
                node = node.right
            }
        }
        return false
    }
    deleteValue(value, node = this.root) {
        if (!this.root) return null
        if (value < node.value) {
            node.left = this.deleteValue(value, node.left)
        } else if (value > node.value) {
            node.right = this.deleteValue(value, node.right)
        } else {
            if(!node.left) return node.right
            if(!node.right) return node.left
            node.value=this.getMinValue(node.right)
            node.right=this.deleteValue(node.value,node.right)
        }
        return node

    }
    getMinValue(node) {
        while (node.left) node = node.left
        return node.value
    }
}

let tree = new BinarySearchTree()

let arr = [50, 25, 75, 30, 90, 15, 60]
for (let i of arr) tree.insert(i)  //for of loop and insert arr to bst

tree.inOrderDisplay()
console.log();

tree.deleteValue(15)
tree.inOrderDisplay()



