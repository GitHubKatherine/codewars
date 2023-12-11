// ✨ Short Long Short  |   ALGORITHMS   STRINGS
// https://www.codewars.com/kata/50654ddff44f800200000007/typescript

export function shortLongShort(a:string, b:string) {
    return a.length > b.length ? b + a + b : a + b + a
  }

console.log(shortLongShort('45', '1')) // '1451'
console.log(shortLongShort('13', '200')) // '1320013'
console.log(shortLongShort('Soon', 'Me')) // 'MeSoonMe'
console.log(shortLongShort('U', 'False')) // 'UFalseU'
