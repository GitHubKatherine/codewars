// Playing with digits |  FUNDAMENTALS   MATHEMATICS
// https://www.codewars.com/kata/5552101f47fc5178b1000050/typescript

const dig_pow = (num: number, pow: number) => {
  let nArr: number[] = []
  let n = num.toString().split('')

  for (let i = 0; i < n.length; i++) {
    nArr.push(Math.pow(Number(n[i]), pow + i))
  }

  const sum = nArr.reduce((acc, curr) => acc + curr)

  return sum % num ? -1 : sum / num
}

console.log(dig_pow(89, 1)) // 1
console.log(dig_pow(92, 1)) // -1
console.log(dig_pow(114, 3)) // 9
console.log(dig_pow(46288, 3)) // 51
