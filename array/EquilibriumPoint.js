class Solution {
  // Function to find equilibrium point in the array.
  equilibriumPoint(arr) {
      let right = 0;
      let left = 0;
      for(let i=1; i<arr.length; i++) {
        right += arr[i]
      }
      for(let i=0; i<arr.length; i++) {
        if(right === left) {
          return i+1
        }
        left += arr[i]
        right -= arr[i+1]
      }
      return -1
  }
}

// node ./array/EquilibriumPoint.js