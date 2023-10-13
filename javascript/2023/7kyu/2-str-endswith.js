// String ends with?
// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/solutions/javascript?filter=all&sort=newest&invalids=false

function solution(str, ending){
  const length = ending.length
  return length === 0 ? true : str.split('').slice(-length).join("") === ending
}

console.log(solution('abcde', 'cde')) //true
console.log(solution('abcde', 'abc')) // false
console.log(solution('samurai', 'ai')) // true
console.log(solution('abc', '')) // true

/**
 * 💡 .endWith()
 *
 *   - It's method of "String"
 *   - Returns true if a string ends with a specified string
 *   - It's "case sensitive"
 */
