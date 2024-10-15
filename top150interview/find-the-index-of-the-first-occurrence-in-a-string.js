var strStr = function(haystack, needle) {
    let answer = -1
    for(let i=0; i<=haystack.length-needle.length; i++){
      if(haystack[i]===needle[0] && haystack[i+needle.length-1]===needle[needle.length-1]) {
        for(let j=0 ; j<needle.length; j++) {
          if(haystack[i+j]===needle[j]) {
            answer = i
          }
          else {
            answer = -1
            break;
          }
        }
      }
      if(answer!== -1) {
        return asnwer
      }
    }
    return answer
};

// node ./top150interview/find-the-index-of-the-first-occurrence-in-a-string.js