// Expressions Matter   |   ALGORITHMS   FUNDAMENTALS
// https://www.codewars.com/kata/5ae62fcf252e66d44d00008e

export function expressionsMatter(a: number, b: number, c: number): number {
    const one =  a * (b + c);
    console.log(one)
    const two = a * b * c;
    console.log(two)
    const three = (a + b) * c;
    console.log(three)
    const four = a + b + c;
    console.log(four )
   return Math.max(one, two, three, four);
 }

console.log(expressionsMatter(2, 1, 2))// 6
console.log(expressionsMatter(2, 1, 1))// 4
console.log(expressionsMatter(1, 1, 1))// 3
console.log(expressionsMatter(1, 2, 3))// 9
console.log(expressionsMatter(1, 3, 1))// 5 
console.log(expressionsMatter(2, 2, 2))// 8
console.log(expressionsMatter(5, 1, 3))// 20
console.log(expressionsMatter(3, 5, 7))// 105
console.log(expressionsMatter(5, 6, 1))// 35
console.log(expressionsMatter(1, 6, 1))// 8
console.log(expressionsMatter(2, 6, 1))// 14
console.log(expressionsMatter(6, 7, 1))// 48
console.log(expressionsMatter(2, 10, 3))// 60
console.log(expressionsMatter(1, 8, 3))// 27
console.log(expressionsMatter(9, 7, 2))// 126
console.log(expressionsMatter(1, 1, 10))// 20
console.log(expressionsMatter(9, 1, 1))// 18
console.log(expressionsMatter(10, 5, 6))// 300
console.log(expressionsMatter(1, 10, 1))// 12


