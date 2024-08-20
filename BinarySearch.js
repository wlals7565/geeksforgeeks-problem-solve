class Solution {
  binarysearch(arr, k) {
      return this.binarysearch2(arr, 0, arr.length-1, k)
  }

  binarysearch2(arr, start, end, k) {
    if(start>end) {
      return -1
    }
    let mid = Math.floor((start+end)/2);
    if(arr[mid]==k){
      return mid;
    } 
    if(arr[mid]<k) {
      return this.binarysearch2(arr,mid+1,end,k)
    }
    if(arr[mid]>k){
      return this.binarysearch2(arr,start,mid-1,k)
    }
  }
}

const solution = new Solution()
console.log(solution.binarysearch([11, 22, 33, 44, 55], 444))

// node BinarySearch.js