// LIFO last in first out same as first in last out 
// stack good for undo/redo
// routing like browsing history
// tree and graph algorithms

// var stack = []

// stack.push("google")
// stack.push("insta")
// stack.push("youtube")

// stack.pop() // returns "youtube", the last added item

class Node {
    constructor(val){
        this.val = val
        this.prev= null
        this.next = null
    } 
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0
    }
//basically shift and unshift so adding and removal are constant time instead of 
// iterating to get last item
    push(val){
        let newNode = new Node(val)
        if (this.first === null) {
            this.first = newNode
            this.last = newNode
            
        } else {
        let curFirst = this.first
        this.first = newNode; 
        this.first.next = curFirst
        
        }
        return ++this.size; 
    }

    pop(){
        if (this.first === null) {
            return null;
        }
        let temp = this.first;
        if (this.first === this.last) {
           this.last = null
        }
            
        this.first = this.first.next;
        this.size--;

        return temp.val;
    }

    
}

stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)