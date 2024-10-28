var canConstruct = function(ransomNote, magazine) {
  let obj = {}
    for(let i=0; i<magazine.length; i++) {
      if(obj[magazine[i]]) {
        obj[magazine[i]]++;
      }
      else {
        obj[magazine[i]]= 1;
      }
    }
    for(let i=0; i<ransomNote.length; i++) {
      if(obj[ransomNote[i]]=== undefined || obj[ransomNote[i]]===0) {
        return false;
      }
      else {
        obj[ransomNote[i]]--
      }
    }
    return true;
};

// node ./top150interview/ransom-note.js