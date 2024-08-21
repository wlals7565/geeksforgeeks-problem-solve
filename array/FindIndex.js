class Solution {
  findIndex(arr, key) {
    let result = [];
      for(let i=0; i<arr.length; i++){
        if(arr[i] == key){
          result.push(i)
        }
      }
    if(result.length ==0) {
      return [-1,-1]
    }
    return [result[0], result[result.length-1]]
  }
}


// node FindIndex.js