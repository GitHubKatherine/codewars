// Replace With Alphabet Position:  FUNDAMENTALS |  STRINGS
// https://www.codewars.com/kata/546f922b54af40e1e90001da

const letterPositions = 'abcdefghijklmnopqrstuvwxyz'.split('')

function alphabetPosition(str) {
  let newArr = []
  const letters = [...str.toLowerCase()]
  for (let l = 0; l < letters.length; l++) {
    let tl = letters[l]
    letterPositions.find((letter, id) => {
      if (letter !== '' && letter === tl) {
        newArr.push(id + 1)
      }
    })
  }
  return newArr.join(' ')
}

console.log(alphabetPosition('The narwhal bacons at midnight.'))
// "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"
