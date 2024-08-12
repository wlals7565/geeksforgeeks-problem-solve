class Solution {
  reverseSubArray(arr, l, r) {
      for(let startIndex = l-1, endIndex = r-1; startIndex<endIndex; startIndex++, endIndex--){
        let temp = arr[startIndex];
        arr[startIndex] = arr[endIndex];
        arr[endIndex] = temp;
      }
    return arr;
  }
}
