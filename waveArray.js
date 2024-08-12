class Solution {
  convertToWave(n, arr)
  {
    let temp;
      for(let i=0; i<n-1; i+=2) {
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp
      }
    return arr;
  }
}

const solution = new Solution()
solution.convertToWave(6, [1,2,3,4,5,6])




// node waveArray.js