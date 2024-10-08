//nums는 내부적으로 교체
//반환값은 k(갯수)
var removeElement = function(nums, val) {
  let length = nums.length
  let left = 0;
  let right = length-1
  let count = 0;
  while(left !== length) {
    if(nums[left] !== val) {
      left++;
    }
    else {
      nums[left] = nums[right];
      nums[right--] = '_'
      count++
    }
  }
  return length-count
};

// node ./top150interview/removeElement.js