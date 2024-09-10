class Solution
{
    //Function to find left and right array using given array 'arr'.
    leftRight(arr, n)
    {
        let temp = []
        for(let i=0; i<n; i++) {
          temp.push(-1);
        }
        for(let i=0; i<n; i++){
          if(temp[arr[i]]==-1) {
            temp[arr[i]] = arr[i] 
          }
          else if(temp[n-arr[i]-1]==-1) {
            temp[n-arr[i]-1] = arr[i]
          }
          else {
            return 0;
          }
        }
        return 1;
    }
}

const solution = new Solution()
const result = solution.leftRight([1, 3, 3, 2],4)
console.log(result)
// node ./array/LeftorRightPositionedArray.js