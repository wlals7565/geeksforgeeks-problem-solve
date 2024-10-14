var romanToInt = function(s) {
    let loman = {
      'I': 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000
    }
    let total = 0;
    for(let i=0; i<s.length;i++) {
      total += loman[s[i]]
    }
    for(let i=1; i<s.length; i++) {
      if(loman[s[i-1]]*5 === loman[s[i]]|| loman[s[i-1]]*10 === loman[s[i]]){
        total -= loman[s[i-1]]*2
      }
    }
    return total;
};

// node ./top150interview/RomantoInteger.js