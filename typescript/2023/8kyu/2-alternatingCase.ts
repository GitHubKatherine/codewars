// altERnaTIng cAsE <=> ALTerNAtiNG CaSe   |   FUNDAMENTALS
// https://www.codewars.com/kata/56efc695740d30f963000557/typescript

export function toAlternatingCase(s: string): string {
  const splitS = s.split('')
  const checkTheCase = splitS.map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
  return checkTheCase.join('')
}

console.log(toAlternatingCase('hello world')) //"HELLO WORLD"
console.log(toAlternatingCase('HeLLo WoRLD')) //"hEllO wOrld"
console.log(toAlternatingCase('1a2b3c4d5e')) // "1A2B3C4D5E"
