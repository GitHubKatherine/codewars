// ✨To square(root) or not to square(root)  |  MATHEMATICS   ARRAYS   ALGORITHMS
// https://www.codewars.com/kata/57f6ad55cca6e045d2000627

export function squareOrSquareRoot(array:number[]) : number[] {
    return array.map(n => Number.isInteger(Math.sqrt(n)) ? Math.sqrt(n) : n ** 2);
  }

console.log(squareOrSquareRoot([ 4, 3, 9, 7, 2, 1 ])) // [ 2, 9, 3, 49, 4, 1 ]
console.log(squareOrSquareRoot([ 100, 101, 5, 5, 1, 1 ])) // [ 10, 10201, 25, 25, 1, 1 ]
console.log(squareOrSquareRoot([ 1, 2, 3, 4, 5, 6 ])) // [ 1, 4, 9, 2, 25, 36 ]
