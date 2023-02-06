class HashTable {
    constructor(size) {
      this.size = size;
      this.buckets = new Array(size);
      this.numEntries = 0;
    }
  
    hash(key) {
      const numDigits = Math.floor(Math.log10(key)) + 1;
      const middle = Math.floor(numDigits / 2);
      const squared = key ** 2;
      return parseInt(squared.toString().slice(middle - 1, middle + 1));
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
  
  const hashTable = new HashTable(1000);
  hashTable.add(11, 'eleven');
  hashTable.add(12, 'twelve');
  hashTable.add(13, 'thirteen');
  console.log(hashTable.get(11));  // 'eleven'
  console.log(hashTable.get(12));  // 'twelve'
  console.log(hashTable.get(13));  // 'thirteen'
  console.log(hashTable.get(14));  // null
  hashTable.remove(12);
  console.log(hashTable.get(12));  // null