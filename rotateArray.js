class Solution {
  rotateArray(arr, d, n) {
      this.reverse(arr, 0, n-1);
      this.reverse(arr, n-d, n-1);
      this.reverse(arr, 0, n-d-1)
  }
  reverse(arr, start, end) {
    for(;start<end; start++, end--) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
    }
  } 
}

const solution = new Solution()
let arr = [1,2,3,4,5]
const result = solution.rotateArray(arr, 2, 5);
console.log(arr)