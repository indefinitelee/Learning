function countUniqueValues(arr){
    let i,j
    if (arr.length === 0) return 0
  for ( i =0, j=1; j< arr.length; ) {
        if (arr[i] !== arr[j] ) {
           i++
           arr[i] = arr[j]
           j++
        } else {
            j++
        }     
    }

    return i + 1
}

countUniqueValues([])