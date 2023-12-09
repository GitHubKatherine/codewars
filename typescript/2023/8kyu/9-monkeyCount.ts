// ✨ Count the Monkeys!   |    ARRAYS   FUNDAMENTALS   LISTS   ALGORITHMS
// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/typescript

export function monkeyCount(n: number) {
  let monkeys: number[] = []
  for (let i = 1; i <= n; i++) {
    monkeys.push(i)
  }
  return monkeys
}

console.log(monkeyCount(5)) // [1, 2, 3, 4, 5]
console.log(monkeyCount(3)) // [1, 2, 3]
console.log(monkeyCount(9)) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(monkeyCount(10)) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(monkeyCount(20)) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

// export function monkeyCount(n: number): number[] {
//   return Array.from({ length: n }, (_, i) => i + 1)
// }
