class Solution
{
    partition(arr, low, high){
      console.log(arr, low, high)
        // Your code here
      const standard = arr[low];
      let start = low+1;
      let end = high;
      let temp;
      while(1) {
        while(arr[start] <= standard && start<=end){
          start++;
        }
        while(arr[end]>= standard && start<=end) {
          end--
        }
        if(start>=end) {
          arr[low] = arr[end];
          arr[end] = standard;
          return end;
        } else {
          temp = arr[start];
          arr[start] = arr[end];
          arr[end]= temp;
        }
      }
    }
    
    quickSort(arr, low, high){
        if(low>=high) {
          return;
        }
        const pivot = this.partition(arr,low,high)
        console.log(pivot, arr);
        this.quickSort(arr,low,pivot-1);
        this.quickSort(arr,pivot+1, high);
    }
    
}

const solution = new Solution();
let arr = [5, 7, 2, 3, 5, 5];
solution.quickSort(arr, 0, 5);
// node ./array/QuickSort.js
console.log(arr)
