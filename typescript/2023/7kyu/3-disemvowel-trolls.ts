// Disemvowel Trolls |  STRINGS   REGULAR EXPRESSIONS   FUNDAMENTALS
// https://www.codewars.com/kata/52fba66badcd10859f00097e/typescript

export class Kata {
  static disemvowel(str: string): string {
    const VOWELS: string[] = ['a', 'e', 'i', 'o', 'u']
    const strArr: string[] = str.split('')
    const newStr: string[] = strArr.map(str => VOWELS.includes(str.toLocaleLowerCase()) ? '' : str)
    return newStr.join('')
  }
}

console.log(Kata.disemvowel('This website is for losers LOL!')) // "Ths wbst s fr lsrs LL!"
