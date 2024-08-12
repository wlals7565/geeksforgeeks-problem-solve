class Solution {
  searchEle(arr, x) {
      for(let i=0; i<arr.length; i++) {
        if(arr[i]==x) {
          return true;
        }
      }
      return false;
  }

  insertEle(arr, y, yi) {
    for(let i=arr.length; i>yi; i--) {
      arr[i]= arr[i-1];
    }
    arr[yi] = y;
  }

  deleteEle(arr, z) {
    const index = this.findIndex(arr,z);
    if(index === false) {
      return;
    }
    arr.splice(index,1)
  }

  findIndex(arr, z) {
    for(let i=0; i<arr.length; i++) {
      if(arr[i] == z) {
        return i
      }
    }
    return false
  }
}

let arr = [2, 4, 1, 0, 2];
const solution = new Solution()
const searchResult = solution.searchEle(arr, 1);
solution.insertEle(arr,2,2)
console.log(searchResult);
console.log(arr)
solution.deleteEle(arr,2)
console.log(arr)

// node Operatinganarray.js