// Highest and Lowest  |  FUNDAMENTALS  STRINGS
// https://www.codewars.com/kata/554b4ac871d6813a03000035

export class Kata {
  static highAndLow(numbers: string): string {
  const num:string[] = numbers.split(' ')
  const sortNum:string[] = num.sort((a,b) => Number(b) - Number(a))
  return `${sortNum[0]} ${sortNum[sortNum.length-1]}`
  }
}

console.log(Kata.highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")) // "42 -9"
