class Node {
    constructor(val){
        this.val = val
        this.prev= null
        this.next = null
    } 
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0    
    }

    push(val) {
        const newNode = new Node(val)
        if (this.head === null || this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        newNode.next = null
        newNode.val = val
        }
         this.length++
        return this; 
    }

    pop(){
        if (this.length === 0) {
            console.log(this)
            return undefined;
        }
        let popped = this.tail
        if (this.length === 1 ){
            this.head = null;
            this.tail = null;
            
        } else {         
            this.tail = popped.prev;
            this.tail.next = null
            popped.prev = null
            popped.next = null; 
            }
        this.length--;
        console.log("length is ", this.length)
        return popped;
    }
    // remove from the beginning
    shift(){
        if(!this.head) return undefined;
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
        
        let newHead = this.head.next;
        this.head = newHead;
        this.head.prev = null;
        }
        this.length--
        oldHead.next = null;
        oldHead.prev = null;
        return oldHead
    }
// add to the beginning
    unshift(val){
        let newNode = new Node(val)
        if (this.length === 0 ){
            this.head = newNode
            this.tail = newNode
            
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this;
    }

    get(index){
        let counter;
        let node
        if (index < 0 || index >= this.length) {
            return undefined
        }

        //start at head
        if (index <= this.length /2 ) {
            console.log("start at head")
            counter = 0
            node = this.head
            while (counter < index) {
                node = node.next
                counter++
            }
        } else {
        //start at tail
            console.log("start at tail")
            counter = this.length -1
            node = this.tail
            while (counter > index) {
                node = node.prev
                counter--
            }
        }
        
        return node;
        
    }
    set(index, val){
                if (index < 0 || index >= this.length) {
            return false
        }
        let found = this.get(index)
        if (found != undefined ) {
        found.val = val
        return true
        }
        return false
        
    }

    insert(index, val){
        let insertedNode = new Node(val)
                if (index < 0 || index >= this.length) {
            return undefined
        }
        if (index === this.length) {
            return !!this.push(val)
        }

        if (index === 0) {
            return !!this.unshift(val)
        }
    
        let before = this.get(index -1);
        let after = before.next
        if (before) {

            before.next = insertedNode
            after.prev = insertedNode
            insertedNode.prev = before
            insertedNode.next = after
            this.length++
            return true;
        }
        return false;
        
    }
    remove(index) {
                if (index < 0 || index >= this.length) {
            return undefined
        }
        if (index === this.length-1) {
            return this.pop()
        }

        if (index === 0) {
            return this.shift(val)
        }

        let removeNode = this.get(index)
        if (removeNode) {
            let beforeNode = removeNode.prev
            let afterNode = removeNode.next;

            beforeNode.next = afterNode
            afterNode.prev = beforeNode
            removeNode.next = null
            removeNode.prev = null
            this.length--
            return removeNode
        }

        return false;
        
    }

    reverse(){
        //tail becomes the new head
        // head becomes the new tail
 
        let prevHead = this.head
        let prevTail = this.tail
        let count = this.length -1 
        let cur, prev
        while (count > 0 ) {
            cur = this.get(count)
            prev = this.get(count -1)
            this.swap(prev, cur)
            count--
        } 
        this.head = prevTail
        this.head.prev = null
        this.tail = prevHead
        this.tail.next = null
        
        return this;
    }
    sllreverse(){
      var node = this.head;
      this.head = this.tail;
      this.tail = node;
      var next;
      var prev = null;
      for(var i = 0; i < this.length; i++){
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
      }
      return this;
    }

    swap(nodeA, nodeB) {
        let temp = nodeB

        // A.next was B so it becomes B(temp).next
        nodeA.next = temp.next
        nodeB.next = nodeA
        //B.prev is A
        nodeB.prev = nodeA.prev
        //A.prev is some other node
        nodeA.prev = nodeB
        return this;
        
    }
}




var list = new DoublyLinkedList()
list.push(99)
list.push(100)
list.push(101)


