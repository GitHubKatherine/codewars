// Highest and Lowest:  FUNDAMENTALS | STRINGS
// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(numbers) {
  let n = [...numbers]
  let nA = []
  for (let i = 0; i < n.length; i++) {
    let idx = n[i]
    const nI = [n[i - 1], idx].join('')
    if (idx !== ' ' && idx !== '-' && n[i - 1] !== ' ' && n[i - 1] !== '-') {
      const tn = [n[i - 1], idx].join('')
      nA.push(Number(tn))
    } else if (idx !== ' ' && n[i - 1] === '-') {
      nA.push(Number(nI))
    } else if (idx !== ' ' && idx !== '-') {
      nA.push(Number(idx))
    }
  }

  return `${Math.max(...nA)} ${Math.min(...nA)}`
}

console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4')) // return "42 -9"
console.log(highAndLow('1 2 3')) // return "3 1"
console.log(highAndLow('1 2 3 4 5')) // return "5 1"
console.log(highAndLow('1 2 -3 4 5')) // return "5 -3"
console.log(highAndLow('1 9 3 4 -5')) // return "9 -5"

console.log(
  highAndLow(
    '66 -1139 -2433 433 -2123 -189 -1705 -1431 -806 -162 -1420 609 393 -1267 -1919 273 -1856 451 -1335 -1579 -1238'
  )
) // return '609 -2433'
