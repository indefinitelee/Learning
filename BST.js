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
            } else {
                if (val < current.value) {
                  current = current.left
                } else if ( val > current.value){
                    current=current.right
                }
            }
        }
            return current ? current : undefined;
        
    }

    add(val){
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
      remove(val) {
     let node = this.find(val);

      if (!node) {
        return null;
      }
      if (val === node.val) {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          return node.right;
        }
        if (!node.right) {
          return node.left;
        }
        let temp = node.right
        node.val = temp;
        node.right = this.remove(node.right, temp);
        return node;
      } else if (val < node.val) {
        node.left = this.remove(node.left, val);
        return node;
      } else {
        node.right = this.remove(node.right, val);
        return node;
      }
    this.root = this.remove(this.root, val);
  }
}


//      10
//    5      13
//  2  7    11   16

try {
  const bst = new BST(4);
  bst.add(3);
  bst.add(5);
  bst.remove(3);
  assert.equal(bst.root.right.val, 5);

  console.log(
    'PASSED: ' + 'const bst = new BST(4);bst.add(3);bst.add(5);bst.remove(3);'
  );
} catch (err) {
  console.log(err);
}