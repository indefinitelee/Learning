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
}


//      10
//    5      13
//  2  7    11   16
var tree = new BST()
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)


