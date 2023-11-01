/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // find the highest num
    // create a for loops to check if all num from 0 to highest are included
    // if there are missing num,return the missing num
    // if all numberes are included,return the n number which is highest num + 1

    let highest = 0
    let miss = null
    for(let i=0; i<nums.length; i++){
        if(highest < nums[i]){
            highest = nums[i] 
        } 
    }
    for(let j = highest - 1; j>= 0; j--){
        if( nums.includes(j) == false){
            return j
        }
    }
     return highest + 1
};