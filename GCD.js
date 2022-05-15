var findGCD = function(nums) {
    nums.sort((a,b) => a-b)
    for(let i=nums[nums.length-1]; i>=0; i--){
        if(nums.every((num) => num % i == 0)){
            return i
        }
    }
    return 0
};
// FUNCTION SIGNATURE ENDS




console.log(findGCD([2,3,6,8,10]))