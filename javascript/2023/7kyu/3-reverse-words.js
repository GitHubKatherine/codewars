// Reverse words
// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

// function reverseWords(str) {
//   const words = str.split(' ')
//   const preResult = words.map((word) => {
//     const chars = word.split('')
//     let reversedChars = ''
//     const lastIdx = chars.length - 1
//     for (let i = lastIdx; i >= 0; i--) {
//       reversedChars += chars[i]
//     }

//     return reversedChars

//   })
//   return preResult.join(' ')
// }

// function reverseWords(str) {
//   const words = str.split(' ')
//   const preResult = words.map((word) => {
//     const chars = word.split('')
//     let reversedChars = '' // ehT
//     for (let i = 0; i < chars.length; i++) {
//       reversedChars = chars[i] + reversedChars
//     }

//     return reversedChars
//   })
//   return preResult.join(' ')
// }


// function reverseWords(str) {
//   const words = str.split(' ')
//   const preResult = words.map((word) => {
//     const chars = word.split('')
//     const reversedChars = chars.reduce((acc, char) => {
//       return char + acc
//     }, '')

//     return reversedChars
//   })
//   return preResult.join(' ')
// }

/**
 * @param str {string}
 * @returns {string}
 */
function reverseWords(str) {
  const words = str.split(' ')
  const preResult = words.map((word) => {
    const chars = word.split('')
    const reversedChars = chars.reduceRight((acc, char) => {
      return acc + char
    }, '')

    return reversedChars
  })
  return preResult.join(' ')
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.')) // 'ehT kciuq nworb xof spmuj revo eht yzal .god'
console.log(reverseWords('apple')) // 'elppa'
console.log(reverseWords('a b c d')) // 'a b c d'
console.log(reverseWords('double  spaced  words')) // 'elbuod  decaps  sdrow'
