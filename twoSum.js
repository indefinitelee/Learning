function twoSum(arr, goal) {
  const results = [];
  let map = {}
  for (let i =0; i < arr.length; i++ ) {
    if (!map[arr[i]]) {
      map[arr[i]] = i
    }
      let complement = goal - arr[i] 
    if (complement in map) {
      results.push(map[complement], i)  
    }
    
  }
  return results;
}


twoSum([1, 9, 13, 20, 47], 48)