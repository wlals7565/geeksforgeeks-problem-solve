/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let index = m+n-1;
  let i, j
    for(i=m-1, j=n-1; i>=0 && j>=0;) {
      console.log(nums1)
      if(nums1[i]>=nums2[j]) {
        nums1[index--] = nums1[i--]
      }
      else {
        nums1[index--] = nums2[j--]
      }
    }
    if(i===-1) {
      console.log(nums1)
      for(;j>=0;) {
        nums1[index--] = nums2[j--]
      }
    }
    else if(j===-1) {
      console.log(nums1)
      for(;i>=0;) {
        nums1[index--] = nums1[i--]
      }
    }
    console.log(nums1)
};

merge([1,2,3,0,0,0], 3, [2,5,6],3)

// node ./top150interview/MergeSortedArray.js