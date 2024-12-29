
function countVowels(str) {
 
  let vowelCount = 0;


  str = str.toLowerCase();

 
  for (let i = 0; i < str.length; i++) {
    if ('aeiou'.includes(str[i])) {
      vowelCount++;
    }
  }


  return vowelCount;
}

console .log(countVowels ("Ayush"));// outputs 2
