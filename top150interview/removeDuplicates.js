var removeDuplicates = function(nums) {
  let count = 1;
  let temp = nums[0]
  for(let i=1, position=1; i<nums.length; i++) {
    if(nums[i]>temp) {
      count++
      nums[position++] = nums[i];
      temp = nums[i]
    }
  }
  for(let i=count; i<nums.length; i++) {
    nums[i] = '_'
  }
  return count
};

// node ./top150interview/removeDuplicates.js