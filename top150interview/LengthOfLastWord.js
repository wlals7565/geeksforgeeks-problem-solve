var lengthOfLastWord = function(s) {
  let count = 0;
    for(let i=s.length-1; i>=0 ;i--){
      if(s[i]!==" ") {
        count++
      }
      else if(s[i]===" " && count) {
        return count
      }
    }
};

// node ./top150interview/LengthOfLastWord.js