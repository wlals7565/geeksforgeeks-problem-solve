class Solution {
  longestKSubstr(s, k) {
      let map = new Map()
      let maxLength=0;
      for(let left=0, right=0; right<s.length;) {
        console.log(left, right, maxLength);
        if(map.size<=k) {
          map.set(s[right],(map.get(s[right])||0)+1)
          if(k==map.size) {
            maxLength=maxLength <right-left+1 ? right-left+1: maxLength;
          }
          right++;
        }
        if(map.size>k) {
          const size = map.get(s[left])
          if(size===1) {
            map.delete(s[left])
          }
          else {
            map.set(s[left], size-1)
          }
          left++;
        }
      }
      if(!maxLength){
        return -1
      }
      else return maxLength
  }
}

const solution = new Solution()
console.log(solution.longestKSubstr("aabacbebebe", 3));


// node ./string/LongestKuniquecharacterssubstring.js