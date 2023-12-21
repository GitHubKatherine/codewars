// For Twins: 2. Math operations  |  MATHEMATICS   ALGORITHMS
// https://www.codewars.com/kata/59c287b16bddd291c700009a

export const iceBrickVolume = (radius: number, bottleLength: number, rimLength: number): number => {
    return (bottleLength - rimLength) * 2 * radius ** 2
  }

console.log(iceBrickVolume(1, 10, 2)) // 16
console.log(iceBrickVolume(5, 30, 7)) // 1150
