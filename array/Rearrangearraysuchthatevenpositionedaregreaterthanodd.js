class Solution
{
    assign(arr, n)
    {
      arr.sort((a, b) => a - b);
      let temp;
      for(let i=1; i<n-1; i+=2) {
        temp = arr[i];
        arr[i] = arr[i+1]
        arr[i+1] = temp
      }
      console.log(arr)
      return arr;
    }
}

const solution = new Solution()
solution.assign([19, 15, 16, 7, 17, 6, 13, 2, 7, 6, 3, 5, 8, 16],14)

// node Rearrangearraysuchthatevenpositionedaregreaterthanodd.js