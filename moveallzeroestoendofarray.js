class Solution {
  pushZerosToEnd(arr,n){
      for(let i=0, j=0;j<n;) {
        if(arr[i] != 0) {
          i++;
          j++;
        }
        else if(arr[i] ==0 && arr[j] == 0) {
          j++
        }
        else if(arr[i] ==0 && arr[j] !=0 ) {
          let temp = arr[i];
          arr[i] = arr[j]
          arr[j] = temp;
        }
      }
  }
}

const solution = new Solution()
const arr = [10, 2, 4]
solution.pushZerosToEnd(arr, 3)
console.log(arr)
// node moveallzeroestoendofarray.js