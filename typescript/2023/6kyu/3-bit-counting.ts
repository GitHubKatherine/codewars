// Bit Counting |  BITS  ALGORITHMS
// https://www.codewars.com/kata/526571aae218b8ee490006f4

function countBits(n: number): number {
  return n === 0 ? 0 : n % 2 + countBits(Math.floor(n / 2))
}

console.log(countBits(0)) // 0
console.log(countBits(4)) // 1
console.log(countBits(7)) // 3
console.log(countBits(9)) // 2
console.log(countBits(10)) // 2
