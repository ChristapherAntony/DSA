//stack array implementation

class Stack{
    constructor(){
        this.array=[]
    }
    push(data){
        return this.array.push(data)
    }
    pop(){
        if(this.array.length>0){
            return this.array.pop()
        }
    }
    // view the last element
    peek(){
        return this.array[this.array.length-1]
    }
    isEmpty(){
        return this.array.length===0
    }
    size(){
        return this.array.length
    }
    clear(){
        return this.array=[]
    }
    display(){
        console.log(this.array);
    }
}

let newStack=new Stack()
newStack.push(20)
newStack.push(50)
newStack.push(70)

newStack.display()
newStack.pop()
newStack.display()