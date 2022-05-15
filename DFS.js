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
    DFS(){
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
    DFS_Pre(){
        //[10,6,3,8,15,20]
        //visit all left of root first then right of root
        let data = []
        let current = this.root;
        function traverse(node){
            data.push(node.value)
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
    }    
        traverse(current)
        return data
    }
    DFS_Post(){
    //find leftmost, on left, then right most on left, 
        // leftmost on right, rightmost on right, 
        // root should be last
        // [3,8,6,20,15,10]
        let data = []
        let current = this.root;
        function traverse(node){    
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value) //"visiting" the node           
    }    
        traverse(current)
        return data
        
    }
    DFS_In(){
        //[3,6,8,10,15,20]
        let data = []
        let current = this.root;
        function traverse(node){    
            if (node.left) traverse(node.left);
            data.push(node.value) //"visiting" the node  
            if (node.right) traverse(node.right);
                     
    }    
        traverse(current)
        return data
        
    }

    
}


//      10
//    6      15
//  3  8    16   21
var tree = new BST()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)


