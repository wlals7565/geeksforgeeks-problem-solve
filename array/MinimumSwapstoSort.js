// sorting 한 다음에 nlogn
// 바이너리 서치로 찾아보기 logn * n개 에 대하여 그리고 swap

class Solution
{
    //Function to find the minimum number of swaps required to sort the array.
	minSwaps(nums)
	{
		let temp = nums.slice();
    temp.sort((a,b)=>{return a-b});
    let count = 0;
    for(let i=0; i<nums.length;) {
      if(nums[i]==temp[i]){
        i++
      } else {
        const index = this.binarySearch(temp, 0, temp.length-1, nums[i]);
        this.swap(nums, i, index)
        count++;
      }
    }
    return count;
	}
  binarySearch(arr,start, end, key){
    if(start>end) {
      return -1;
    }
    let mid = Math.floor((start+end)/2)
    if(arr[mid]==key){
      return mid;
    }
    else if(arr[mid]<key) {
      return this.binarySearch(arr,mid+1,end,key)
    }
    else {
      return this.binarySearch(arr,start,mid-1,key)
    }
  }
  swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

const solution = new Solution()
console.log('answer:' + solution.minSwaps([4, 5, 10, 9, 8, 7, 6, 3, 1, 2]))


// node ./array/MinimumSwapstoSort.js