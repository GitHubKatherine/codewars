// Detect Pangram  |  STRINGS   DATA STRUCTURES   FUNDAMENTALS
// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/typescript

export const isPangram = (phrase: string): boolean => {
  const abc: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const splitPhrase: string[] = phrase.split('')
  const letters =  splitPhrase.map(letter => abc.includes(letter.toLowerCase())? letter.toLowerCase() : false)
 return  [...new Set(letters)].filter(elem => elem !== false).length === 26 ? true : false
}

console.log(isPangram('Thee quick brown fox jumps over the lazy dog.')) //  true
console.log(isPangram("This is not a pangram.")) // false
