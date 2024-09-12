class Solution
{
    //Function to find maximum sum subarray by removing at most k elements.
    // 맥시멈 미니멈이 아니라
    // 일단 최대 누적에서 배열 오른쪽으로 가면서 가장 작은 서브 어레이 찾으면서 
    // 빼면서 최대값 찾아야지
    maxSumWithK(a, n, k)
    {
      let temp = [];
      let sum = 0;
        for(let i=0; i<n; i++){
          sum += a[i];
          temp.push(sum);
        }
      let minimum = 0;
      let maximum = temp[k-1];
      for(let i=k, j=0; i<n; i++, j++) {
        if(minimum>temp[j]){
          minimum= temp[j]
        }
        if(maximum<temp[i]-minimum){
          maximum = temp[i]-minimum;
        }
      }
      return maximum;
    }
}

// node ./array/LargestSumSubarrayofSizeatleastK.js