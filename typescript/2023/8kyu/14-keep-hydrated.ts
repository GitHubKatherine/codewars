// ✨ Keep Hydrated!   |   ALGORITHMS   MATHEMATICS   FUNDAMENTALS
// https://www.codewars.com/kata/582cb0224e56e068d800003c

export function litres(time: number): number {
    return Math.floor(Math.floor(time) * 0.5);
  }

console.log(litres(2)) // 1
console.log(litres(1.4)) // 0
console.log(litres(12.3)) // 6
console.log(litres(0.82)) // 0
console.log(litres(11.8)) //5
console.log(litres(1787)) // 893
console.log(litres(0)) //0
