class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        let node = this.root;
        if (!node) {
            this.root = newNode;
            return this;
        }
        while (true) {
            if (value < node.value) {
                if (!node.left) {
                    node.left = newNode;
                    return this;
                }
                node = node.left;
            } else {
                if (!node.right) {
                    node.right = newNode;
                    return this;
                }
                node = node.right;
            }
        }
    }
    insertRecursion(value, node = this.root) {
        if (!node) {
            this.root = new Node(value);
            return this;
        }
        if (value < node.value) {
            if (!node.left) {
                node.left = new Node(value);
                return this;
            } else {
                return this.insertRecursion(value, node.left);
            }
        } else if (value > node.value) {
            if (!node.right) {
                node.right = new Node(value);
                return this;
            } else {
                return this.insertRecursion(value, node.right);
            }
        }
    }
    inOrder(node = this.root) {
        if (node) {
            this.inOrder(node.left);
            process.stdout.write(`${node.value}  `)
            this.inOrder(node.right);
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
            this.postOrder(node.left)
            this.postOrder(node.right)
            process.stdout.write(`${node.value}  `)
        }
    }
    traverseBreadthFirst() {
        const queue = [this.root];
        while (queue.length > 0) {
            const node = queue.shift();
            process.stdout.write(`${node.value}  `);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    contains(value) {
        if (!this.root) return false;
        let current = this.root;
        while (current) {
            if (value === current.value) return true;
            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }
    containRec(value, node = this.root) {
        if (!node) return false
        if (node.value === value) return true
        if (value < node.value) {
            return this.containRec(value, node.left)
        } else {
            return this.containRec(value, node.right)
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

            node.value = this.getMinValue(node.right)
            node.right = this.deleteValue(node.value, node.right)
        }
        return node;
    }
    getMinValue(node) {
        while (node.left) node = node.left
        return node.value
    }






}




const bst = new BinarySearchTree();
// let arr = [50,25,75,12,35,60,90,5,20,30,40,55,65,80,100]
let arr = [50, 64, 31, 13, 44, 55, 25, 15]
for (let i of arr) bst.insert(i)

bst.inOrder();
console.log();
// bst.preOrder();
// console.log();
// bst.postOrder();
// console.log();
bst.deleteValue(44)

bst.inOrder();
// console.log(bst.contains(44));
// bst.traverseBreadthFirst()
















// ////
// deleteIterative1(value) {  //_-----
//     if (!this.root) return null;
//     let current = this.root;
//     let parent = null;
//     while (current) {
//         if (value === current.value) break;
//         parent = current;
//         if (value < current.value) {
//             current = current.left;
//         } else {
//             current = current.right;
//         }
//     }
//     console.log(parent, current, ".....");
//     //...........find parent to be deleted.................
//     if (!current) return null;

//     if (!current.left && !current.right) {         // if right & left node--small value from right to root
//         if (!parent) {
//             this.root = null;
//         } else if (current === parent.left) {
//             parent.left = null;
//         } else {
//             parent.right = null;
//         }
//     } else if (!current.left) {
//         if (!parent) {
//             this.root = current.right;
//         } else if (current === parent.left) {
//             parent.left = current.right;
//         } else {
//             parent.right = current.right;
//         }
//     } else if (!current.right) {
//         if (!parent) {
//             this.root = current.left;
//         } else if (current === parent.left) {
//             parent.left = current.left;
//         } else {
//             parent.right = current.left;
//         }
//     } else {
//         let minNode = current.right;
//         while (minNode.left) {
//             minNode = minNode.left;
//         }
//         current.value = minNode.value;
//         this.delete(minNode.value);
//     }
//     return current;
// }


// ///
// delete(value) {
//     this.root = this._delete(this.root, value);
// }
// _delete(node, value) {
//     if (!node) return null;

//     if (value < node.value) {
//         node.left = this._delete(node.left, value);
//     } else if (value > node.value) {
//         node.right = this._delete(node.right, value);
//     } else {
//         if (!node.left) return node.right;
//         if (!node.right) return node.left;

//         let minNode = node.right;
//         while (minNode.left) minNode = minNode.left;
//         node.value = minNode.value;
//         node.right = this._delete(node.right, minNode.value);
//     }
//     return node;
// }





