// ✨ Stringy Strings   |   STRINGS   BINARY   ALGORITHMS
// https://www.codewars.com/kata/563b74ddd19a3ad462000054/typescript

export const stringy = (n: number): string => {
  return Array.from({ length: n }, (_, i) => (i + 1) / 2).join('')
}

console.log(stringy(3)) // '101'
console.log(stringy(5)) // '10101'
console.log(stringy(12)) // '101010101010'
console.log(stringy(26)) // '10101010101010101010101010'
console.log(stringy(28)) // '1010101010101010101010101010'
