function containsNearbyDuplicate(nums, k) {
let map ={}
  
  let j; 
  let first;
  let second;
  for (let i = 0; i< nums.length; i++) {
    if (nums[i] in map === false ) {
      map[nums[i]] = i // num : index  2: 3
    } else {
      first = map[nums[i]]
      second = i
      map[nums[i]] = i //overwrite if it occurs again
      if (Math.abs(first - second) <= k) {
        return true
      }     }
  }
  return false

    
    
};

console.log(containsNearbyDuplicate([1,0,1,1], 1))