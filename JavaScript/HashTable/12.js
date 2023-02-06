class HashTable {
    constructor(size) {
      this.size = size;
      this.buckets = new Array(size);
      this.numEntries = 0;
    }
  
    hash(key) {
      return key % this.size;
    }
  
    add(key, value) {
      const index = this.hash(key);
      if (!this.buckets[index]) {
        this.buckets[index] = [];
      }
      this.buckets[index].push([key, value]);
      this.numEntries++;
    }
  
    remove(key) {
      const index = this.hash(key);
      const bucket = this.buckets[index];
      if (bucket) {
        for (let i = 0; i < bucket.length; i++) {
          if (bucket[i][0] === key) {
            bucket.splice(i, 1);
            this.numEntries--;
            return true;
          }
        }
      }
      return false;
    }
  
    get(key) {
      const index = this.hash(key);
      const bucket = this.buckets[index];
      if (bucket) {
        for (let i = 0; i < bucket.length; i++) {
          if (bucket[i][0] === key) {
            return bucket[i][1];
          }
        }
      }
      return null;
    }
  }
  
  const hashTable = new HashTable(10);
  hashTable.add(1, 'one');
  hashTable.add(2, 'two');
  hashTable.add(3, 'three');
  console.log(hashTable.get(1));  // 'one'
  console.log(hashTable.get(2));  // 'two'
  console.log(hashTable.get(3));  // 'three'
  console.log(hashTable.get(4));  // null
  hashTable.remove(2);
  console.log(hashTable.get(2));  // null