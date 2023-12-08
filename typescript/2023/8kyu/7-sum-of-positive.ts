// Sum of positive   |   ARRAYS   FUNDAMENTALS
// https://www.codewars.com/kata/5715eaedb436cf5606000381/typescript


// export function positiveSum(arr: number[]): number {
//   if (arr.length === 0) {
//     return 0
//   }
//   return arr
//     .map((num) => (num > 0 ? num : 0))
//     .reduce((acc, curr) => {
//       return acc + curr
//     })
// }

// export function positiveSum(arr: number[]): number {
//   return arr.reduce((acc, curr) => (curr > 0 ? curr + acc : acc), 0)
// }

console.log(positiveSum([1, 2, 3, 4, 5])) // 15)
console.log(positiveSum([1, -2, 3, 4, 5])) // 13)
console.log(positiveSum([-1, -2, -3, -4, -5])) // 0)
console.log(positiveSum([-1, 2, 3, 4, -5])) // 9)
console.log(positiveSum([])) // 0)
