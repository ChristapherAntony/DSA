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

    heapifyUp(idx=this.data.length-1) {
        let currentIdx =idx;
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
    heapifyDown(idx=0) {
        let currentIdx = idx;
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
    buildHeap(arr){
        this.data=arr
        for(let i=this.data.length-1;i>=0;i-- ){
            this.heapifyDown(i)
        }
    }
    
}

const heap = new MinHeap()
heap.push(46);
heap.push(45);
heap.push(4);
heap.push(56);
heap.push(30);
heap.push(1);
heap.push(5);

console.log(heap.data);
