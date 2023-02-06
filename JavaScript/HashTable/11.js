//simple method

class HashTable {
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }


    // hash(key) {
    //     let total = 0
    //     for (let i = 0;i<key.length;i++){
    //         total = total + key.charCodeAt(i)
    //     }
       
    //     return total % this.size
    // }
    hash(key){
        return key % this.size
    }

    set(key,value){
        const index = this.hash(key)
        this.table[index] = value
    }

    get(key){
        const index = this.hash(key)
        return this.table[index]
    }

    remove(key){
        const index = this.hash(key)
        this.table[index] = undefined
    }

    display(){
        for(let i = 0; i < this.table.length; i++){
                console.log(i,' --- ',this.table[i])
        }
    }
}

const table = new HashTable(10)

table.set(11,"aflah")
table.set(1,"test")
table.set("age",22)
table.display()