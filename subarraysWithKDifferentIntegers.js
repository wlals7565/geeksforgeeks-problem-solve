// 다 틀림 다시할 것 최대치에서 서브어레이 구할 것
class Solution {
  //Function to count the subarrays with sum exactly equal to k.
  subarrayCount(arr, N, k) {
    let set = new Set();
    let map = new Map();
    let count = 0;
    for(let start=0, end=0; ;){
      if(set.size<=k) {
        set.add(arr[end]);
        map.set(arr[end], end);
        end++;
      }
      else if(set.size>k){
        if(map.get(arr[start])==start) {
          set.delete(arr[start])
        }
        start++;
      }
      if(set.size == k) {
        count++;
      }
    }
  }
}

const solution = new Solution();
const result = solution.subarrayCount()
console.log(result)

// node subarraysWithKDifferentIntegers.js