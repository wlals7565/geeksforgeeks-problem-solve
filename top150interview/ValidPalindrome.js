// 97 122 charCodeAt
var isPalindrome = function(s) {
    for(let start=0, end=s.length-1; start<end;) {
      while(s[start]&&(s[start].toLowerCase().charCodeAt()<97 || s[start].toLowerCase().charCodeAt()>122)) {
        start++
      }
      while(s[end]&&(s[end].toLowerCase().charCodeAt()<97 || s[end].toLowerCase().charCodeAt()>122)) {
        end--
      }
      if(s[start]?.toLowerCase()!==s[end]?.toLowerCase()) {
        return false;
      }
    start++;
    end--;
    }
  return true
};

console.log(isPalindrome("0P"))
// node ./top150interview/ValidPalindrome.js