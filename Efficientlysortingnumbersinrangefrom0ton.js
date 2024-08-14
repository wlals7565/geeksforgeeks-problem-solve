// 내가 못 푼 다는 결론을 냈다.
class Solution{
  sort(arr, n)
  {
    let arrForCount = [];
    for(let i=0; i<n; i++){
      arrForCount[i] = 0;
    }
    let arrForSort = [];
    for(let i=0; i<n; i++){
      arrForCount[Math.floor(arr[i]/n)]++;
    }

    arr = arrForSort;
  }
};


//공간에 기억시키는 방식
// n의 배열이 많이 필요할 거다.
// 시작이다.
// node Efficientlysortingnumbersinrangefrom0ton.js