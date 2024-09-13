class Solution {
  longSubarrWthSumDivByK(arr, n, k) {
    let total = 0;
    let map = new Map();
    for (let i = 0; i < n; i++) {
      total += arr[i];
      if (map.get(total % k) === undefined && total % k !== 0) {
        map.set(total % k, i);
      }
    }
    let maxLength = 0;
    total = 0;
    let fuckingdoing;
    for (let i = 0; i < n; i++) {
      total += arr[i];
      if(total%k==0 && maxLength<i+1){
        maxLength = i+1
      }
      if(i-map.get(total%k)>maxLength) {
        maxLength = i-map.get(total%k)
      }
      fuckingdoing = i-map.get(total%k >=0 ? -(k-total%k) : (k-Math.abs(total%k)))
      if(fuckingdoing>maxLength) {
        maxLength = fuckingdoing
      }
    }
    return maxLength
  }
}

const solution = new Solution();
const result = solution.longSubarrWthSumDivByK(
  [7, -1, 2, -2, -9, 0, -4, -3, 0, -9],
  10,
  6
);
console.log(result);
// node ./array/LongestsubarraywithsumdivisiblebyK.js
// 7, -1, 2, (-2, -9, 0, -4, -3, 0,) -9,
// 7, 6, 8, 6, -3, -3, -7, -10, -10, -19,
// 1 0 2 0 -3 -3 -1 -4 -4 -1
