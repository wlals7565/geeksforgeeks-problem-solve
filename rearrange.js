class Solution {
    //Function to rearrange  the array elements alternately.
    rearrange(arr, n){
        const mod = arr[0] + arr[n-1]
        for(let i=n-1, evenIndex=0; evenIndex<n; i--, evenIndex+=2) {
            let value = arr[i]%mod;
            arr[evenIndex] += value*mod;
        }
        for(let i = 0, oddIndex=1; oddIndex<n; i++, oddIndex+=2) {
            let value = arr[i]%mod;
            arr[oddIndex] += value*mod;
        }
        for(let i=0; i<n; i++) {
            arr[i]= Math.floor(arr[i]/mod);
        }
        return arr;
    }
}

const solution = new Solution();
let arr = [1,2,3,4,5,6];
const result = solution.rearrange(arr,6);
console.log(result);