class Solution {
  getBeforMatrix = (arr, n, m) => {
    /*
    console.log(arr)
    for(let x of arr) {
      console.log(x);
      temp.push([...x])
    }
    console.log(temp)
    */
    // 풀이
    let temp = [];
    let total;
    let value;
    let upperSum;
    for (let y = 0; y < n; y++) {
      temp.push([]);
      value = 0;
      total = 0;
      for (let x = 0; x < m; x++) {
        if (y - 1 >= 0) {
          upperSum = arr[y - 1][x];
          value = arr[y][x] - upperSum - total;
          temp[y].push(value);
          total += value;
        } else {
          value = arr[y][x] - total;
          temp[y].push(value);
          total += value;
        }
      }
    }
    console.log(temp);
  };
  // O(n) 공간 복잡도
  getBeforMatrix2 = (arr, n, m) => {
    let i,j,h;
    for (let y = n-1 ; y >= 0; y--) {
      for (let x = m-1 ; x >= 0; x--) {
        y-1>=0 ? i = arr[y-1][x] : i=0;
        x-1>=0 ? j = arr[y][x-1] : j=0;
        x-1>=0 && y-1>=0 ? h = arr[y-1][x-1] : h=0;
        arr[y][x] += h -i - j
      }
    }
    console.log(arr);
  };
}
const solution = new Solution();
solution.getBeforMatrix2(
  [
    [1, 3, 6],
    [3, 7, 11],
    [6, 12, 20],
  ],
  3,
  3
);

// node ./array/ComputeBeforeMatrix.js
