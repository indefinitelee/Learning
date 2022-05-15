
function sortedTwoSum(nums, goal) {
  let indices = []
  let i=0; let j=nums.length-1; 
  let sum;
  while (i < j) {
    sum = nums[i] + nums[j];
  if (sum === goal) {
    indices.push(i,j);
      break;
  } else if (sum < goal){
    i++
    } else {
      if (sum > goal) {
        j--
      }
    }
  
  }
  return indices;
}

let arr = [1, 3, 7, 8, 11];
let goal = 10;
console.log(sortedTwoSum(arr, goal));