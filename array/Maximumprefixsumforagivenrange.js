class Solution {
  getMaximumPrefixSum(arr) {
    let max = 0;
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
      if (total > max) {
        max = total;
      }
    }
    return max;
  }
}

// node ./array/Maximumprefixsumforagivenrange.js
