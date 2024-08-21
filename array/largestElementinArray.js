class Solution {
  /**
  * @param number n
  * @param number[] arr

  * @returns number
  */
  largest(n, arr) {
    let large = arr[0]
      for(let i=1; i<n; i++) {
        if(large<arr[i]) {
          large = arr[i];
        }
      }
    return large;
  }
}

const solution = new Solution()
const arr= [1, 8, 7, 56, 90];
const result = solution.largest(5,arr)
console.log(result)

// node largestElementinArray.js