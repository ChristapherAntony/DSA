class MinHeap {
    MinHeap() {

    }
    MinHeap(array) {
        this.buildHeap(array)

    }
    buildHeap(array) {
        heap=array 
        for(let i=this.parent(heap.length-1); i>=0; i--){
            this.shiftDown(i)
        }

    }
    shiftDown(currIdx) {

    }
    shiftUp(currIdx) {

    }
    peak() {

    }
    remove() {

    }
    insert(value) {

    }
    parent(i) {
        return (i - 1) / 2;
    }
    leftChild(i) {
        return (i * 2) + 1
    }
    rightChild(i) {
        return (i * 2) + 2
    }
    display() {
        for (let i of heap) {
            process.stdout.write(`${arr[i]}`)
        }
        console.log();
    }
}
let arr=[2,6,8,4,15,35,1]

let heap=new MinHeap(arr)