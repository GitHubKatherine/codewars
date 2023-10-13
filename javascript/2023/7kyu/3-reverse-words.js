// Reverse words
// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

function reverseWords(str) {
  const strSplit = str.split(' ')
  const chars = strSplit.map((char) => char.length > 1 ? char.split("").reverse().join("") : char )
  return [...chars].join(' ')
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.')) // 'ehT kciuq nworb xof spmuj revo eht yzal .god'
console.log(reverseWords('apple')) // 'elppa'
console.log(reverseWords('a b c d')) // 'a b c d'
console.log(reverseWords('double  spaced  words')) // 'elbuod  decaps  sdrow'
