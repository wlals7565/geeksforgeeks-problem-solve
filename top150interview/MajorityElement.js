var majorityElement = function(nums) {
  let major;
  let count = 0;
    for(let i=0; i<nums.length; i++){
      if(count==0) {
        major = nums[i]
        count++;
      }
      else {
        if(nums[i]==major){
          count++
        }
        else {
          count--
        }
      }
    }
    return major
};
// node ./top150interview/MajorityElement.js