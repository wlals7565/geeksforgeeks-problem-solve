class Solution
{
   //Function to sort the array using bubble sort algorithm.
   bubbleSort(arr,n){
    let temp;
    for(let i=arr.length-1; i>=0; i--){
      for(let j=0; j<i; j++){
        if(arr[j]>arr[j+1]){
          temp = arr[j];
          arr[j] = arr[j+1]
          arr[j+1] = temp;
        }
      }
    }
   }
}
//node BubbleSort.js