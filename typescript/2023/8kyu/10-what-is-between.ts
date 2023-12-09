// ✨ What is between?  |   FUNDAMENTALS   ALGORITHMS
// https://www.codewars.com/kata/55ecd718f46fba02e5000029/typescript


export function between(a: number, b: number): number[] {
  let arr: number[] = []
  for (let i = a; i <= b; i++) {
    arr.push(i)
  }
  return arr
}

console.log(between(1, 4)) // [1, 2, 3, 4]
console.log(between(-2, 2)) // [-2, -1, 0, 1, 2]


// 📌
// export function between(a: number, b: number): number[] {
//   return Array.from({length: b - a + 1}, (_, j) => j + a);
// }
