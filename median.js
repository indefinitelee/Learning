function findMedian(list) {
    if (list.length % 2 === 0) {
      let middle = list[list.length/2]
        let neighbor = list[(list.length/2) -1]
      let median = (middle + neighbor) /2
      return median
    } else {
        let midIndex = list.length/2
      let median = list[Math.floor(midIndex)]
      return median
    }
}

findMedian([1,2,3,4,5,6])