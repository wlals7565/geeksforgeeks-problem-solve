class Solution
{
    merge(arr, l, m, r)
    {
      let temp = [];
      let pointer1 = l;
      let pointer2 = m+1;
      for(;pointer1<=m && pointer2<=r;) {
        if(arr[pointer1]<=arr[pointer2]) {
          temp.push(arr[pointer1++]);
        }
        else{
          temp.push(arr[pointer2++]);
        }
      }
      if(pointer2<=r) {
        for(;pointer2<=r;pointer2++){
          temp.push(arr[pointer2])
        }
      } else {
        for(;pointer1<=m;pointer1++){
          temp.push(arr[pointer1])
        }
      }
      for(let i=0; i<temp.length; i++) {
        arr[l++]= temp[i];
      }
    }
    
    mergeSort(arr, l, r){
    if(l==r){
      return;
    }
    let m = Math.floor((l+r)/2);
    this.mergeSort(arr,l,m);
    this.mergeSort(arr,m+1,r);
    this.merge(arr,l,m,r);
    }
}

const solution = new Solution();
let arr = [5, 7, 2, 3, 5, 5];
solution.mergeSort(arr,0,5)
console.log(arr);

// node ./array/MergeSort.js