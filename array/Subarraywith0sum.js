class Solution {
  //Function to check whether there is a subarray present with 0-sum or not.
  subArrayExists(arr, n){
    let temp = [];
    let total = 0;
    let set = new Set();
    for(let i=0; i<n; i++) {
      total += arr[i];
      temp[i] = total;
    }
    for(let i=0; i<n; i++) {
      if(set.has(temp[i])) {
        return true
      }
      else {
        set.add(temp[i])
      }
    }
    return false
  }
  
}

// node ./array/Subarraywith0sum.js