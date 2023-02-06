class LinkedList {
    constructor() {
        this.head = null;
    }
    addToHead(key, value) {
        const newNode = { key, value, next: this.head };
        this.head = newNode;
    }
    remove(key) {
        if (!this.head) return;
        if (this.head.key === key) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next) {
            if (current.next.key === key) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }
    find(key) {
        if (!this.head) return null;
        let current = this.head;
        while (current) {
            if (current.key === key) {
                return current.value;
            }
            current = current.next;
        }
        return null;
    }
}

class HashTable {
    constructor(size) {
        this.table = Array(size).fill(null).map(() => new LinkedList());
        this.size = size;
        this.count = 0;
    }
    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }
    set(key, value) {
        this.count++;
        if (this.count / this.size >= 0.75) {
            this.resize(this.size * 2);
        }
        const index = this.hash(key);
        this.table[index].addToHead(key, value);
    }
    get(key) {
        const index = this.hash(key);
        return this.table[index].find(key);
    }
    remove(key) {
        this.count--;
        if (this.count / this.size <= 0.25) {
            this.resize(this.size / 2);
        }
        const index = this.hash(key);
        this.table[index].remove(key);
    }
    resize(newSize) {
        const oldTable = this.table;
        this.table = Array(newSize).fill(null).map(() => new LinkedList());
        this.size = newSize;
        this.count = 0;
        for (const linkedList of oldTable) {
            let current = linkedList.head;
            while (current) {
                this.set(current.key, current.value);
                current = current.next;
            }
        }
    }
}

const table = new HashTable(50)


table.set("name", "Amal")
table.set("age", 25)
table.set("anme", "hi")
table.display()
table.remove("name")
console.log("..............");


table.display()
