class Solution {
  search(pat, txt) {
    let string = pat+txt;
    let prefix = 0;
    let array = [0]
    let patL = pat.length
    let stringL = string.length;
    for(let i=1; i<stringL;) {
      if(string[i]===string[prefix]) {
        array.push(++prefix);
        i++
        if(prefix>=patL){
          prefix =array[prefix-1];
        }
      }
      else {
        if(!prefix) {
          array.push(0);
          i++
        }
        else {
          prefix = array[prefix-1];
        }
      }
    }
    let answer = [];
    for(let i=patL*2-1; i<stringL; i++){
      if(array[i]===patL){
        answer.push(i-(patL-1)*2)
      }
    }
    return answer;
  }
}

const solution = new Solution();
console.log(solution.search(
  "ecec", "aececececececdececececbbececbbdececcececdcaaacbececececacaececbececececececececebeaeaeececeececbececececadacececbaececececbececceccaaebdececbeeececaaececdbacececeececececbaececeddececacbcececacbececececececececaebaececececececcaaececececececbddececaacdadeeececceaececcececececdececdececdbcebcececbaacececaececececececececcececdeececececececbacbececaececdeebabdececacbececececeececcececbcbdececdececececaececaececeececeabececececdeaececdcdececcbeadeaaaececaecececccececcececececdececeececdececececececccececccececabececadececeddececcaececdcececececeedaececaececbcdeececcbdcaececcececececdeaececeeececececececececececaeececececececececbddececbececececdbeececcbececbcbbdececeececececececdedbdcdbaaebececdececececececececdcececaececcececcbececdabaececbeebecececdcadececbbcdececbeececdcebeececececdbbcecececcebdbccaeaccacececececdecececececececddbaeececececaecececececdeececececececedececabcbecdebecececececececececccbeececcaececedbaabececaeabecaecececaececdececececececececccacabececececececececceececabaecec"));
// cxggbw
// n
//txt = "geeksforgeeks" | eeeeeeeek | aececececece
//pat = "geek" | eek | ce
// node ./string/SearchPattern.js
