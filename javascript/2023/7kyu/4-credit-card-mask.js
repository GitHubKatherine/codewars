// Credit Card Mask
// https://www.codewars.com/kata/5412509bd436bd33920011bc/typescript

function maskify(cc) {
  const arrMaskify = []
  const lastCC = cc.toString().split('').slice(-4)
  const leftCC = cc.toString().split('').slice(0, -4).length
  for (let i = 0; i < leftCC; i++) {
    arrMaskify.push('#')
  }
  return [...arrMaskify, ...lastCC].join('')
}

console.log(maskify('4556364607935616')) // '############5616'
console.log(maskify('1')) // '1'
console.log(maskify('11111')) // '#1111'
