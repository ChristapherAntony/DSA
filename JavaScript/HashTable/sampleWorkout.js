class HashTable {
  constructor(size) {
    this.table = new Array(size)
    this.size = size
  }
  hash(key) {
    let total = 0
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i)
    }
    return total % this.size
  }

  //set to hash table key and value
  set(key, value) {
    let hashedKey = this.hash(key)
    // console.log(key + "->" + hashedKey);
    const bucket = this.table[hashedKey]
    if (!bucket) {
      this.table[hashedKey] = [[key, value]]
    } else {
      let sameKeyItem = bucket.find(item => item[0] === key)
      if (sameKeyItem) {
        sameKeyItem[1] = value
      } else {
        bucket.push([key, value])
      }
    }

  }
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) console.log(i + "->", this.table[i]);
    }

  }
  get(key) {
    let hashedKey = this.hash(key)
    let bucket = this.table[hashedKey]
    if (bucket) {
      let sameKeyItem = bucket.find(item => item[0] === key)
      if (sameKeyItem) {
        return sameKeyItem[1]
      }
    }
    return undefined
  }
  remove(key){
    let hashedKey=this.hash(key)
    let bucket=this.table[hashedKey]
    if(bucket){
      let sameKeyItem=bucket.find(item=>item[0]===key)
      if(sameKeyItem){
        bucket.splice(bucket.indexOf(sameKeyItem),1)
      }
    }
  }



}
let hashTable = new HashTable(50)
hashTable.set("Name", "Amal")
hashTable.set("Age", 25)
hashTable.set("Place", "Ernakulam")
hashTable.set("Name", "Kiran")

hashTable.set("Hobby", "reading books")

hashTable.remove("Place")
hashTable.display()
