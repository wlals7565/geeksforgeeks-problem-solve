class Solution {
  // Function to find common elements in three arrays.
  commonElements(arr1, arr2, arr3) {
    let temp = []
    let current;
    for(let a=0,b=0,c=0; a<arr1.length && b<arr2.length && c<arr3.length;){
      if(arr1[a] == arr2[b] && arr2[b] == arr3[c]){
        if(arr1[a] != current){
        temp.push(arr1[a]);
        current = arr1[a]
      }
        a++;
        b++;
        c++;
      }
      else {
        if(arr1[a] <= arr2[b]){
          if(arr1[a] <= arr3[c]){
            a++; // a b c or a c b
          }
          else {
            c++ // c a b
          }
        }
        else if(arr2[b] <= arr1[a]){
          if(arr2[b]<= arr3[c]){
            b++; // b a c or b c a
          }
          else {
            c++ // c b a
          }
        }
      }
    }
    if(temp.length == 0){
      temp.push(-1);
    }  
    return temp;
  }
}

const solution = new Solution()
console.log(solution.commonElements([1, 5, 10, 20, 40, 80], [6, 7, 20, 80, 100],[3, 4, 15, 20, 30, 70, 80, 120]))

// node Commonin3SortedArrays.js