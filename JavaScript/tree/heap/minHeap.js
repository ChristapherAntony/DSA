class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(val) {
      this.heap.push(val);
      this.bubbleUp();
    }
  
    bubbleUp() {
      let index = this.heap.length - 1;
  
      while (index > 0) {
        let element = this.heap[index];
        let parentIndex = Math.floor((index - 1) / 2);
        let parent = this.heap[parentIndex];
  
        if (element >= parent) break;
  
        this.heap[index] = parent;
        this.heap[parentIndex] = element;
  
        index = parentIndex;
      }
    }
  
    extractMin() {
      let min = this.heap[0];
      let last = this.heap.pop();
  
      if (this.heap.length > 0) {
        this.heap[0] = last;
        this.sinkDown();
      }
  
      return min;
    }
  
    sinkDown() {
      let index = 0;
      let length = this.heap.length;
      let element = this.heap[0];
  
      while (true) {
        let leftChildIndex = 2 * index + 1;
        let rightChildIndex = 2 * index + 2;
        let leftChild, rightChild;
        let swap = null;
  
        if (leftChildIndex < length) {
          leftChild = this.heap[leftChildIndex];
          if (leftChild < element) {
            swap = leftChildIndex;
          }
        }
  
        if (rightChildIndex < length) {
          rightChild = this.heap[rightChildIndex];
          if (
            (swap === null && rightChild < element) ||
            (swap !== null && rightChild < leftChild)
          ) {
            swap = rightChildIndex;
          }
        }
  
        if (swap === null) break;
  
        this.heap[index] = this.heap[swap];
        this.heap[swap] = element;
        index = swap;
      }
    }
  }