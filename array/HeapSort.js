class Solution {
  //Heapify function to maintain heap property.
  heapify(arr, n, i) {
    let leftChildIndex = i * 2 + 1;
    let rightChildIndex = i * 2 + 2;
    let temp;
    if (leftChildIndex >= n) {
      return;
    } else if (leftChildIndex < n && rightChildIndex >= n) {
      if (arr[leftChildIndex] > arr[i]) {
        temp = arr[i];
        arr[i] = arr[leftChildIndex];
        arr[leftChildIndex] = temp;
        this.heapify(arr, n, leftChildIndex);
      }
    } else if (
      (arr[leftChildIndex] || 0) > (arr[rightChildIndex] || 0) &&
      arr[leftChildIndex] > arr[i]
    ) {
      temp = arr[i];
      arr[i] = arr[leftChildIndex];
      arr[leftChildIndex] = temp;
      this.heapify(arr, n, leftChildIndex);
    } else if (
      (arr[leftChildIndex] || 0) <= (arr[rightChildIndex] || 0) &&
      arr[rightChildIndex] > arr[i]
    ) {
      temp = arr[i];
      arr[i] = arr[rightChildIndex];
      arr[rightChildIndex] = temp;
      this.heapify(arr, n, rightChildIndex);
    }
  }

  //Function to build a Heap from array.
  buildHeap(arr, n) {
    for (let i = n - 1; i >= 0; i--) {
      this.heapify(arr, n, i);
    }
  }

  //Function to sort an array using Heap Sort.
  heapSort(arr, n) {
    this.buildHeap(arr, n);
    for (let i = n; i > 0; i--) {
      this.swap(arr, 0, i);
      this.heapify(arr, i - 1, 0);
    }
  }
  swap(arr, i, j) {
    let temp;
    temp = arr[i];
    arr[i] = arr[j - 1];
    arr[j - 1] = temp;
  }
}

const solution = new Solution();
let arr = [5, 7, 2, 3, 5, 5];
solution.heapSort(arr, 6);
// node ./array/HeapSort.js
console.log(arr)