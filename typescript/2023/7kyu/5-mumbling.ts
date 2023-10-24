// Mumbling |  FUNDAMENTALS   STRINGS   PUZZLES
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/typescript

export function accum(s: string): string {
  const letters = s.split('')
  const mumbling: string[] = []
  for (let i = 0; i < letters.length; i++) {
    let abc = `${letters[i].toLocaleUpperCase()}`
    for (let j = 1; j <= i; j++) {
      abc += letters[i].toLowerCase()
    }
    mumbling.push(abc)
  }
  return mumbling.join('-')
}

console.log(accum("ZpglnRxqenU")) //"Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
console.log(accum("NyffsGeyylB")) // "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
console.log(accum("MjtkuBovqrU")) // "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"
console.log(accum("EvidjUnokmM")) // "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm"
console.log(accum("HbideVbxncC")) // "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc"
