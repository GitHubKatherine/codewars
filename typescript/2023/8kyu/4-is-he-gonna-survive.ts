// Is he gonna survive?  |  FUNDAMENTALS
// https://www.codewars.com/kata/59ca8246d751df55cc00014c/

export function hero(bullets: number, dragons: number): boolean {
  return bullets >= dragons * 2 ? true : false
}

console.log(hero(10, 5)) // true
console.log(hero(7, 4)) //false
console.log(hero(4, 5)) //false
console.log(hero(100, 40)) // true
console.log(hero(1500, 751)) //false
console.log(hero(0, 1)) //false
