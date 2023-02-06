class Node {
    constructor(key, value, next = null) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value) {
        let index = this.hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = new Node(key, value);
        } else {
            let current = this.keyMap[index];
            while (current.next) {
                current = current.next;
            }
            current.next = new Node(key, value);
        }
    }

    get(key) {
        let index = this.hash(key);
        if (!this.keyMap[index]) return undefined;
        else {
            let current = this.keyMap[index];
            while (current) {
                if (current.key === key) return current.value;
                current = current.next;
            }
            return undefined;
        }
    }

    keys() {
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                let current = this.keyMap[i];
                while (current) {
                    keysArr.push(current.key);
                    current = current.next;
                }
            }
        }
        return keysArr;
    }

    values() {
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                let current = this.keyMap[i];
                while (current) {
                    if (!valuesArr.includes(current.value))
                        valuesArr.push(current.value);
                    current = current.next;
                }
            }
        }
        return valuesArr;
    }

    display() {
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                console.log(`Bucket ${i}:`);
                let current = this.keyMap[i];
                while (current) {
                    console.log(`Key: ${current.key}, Value: ${current.value}`);
                    current = current.next;
                }
            }
        }
    }

}

const keyMap = new HashTable()
keyMap.set("name", "Amal")
keyMap.set("age", 25)
keyMap.set("anme", "hi")
keyMap.display()
//   keyMap.remove("name")
console.log("..............");


keyMap.display()
