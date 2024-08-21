class Solution {
  insert(arr, i) {
    let temp = arr[i];
    let end;
    for (end = i; end > 0; end--) {
      if (arr[end-1] > temp) {
        arr[end] = arr[end-1];
      } else {
        break;
      }
    }
    arr[end] = temp;
  }

  //Function to sort the array using insertion sort algorithm.
  insertionSort(arr, n) {
    for (let i = 1; i < n; i++) {
      this.insert(arr, i);
    }
  }
}

const solution = new Solution();
let arr =[4,1,3,9,7]
solution.insertionSort(arr, 5)
console.log(arr);
// node InsertionSort.js
