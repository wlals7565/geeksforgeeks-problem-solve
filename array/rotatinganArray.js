class Solution {
  leftRotate(arr, d) {
    arr.reverse()
    this.reverse(arr,0,arr.length-d)
    this.reverse(arr,arr.length-d,arr.length)
  }

  reverse(arr, start, end) {
    let temp;
    for(let i=start, j=end-1; i<j; i++, j--){
      temp = arr[i]
      arr[i] = arr[j]
      arr[j] =temp;
    }
  }
}

const solution = new Solution()
solution.leftRotate([1, 3, 4, 2], 3)
// node rotatinganArray.js