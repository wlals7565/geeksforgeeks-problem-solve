async function con(){
  console.log("hello");
}

async function concon() {
console.log("hello123");
con();
console.log("hello123");
}

concon();
//BFS문제를 어떻게든 DFS문제로 푸는 애가 있다? 푸슝파슝푸슝
//생전 고인의 개쩌는 문제해결을 보시겠습니다.
/*
function recur(x,y,n,cnt){
  if(cnt>=count || y<x){
    return
  }
  if(x==y){
    count = Math.min(cnt,count)
  }
  if(y%2==0){
    recur(x,y/2,n,cnt+1);
  }
  if(y%3==0){
    recur(x, y/3,n, cnt+1)
  }
  if((y-n)%2==0 || (y-n)%3==0|| (y-x)%n==0){
    recur(x,y-n,n,cnt+1)
  }
}

function solution(x, y, n) {
    recur(x,y,n,0)
    if(count==1000001){
      return -1;
    }
    return count;
}
*/
/*function solution(dirs) {
  let map = new Map();
  let count = 0;
  let arr = dirs.split("");
  let x = 0;
  let y = 0;
  let str = ""
  let temp;
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "U":
        if(y!=5){
        }
        break;
      case "D":
        if(y!=-5){
          y--;
        }
        break;
      case "R":
        if(x!=5){
          x++
        }
        break;
      case "L":
        if(x!=-5){
          x--
        }
        break;
    }
  }
}
*/
