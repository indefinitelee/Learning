/** 
*  First in First out -- first on the line if first used
*  print queue
*/
// using array methods like shift/unshift push/pop
// either enquue or deque will cause reindexing the whole array


class Node {
    constructor(val){
        this.val = val
        this.prev= null
        this.next = null
    } 
}


class Queue {
    constructor(){
        this.size = 0
        this.first = null
        this.last = null; 
    }

    enqueue(val){
        let newNode = new Node(val) 
        if (!this.first) {
            this.first = newNode
            this.last = newNode
            
        } else {
            this.last.next = newNode
            this.last = newNode
            
        }
        this.size++
        return this.size
        
    }

    dequeue(){
        if (!this.first) return null

        let temp = this.first;

        if (this.first === this.last) {
            this.last = null; 
        }

        this.first = this.first.next
        this.size--
        return temp.val
        
    }

    
}

q = new Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)