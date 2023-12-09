// Create Phone Number  |   ARRAYS   STRINGS   REGULAR EXPRESSIONS   ALGORITHMS
// https://www.codewars.com/kata/525f50e3b73515a6db000b83/typescript

export function createPhoneNumber(numbers: number[]): string {
  return numbers.reduce((acc, num) => {
    return acc.replace("x", String(num)) // (123) 456-7890
  }, "(xxx) xxx-xxxx")
}

// export function createPhoneNumber(numbers: number[]): string {
//   const firstThreeIdx = numbers.slice(0, 3).join('')
//   const addHyphen = numbers.slice(3).join('').split('')
//   addHyphen.splice(3, 0, '-')
//   return `(${firstThreeIdx}) ${addHyphen.join('')}`
// }

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // "(123) 456-7890"
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) ) // "(111) 111-1111"
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ) // "(123) 456-7890"
