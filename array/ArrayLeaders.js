class Solution {
  // 오른쪽에서부터 접근하면 된다.
  leaders(n, arr) {
    let temp = 0;
    let answer = []
    for (let i = n - 1; i > 0; i--) {
      if(arr[i]>=temp) {
        answer.push(arr[i]);
        temp = arr[i];
      }
    }
    this.reverse(answer, answer.length);
    return answer
  }
  reverse(arr,n) {
    let temp;
    for(let start=0, end=n-1; start<end; start++, end--) {
      temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
    }
  }
}
