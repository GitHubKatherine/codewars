// ✨Stop gninnipS My sdroW!   |   STRINGS   ALGORITHMS
// https://www.codewars.com/kata/5264d2b162488dc400000001/typescript

export function spinWords(words: string): string {
  return words.split(' ').map(word => word.length > 4 ? word.split('').reverse().join('') : word).join(' ')
}


console.log(spinWords( "Hey fellow warriors")) //  "Hey wollef sroirraw" 
console.log(spinWords( "This is a test")) //  "This is a test" 
console.log(spinWords( "This is another test")) //  "This is rehtona test"
