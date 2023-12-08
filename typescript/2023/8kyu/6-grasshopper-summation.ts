// Grasshopper - Summation   |   FUNDAMENTALS   MATHEMATICS
// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/typescript

export const summation = (num: number) => {
  let result = 0
  for (let i = 1; i <= num; i++) {
    result = result + i
  }
  return result
}

console.log(summation(1)) // 1)
console.log(summation(8)) //36)
