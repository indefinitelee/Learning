function pivot(arr, start = 0, end = arr.length +1) {
    function swap(array, i, j) {
        var temp = array[i]
        array[i] = array[j]
        array[j] = temp
        
    }
    /**
    *   const swap = (arr, idx1, idx2) => {
    *   [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    *  }
    */
    var pivot = arr[start]
    var swapIndex = start

    for (var i = start +1 ; i< arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++
            swap(arr, swapIndex, i)
            
        }
    }
    swap(arr, start, swapIndex)
    return swapIndex
}



function quickSort(arr, left = 0, right = arr.length-1) {
    if ( left < right) {
        
    
    let pivotIndex = pivot(arr, left, right)
    //left side 
    quickSort(arr, left, pivotIndex -1)
    // right side
    quickSort(arr, pivotIndex +1, right)
    }

    return arr
}

console.log(quickSort([4,8,2,1,5,7,6,3]))