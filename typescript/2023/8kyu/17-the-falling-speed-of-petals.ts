// The falling speed of petals
// https://www.codewars.com/kata/5a0be7ea8ba914fc9c00006b

export function sakuraFall(v: number): number {
    return v <= 0 ? 0 : (80 *5) / v
  }

console.log(sakuraFall(5)) //  80 
console.log(sakuraFall(10)) //  40
console.log(sakuraFall(200)) //  2
console.log(sakuraFall(-1)) //  0
console.log(sakuraFall(0)) //  0
