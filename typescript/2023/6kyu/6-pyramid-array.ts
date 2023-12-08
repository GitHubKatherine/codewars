// ✨ Pyramid Array  |  ALGORITHMS
// https://www.codewars.com/kata/515f51d438015969f7000013

export function pyramid(n: number): Array<Array<Number>> {
  let arr: number[][] = []

  for (let i = 1; i <= n; i++) {
    let arrOne: number[] = []
    for (let j = 1; j <= i; j++) {
      arrOne.push(1)
    }
    arr.push(arrOne)
  }
  return arr
}

console.log(pyramid(0)) // []
console.log(pyramid(1)) // [[1]]
console.log(pyramid(2)) // [[1], [1, 1]]
console.log(pyramid(3)) // [[1], [1, 1], [1, 1, 1]]
