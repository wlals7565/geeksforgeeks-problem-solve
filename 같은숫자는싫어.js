function solution(arr)
{
    var answer = [];
    let current = -1;
    for(let i=0 ;i<arr.length; i++){
      if(current != arr[i]){
        answer.push(arr[i])
        current = arr[i];
      }
    }
    
    return answer;
}

console.log(solution([4,4,4,3,3]))
// node 같은숫자는싫어.js