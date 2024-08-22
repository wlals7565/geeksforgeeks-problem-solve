class Solution {
  // Function to find equilibrium point in the array.
  equilibriumPoint(arr) {
      let sum = 0;
      for(let i=0; i<arr.length; i++) {
        sum += arr[i]
      }
      let leftSum = 0;
      let rightSum = sum;
      for(let i=0; i<arr.length; i++){
        rightSum -= arr[i];
        if(leftSum==rightSum) {
          return i+1
        }
        leftSum += arr[i]
      }
      return -1;
  }
}

//node EquilibriumIndexOfAnArray.js