// #1 Q

 const num = [1,1,2,2,3,4];
 const newSet = new Set(num);
 console.log(newSet);
//  {1,2,3,4}


// #2 Q
const uniS = [...new Set("referee")].join("");

console.log(uniS);
// ref

// #3 Q
const m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

const doKnw = m.set(true)
const donotKnow = m.set(false)

console.log(m);
//   0: {Array(3) => true}
//   1: {Array(3) => false}

// hasDuplicate
const hasDuplicate = arr => new Set(arr).size !== arr.length
console.log(hasDuplicate([1,3,2,1])); // true
console.log(hasDuplicate([1,5,-1,4])) ;// false


// Write a function called vowelCount which accepts a string and returns a map where the keys
//  are numbers and the values are the count of the vowels in the string.

// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }


vowelCount('awesome') 
vowelCount('Colt') 
function isVowel(char){
  return "aeiou".includes(char);
}

function vowelCount(str){
  const vowelMap = new Map();
  for(let char of str){
    let lowerCaseChar = char.toLowerCase()
    if(isVowel(lowerCaseChar)){
      if(vowelMap.has(lowerCaseChar)){
        vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
      } else {
        vowelMap.set(lowerCaseChar, 1);
      }
    }
  }
  return vowelMap;
}

console.log(vowelCount('awesome'));
console.log(vowelCount('Colt'));