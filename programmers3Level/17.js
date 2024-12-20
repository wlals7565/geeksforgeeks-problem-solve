const graphMap = new Map();
function solution(n, edge) {
  // 쉽게 접근 하면 dfs로 다 찾으면 된다.
  // 근데 20000번의 재귀 함수가 맞는가?
  // BFS를 이용한 일반 함수로 간다.

  // 최단거리 기록용 배열
  const array = new Array(n+1)

  // 각 정점으로부터 연결된 다른 정점들을 배열로 기록한다.
  for(let i=0; i<edge.length; i++) {
    if(!graphMap.has(edge[i][0])) {
      graphMap.set(edge[i][0], [edge[i][1]])
    }
    else {
      const graphArray = graphMap.get(edge[i][0])
      graphArray.push(edge[i][1])
    }
    if(!graphMap.has(edge[i][1])) {
      graphMap.set(edge[i][1], [edge[i][0]])
    }
    else {
      const graphArray = graphMap.get(edge[i][1])
      graphArray.push(edge[i][0])
    }
  }
  
  
  array[1] = 0;
  const queue = [1];
  const set = new Set();

  // BFS를 한다.
  while(set.size != n) {
    let front = queue.shift()
    let list = graphMap.get(front)
    for(let i=0; i<list?.length; i++) {
      if(!list?.length) {
        break;
      }
      // 이미 방문한 곳은 넘어가도 된다.
      if(set.has(list[i])) {
        continue;
      }
      // 방문하지 않은 곳은 방문한다고 생각하고 거리 계산한다. 
      array[list[i]] = array[front] + 1;
      // 방문한 곳을 셋에 넣는다.
      set.add(list[i]);
      // queue를 통해 BFS를 한다.
      queue.push(list[i])
    }
    // 이미 지나간 곳은 다시 지나갈 필요가 없다.
    set.add(front);
  }

  // 최단 거리 총 갯수 찾기/
  let max = 1;
  let count = 0;
  for(let i=0; i<array.length; i++) {
    if(array[i]>max) {
      max = array[i]
      count = 1;
    }
    else if(array[i] == max) {
      count++
    }
  }
  return count
}
console.log(solution(6,[[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]))

// node ./programmers3Level/17.js
// array[top] + 1 && array[list[i]] ? array[top] +1 > array[list[i]]? array[list[i]]: array[top] : 