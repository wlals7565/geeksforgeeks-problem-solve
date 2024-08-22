class Solution
{
  select(arr,i){
     let min = arr[i]
     let minIndex = i;
     for(let j=i+1; j<arr.length; j++){
      if(arr[j]<min){
        min = arr[j]
        minIndex = j;
      }
     }
     this.swap(arr, i, minIndex)
  }

  //Function to sort the array using selection sort algorithm.
  selectionSort(arr,n){
    for(let i=0; i<n; i++){
      this.select(arr, i)
    }
  }

  swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

// node SelectionSort.js