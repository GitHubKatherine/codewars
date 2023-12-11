// BASIC: Making Six Toast   |   ALGORITHMS
// https://www.codewars.com/kata/5834fec22fb0ba7d080000e8

export function sixToast(num:number):number {
    return num === 6 ? 0 : num < 6 ? 6 - num : num - 6
  }

console.log(sixToast(15) ) // 9
console.log(sixToast(6) ) // 0
console.log(sixToast(3) ) // 3
