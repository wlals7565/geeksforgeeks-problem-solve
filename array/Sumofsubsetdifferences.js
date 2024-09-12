class Solution {
  sumDiff(S, n) {
      let left = 0;
      let right = n-1;
      let sum = 0;
      for(let i=0; i<n; i++){
        sum += -S[i]*((2**right)-1) + S[i]*((2**left)-1);
        right--;
        left++;
      }
      return sum;
  }
}