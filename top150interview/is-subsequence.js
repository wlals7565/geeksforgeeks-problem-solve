var isSubsequence = function(s, t) {

  let i, j
  for(i=0, j=0; i<t.length; i++) {
    if(t[i]==s[j]) {
      j++
    }
  }
  if(j==s.length) {
        return true;
      }
  return false;  
};