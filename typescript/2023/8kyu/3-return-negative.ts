// Return Negative |  FUNDAMENTALS
// https://www.codewars.com/kata/55685cd7ad70877c23000102

export const makeNegative = (num: number): number => {
  return num > 0 ? Number('-' + num) : num
}

console.log(makeNegative(42)) // return -42
console.log(makeNegative(1)) // return -1
console.log(makeNegative(-5)) // return -5
console.log(makeNegative(0)) // return 0
