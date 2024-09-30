class Solution {
  lps(str) {
    let arr = [0];
    let prefix = 0;
    for (let i = 1; i < str.length; ) {
      if (str[i] === str[prefix]) {
        arr.push(++prefix);
        i++;
      } else {
        if (prefix !== 0) {
          prefix = arr[prefix - 1];
        } else {
          arr[i] = 0;
          i++;
        }
      }
    }
    return prefix;
  }
}

const solution = new Solution();
console.log(
  solution.lps(
    "babcbacbabcbaccbbbaacacbbabacbacbbcbbcabcababbcaacbaccbcbccaaccabccbacaaacabbabbaabababb"
  )
);

// ddbbbbcddd
// ddddbbbbcddddd
// dddccaddddcc
// node ./string/LongestPrefixSuffix.js
