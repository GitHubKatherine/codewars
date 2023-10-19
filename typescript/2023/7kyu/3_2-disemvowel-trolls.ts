// Disemvowel Trolls
// https://www.codewars.com/kata/52fba66badcd10859f00097e/solutions/typescript

function isVowel(char: string): boolean {
  const vowels = [...'aeiou']
  return vowels.includes(char.toLowerCase())
}

class Kata {
  static disemvowel(str: string): string {
    return str.split('').filter((char) => !isVowel(char)).join("")
  }
}

console.log(Kata.disemvowel('This website is for losers LOL!')) // "Ths wbst s fr lsrs LL!")
