class Solution {
  // Function to calculate the difference between the maximum element in the array and
  // a given number k
  required(arr, k) {
      let max = k
      for(let i=0; i<arr.length; i++){
        if(max<arr[i]) {
          max = arr[i]
        }
      }
      if(max == k){
        return -1
      }
      return max-k
  }
}


// node /array/Drivethecar.js