
function isPalindrome(str) {
 
  str = str.toLowerCase();

  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

 
  return str === reversedStr;
}
