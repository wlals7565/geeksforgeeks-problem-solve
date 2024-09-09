class Solution {
  mergeKArrays(arr, K) {
    arr = arr.flat();
    arr.sort((a,b)=>a-b)
    console.log(arr);
  }
}

const solution = new Solution();
solution.mergeKArrays(
  [
    [4, 5, 6],
    [1, 2, 3],
    [4, 5, 6],
  ],
  3
);
// node ./array/MergekSortedArrays.js
