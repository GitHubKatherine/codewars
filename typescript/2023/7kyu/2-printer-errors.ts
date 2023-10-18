// Printer Errors  |  FUNDAMENTALS
// https://www.codewars.com/kata/56541980fa08ab47a0000040/typescript

export function printerError(s: string): string {
  let error: number = 0
  const NTOZ: string[] = ['n','o','p','q','r','s','t','u','v','w','x','y','z']
  const splitS: string[] = s.toLowerCase().split('')

  for (let i = 0; i < splitS.length; i++) {
    for (let j = 0; j < NTOZ.length; j++) {
      if (splitS[i] === NTOZ[j]) {
        error++
      }
    }
  }
  
  return `${error}/${s.length}`
}

console.log(printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz')) // "3/56"
console.log(printerError('kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz')) // "6/60"
console.log(printerError('kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyzuuuuu')) // "11/65"
