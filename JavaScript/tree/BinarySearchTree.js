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
    find(value) {
        if (!this.root) return null;
        let current = this.root;
        while (current) {
            if (value === current.value) return current;
            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return null;
    }
    deleteIterative1(value) {  //_-----
        if (!this.root) return null;
        let current = this.root;
        let parent = null;
        while (current) {
            if (value === current.value) break;
            parent = current;
            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        console.log(parent, current, ".....");
        //...........find parent to be deleted.................
        if (!current) return null;

        if (!current.left && !current.right) {         // if right & left node--small value from right to root 
            if (!parent) {
                this.root = null;
            } else if (current === parent.left) {
                parent.left = null;
            } else {
                parent.right = null;
            }
        } else if (!current.left) {
            if (!parent) {
                this.root = current.right;
            } else if (current === parent.left) {
                parent.left = current.right;
            } else {
                parent.right = current.right;
            }
        } else if (!current.right) {
            if (!parent) {
                this.root = current.left;
            } else if (current === parent.left) {
                parent.left = current.left;
            } else {
                parent.right = current.left;
            }
        } else {
            let minNode = current.right;
            while (minNode.left) {
                minNode = minNode.left;
            }
            current.value = minNode.value;
            this.delete(minNode.value);
        }
        return current;
    }


    ///
    delete(value) {
        this.root = this._delete(this.root, value);
    }
    _delete(node, value) {
        if (!node) return null;

        if (value < node.value) {
            node.left = this._delete(node.left, value);
        } else if (value > node.value) {
            node.right = this._delete(node.right, value);
        } else {
            if (!node.left) return node.right;
            if (!node.right) return node.left;

            let minNode = node.right;
            while (minNode.left) minNode = minNode.left;
            node.value = minNode.value;
            node.right = this._delete(node.right, minNode.value);
        }
        return node;
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
let arr = [10, 5, 15, 2, 7, 12, 20, 15, 1,]
for (let i of arr) bst.insert(i)
bst.inOrder();
console.log();
bst.deleteValue(15)

bst.inOrder();




















    // ////---iterative 1 advanced
    // delete(value) {
    //     let current = this.root;
    //     let parent = null;

    //     while (current) {
    //         if (value === current.value) break;
    //         parent = current;
    //         current = value < current.value ? current.left : current.right;
    //     }

    //     if (!current) return null;

    //     if (!current.left && !current.right) {
    //         parent ? (value < parent.value ? parent.left = null : parent.right = null) : (this.root = null);
    //     } else if (!current.left || !current.right) {
    //         parent ? (value < parent.value ? parent.left = current.left || current.right : parent.right = current.left || current.right) : (this.root = current.left || current.right);
    //     } else {
    //         let minNode = current.right;
    //         while (minNode.left) minNode = minNode.left;
    //         current.value = minNode.value;
    //         this.delete(minNode.value);
    //     }

    //     return current;
    // }
    // ////
    // delete(value) {
    //     let current = this.root;
    //     let parent = null;

    //     while (current) {
    //         if (value === current.value) break;
    //         parent = current;
    //         current = value < current.value ? current.left : current.right;
    //     }

    //     if (!current) return null;

    //     const childrenCount = (current.left ? 1 : 0) + (current.right ? 1 : 0);

    //     switch (childrenCount) {
    //         case 0:
    //             parent ? (value < parent.value ? parent.left = null : parent.right = null) : (this.root = null);
    //             break;
    //         case 1:
    //             parent ? (value < parent.value ? parent.left = current.left || current.right : parent.right = current.left || current.right) : (this.root = current.left || current.right);
    //             break;
    //         case 2:
    //             let minNode = current.right;
    //             while (minNode.left) minNode = minNode.left;
    //             current.value = minNode.value;
    //             this.delete(minNode.value);
    //             break;
    //     }

    //     return current;
    // }



// kili
    // deleteNew(value) {
    //     this.deleteHelper(value, this.root, null)
    // }
    // deleteHelper(value, current, parent) {
    //     while (current) {
    //         if (value < current.value) {
    //             parent = current
    //             current = current.left;
    //         } else if ((value > current.value)) {
    //             parent = current
    //             current = current.right;
    //         } else { //value is not < or > to current.value
    //             if (current.left && current.right) {
    //                 current.data = this.getMinValue(current.right);
    //                 this.deleteHelper(current.data, current.right, current)
    //             } else {
    //                 if (!parent) {
    //                     if (current.left) this.root = current.left
    //                     else this.root = current.right
    //                 } else {   //parent node true
    //                     if (parent.left == current) {
    //                         if (!current.right) {
    //                             parent.left = current.left
    //                         } else {
    //                             parent.left = current.right
    //                         }
    //                     } else { //parent.right==current
    //                         if (!current.right) {///????
    //                             parent.right = current.left
    //                         } else {
    //                             parent.right = current.right
    //                         }
    //                     }
    //                 }
    //             }
    //             break;
    //         }
    //     }
    // }
    // getMinValue(node) {
    //     if (!node.left) return node.value;
    //     else return this.getMinValue(node.left);
    // }
    ///////////
    // deleteNew(value) {
    //     this.deleteHelper(value, this.root, null)
    // }

    // deleteHelper(value, current, parent) {
    //     while (current) {
    //         if (value < current.value) {
    //             parent = current;
    //             current = current.left;
    //         } else if ((value > current.value)) {
    //             parent = current;
    //             current = current.right;
    //         } else { // value is equal to current.value
    //             if (current.left && current.right) {
    //                 let minValueNode = this.getMinValue(current.right);
    //                 current.value = minValueNode.value;
    //                 this.deleteHelper(minValueNode.value, current.right, current);
    //             } else {
    //                 let child = current.left ? current.left : current.right;
    //                 if (!parent) {
    //                     this.root = child;
    //                 } else {
    //                     if (parent.left === current) {
    //                         parent.left = child;
    //                     } else {
    //                         parent.right = child;
    //                     }
    //                 }
    //             }
    //             break;
    //         }
    //     }
    // }

    // getMinValue(node) {
    //     if (!node.left) return node;
    //     else return this.getMinValue(node.left);
    // }


