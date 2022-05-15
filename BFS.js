// visit all nodes on a given leven before going down to next level
// use an array as a quueue push/shift
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
        // this.count = 0
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    find(val){
        if (this.root === null) return false;
        let current = this.root; 
        let found = false;
        while(!found) {
            console.log(current.value)
            if (current.value === val) {
                
                found = true
            }
            if (val < current.value) {
                current = current.left
            } else if ( val > current.value){
                current=current.right
            }
        }
            return current ? current : undefined;
        
    }

    insert(val){
        let nodeToInsert = new Node(val)

        if (!this.root) {
            this.root = nodeToInsert
            return this;
        } 
        let cur = this.root
        while(true) {
            if (val === cur.value) return undefined;
            if (val < cur.value) {
                if (cur.left === null){
                    cur.left = nodeToInsert; 
                    return this;
                } 
                    cur = cur.left
            } else  {
                
                    if (cur.right === null) {
                    cur.right = nodeToInsert;
                    return this;
                } 
                    cur = cur.right
                }
                
        }
        
    }
    BFS(){
        let data = [];
        let queue =[];
        let current;
        queue.push(this.root)
        while (queue.length) {
            current = queue.shift()
            data.push(current.value)
            if (current.left)  queue.push(current.left)
            if (current.right) queue.push(current.right)
            
        }
        return data;
    }
    
}


//      10
//    5      13
//  2  7    11   16
var tree = new BST()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)



