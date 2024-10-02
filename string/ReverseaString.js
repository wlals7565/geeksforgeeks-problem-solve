class Solution {

  reverseString(s) {
    let answer = ''
      for(let i=s.length-1; i>=0; i++){
        answer += s[i]
      }
      return answer;
  }
}

// node ./string/ReverseaString.js