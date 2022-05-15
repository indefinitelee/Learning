
// parent must be larger than children
// no implied ordering of siblings
// to find children of a parent node 2*index +1 and 2*index +2
// to find parent of a node Math.floor((n -1) /2 )
class MaxBinaryHeap{
    constructor(){
        this.values = []
    }
    // insert to the end with push then implement a sort
    insert(val){
        this.values.push(val)
        this.sort()
    }

    sort(){
        
        let index = this.values.length -1; 
        let element = this.values[index]

        while(index >0){
             let parentIndex = Math.floor((index-1)/2)
            let parent = this.values[parentIndex] 
            if (element <= parent ) break; 
            this.values[parentIndex] = element
            this.values[index] = parent
            index = parentIndex;  
        }
        
    }
}
//[41,39,33,18,27,12]
let bh = new MaxBinaryHeap()

bh.insert(41)
bh.insert(39)
bh.insert(33)
bh.insert(18)
bh.insert(27)
bh.insert(12)
bh.insert(55)
bh.values; 