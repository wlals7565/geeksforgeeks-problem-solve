function solution(A, B) {
  let count = 0;
  A.sort((a,b) => a-b)
  B.sort((a,b) => a-b)
  let aIndex = 0;
  for(let i=0; i<A.length; i++) {
    if(A[aIndex]<B[i]) {
      count++
      aIndex++
    }
  }
  return count
}

console.log(solution([5,1,3,7],[2,2,6,8]))

// node ./programmers3Level/9.js