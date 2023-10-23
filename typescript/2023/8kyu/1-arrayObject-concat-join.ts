// Training JS #29: methods of arrayObject---concat() and join()
// https://www.codewars.com/kata/5731861d05d14d6f50000626/typescript

export function bigToSmall(arr: number[][]): string {
  let newArr: number[] = []
  for (let i = 0; i < arr.length; i++) {
    newArr = newArr.concat(arr[i])
  }
  return newArr.sort((a, b) => b - a).join('>')
}

console.log(bigToSmall([[1,2],[3,4],[5,6]])) // "6>5>4>3>2>1"
console.log(bigToSmall([[1,3,5],[2,4,6]])) // "6>5>4>3>2>1"
console.log(bigToSmall([[1,1],[1],[1,1]])) // "1>1>1>1>1"
