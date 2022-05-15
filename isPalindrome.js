function isPalindrome(s){
  let j=s.length-1
  
  for (let i = 0; i <s.length; i++) {
    
    if (s[i] === s[j]) {
      j--
      continue;
    } else {
      return false;
    }
  }
    return true
}




var shortestPalindrome = function(s) {
    const reverseString = s.split('').reverse().join('');
    const length = s.length;
    let temp1
  let temp2
  let temp3
    for (let i = 0; i < length; i++) {
        temp1 = s.slice(0, length - i)
      temp2 = reverseString.slice(i)
        if (temp1 === temp2 ) {
          temp3 = reverseString.slice(0, i)
            return `${temp3}${s}`;
        }
    }
    
    return '';
};

console.log(shortestPalindrome('aabba'))