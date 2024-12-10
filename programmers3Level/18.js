function solution(stones, k) {
  const deque = [];
  let answer = Infinity;

  let index =0;

  for (let i = 0; i < stones.length; i++) {
    // deque의 범위를 벗어난 인덱스 제거
    if (deque.length > 0 && deque[index] < i - k + 1) {
      index++
    }

    // 현재 값보다 작은 값을 deque에서 제거
    while (deque.length > 0+index && stones[deque[deque.length - 1]] <= stones[i]) {
      deque.pop();
    }

    // 현재 인덱스를 deque에 추가
    deque.push(i);

    // 슬라이딩 윈도우가 완성되었을 때 최댓값 갱신
    if (i >= k - 1) {
      answer = Math.min(answer, stones[deque[index]]);
    }
  }

  return answer;
}

console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3))
// 55534455
// node ./programmers3Level/18.js

/*
function solution(stones, k) {
  let maxIndex = 0;
  for(let i=0; i<k; i++) {
    if(stones[i]>=stones[maxIndex]) {
      maxIndex = i
    }
  }
  let array = [];

  for(let i=0; i<=stones.length-k; i++) {
    if(maxIndex>=i && maxIndex<i+k) {
      array.push(stones[maxIndex])
    }
    else {
      maxIndex = i
      // 여기를 어떻게 할까?
      for(let j=i+1; j<i+k;j++){
        if(stones[j]>=stones[maxIndex]) {
          maxIndex = j
        }
      }
      array.push(stones[maxIndex])
    }
    if(stones[i+k]>=stones[maxIndex]) {
      maxIndex=i+k
    }
  }

  let answer = 200000001;
  for(let i=0; i<array.length; i++) {
    if(array[i]<answer) {
      answer = array[i]
    }
  }
  return answer;
}*/