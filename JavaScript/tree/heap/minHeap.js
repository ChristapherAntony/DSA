class MinHeap {
  constructor() {
      this.data = []
  }
  getParentIdx(i) {
      return Math.floor((i - 1) / 2);
  }
  getLeftChildIdx(i) {
      return (i * 2) + 1
  }
  getRightChildIdx(i) {
      return (i * 2) + 2
  }
  swap(arr, i, j) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  push(key) {
      this.data.push(key); 
      this.heapifyUp();
  }

  heapifyUp() {
      let currentIdx = this.data.length - 1;
      let parentIdx = this.getParentIdx(currentIdx);

      while (currentIdx > 0 && this.data[currentIdx] < this.data[parentIdx]) { 
          this.swap(this.data, currentIdx, parentIdx);
          currentIdx = parentIdx;
          parentIdx = this.getParentIdx(currentIdx);
      }
  }
  remove() {
      const minValue = this.data[0]
      this.data[0] = this.data[this.data.length - 1]
      this.data.length--; 
      this.heapifyDown()
      return minValue
  }
  heapifyDown() {
      let currentIdx = 0;
      let leftChildIdx = this.getLeftChildIdx(currentIdx);
      let rightChildIdx = this.getRightChildIdx(currentIdx);
      while (this.data[leftChildIdx]) {
          let smallestChild = this.data[rightChildIdx] && this.data[rightChildIdx] < this.data[leftChildIdx]
              ? rightChildIdx
              : leftChildIdx;

          if (this.data[currentIdx] > this.data[smallestChild]) {
              this.swap(this.data, currentIdx, smallestChild);
              currentIdx = smallestChild;
              leftChildIdx = this.getLeftChildIdx(currentIdx);
              rightChildIdx = this.getRightChildIdx(currentIdx);
          } else {
              return;
          }
      }
  }
}

const heap = new MinHeap()
console.log(heap);
heap.push(25)
heap.push(15)
heap.push(6)
heap.push(80)
heap.push(45)
console.log(heap.data);

let a = []
a.push(heap.remove())
a.push(heap.remove())

console.log(`top ${a.length} items `);
console.log(a);
console.log(heap);
