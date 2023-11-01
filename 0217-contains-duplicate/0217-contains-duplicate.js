/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // make num to string
    // for loop to check 
    // if index appears more than once,return true
    // but if each element is different,return false
    
    for(let i = 0; i<nums.length; i++){
        for(let j = i+1; j<nums.length; j++){
            if(nums[i] === nums[j]){
                return true
            }
        }
    }
    return false
};