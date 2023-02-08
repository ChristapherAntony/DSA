class HashTable {
    constructor(size) {              //size as a parameter
        this.table = new Array(size)
        this.size = size
    }

    hash2(key) {
        let num = key.split("").reduce((acc, cur) => {
          return acc + cur.charCodeAt(0);
        }, 0);
        return num % this.size;
      }
    hash(key) {                     //accept a key type string
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }//creation of hash by key  
    // types of hashing methods

    // hash(data) {
    //     const H = 37;
    //     let total = 0;
    //     for (let i = 0; i < data.length; i++) {
    //         total += H * total + data.charCodeAt(i);
    //     }
    //     total = total % this.table.length;
    //     if (total < 0) {
    //         total += this.table.length - 1;
    //     }
    //     return parseInt(total);
    // }



    set(key, value) {
        const index = this.hash(key)                                  // key hashed
        const index2 = this.hash2(key)      
        const bucket = this.table[index]
        if (!bucket) {
            this.table[index] = [[key, value]]
        } else {
            const sameKeyItem = bucket.find(item => item[0] === key)  // first check the array hve any sub array with same key
            if (sameKeyItem) {
                sameKeyItem[1] = value                                // if same item -we update value
            } else {
                bucket.push([key, value])                             // else we push new key value pair
            }
        }
    }

    get(key) {
        const index = this.hash(key)
        const bucket = this.table[index]
        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem) {
                return sameKeyItem[1]                                 // note- key is stored in [0] and value is stored [1] 
            }
        }
        return undefined                                              // if key doesn't exists
    }

    remove(key) {
        const index = this.hash(key)
        const bucket = this.table[index]
        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem) {
                bucket.splice(bucket.indexOf(sameKeyItem), 1)
            }
        }

    }
    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }

        }
    }
}

const table = new HashTable(11)


table.set("name", "Amal")
table.set("age", 25)
table.set("ega", 40)
table.set("anme", "hi")
table.set("age", 50)
// table.remove("name")



table.display()
console.log(table[0[0]]);
