var longestCommonPrefix = function(strs) {
    strs.sort()
    let answer = "";
    for(let i=0; strs[0][i] && strs[strs.length-1][i]; i++){
      if(strs[0][i]===strs[strs.length-1][i]) {
        answer += strs[0][i]
      }
      else break;
    }
    return answer
};

// node ./top150interview/LongestPrefix.js