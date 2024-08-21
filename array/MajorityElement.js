class Solution {
  majorityElement(a, size) {
    let candidate;
    let count = 0;
    for (let i = 0; i < size; i++) {
      if (count == 0) {
        candidate = a[i];
        count++;
      } else if (candidate != a[i]) {
        count--;
      } else if (candidate == a[i]) {
        count++;
      }
    }
    if (!count) {
      return -1;
    } else {
      count = 0;
      for (let i = 0; i < size; i++) {
        if(a[i]==candidate){
          count++;
        }
      }
    }
    if(count>(size/2)){
      return candidate;
    }
    else {
      return -1;
    }
  }
}
// node MajorityElement.js
