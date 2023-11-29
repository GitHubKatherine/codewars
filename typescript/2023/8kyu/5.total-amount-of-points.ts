/* Total amount of points   |   FUNDAMENTALS  ARRAYS  STRINGS
https://www.codewars.com/kata/5bb904724c47249b10000131

Points are awarded for each match as follows:
  • if x > y: 3 points (win)
  • if x < y: 0 points (loss)
  • if x = y: 1 point (tie) */

export function points(games: string[]): number {
  return games.reduce((acc, game) => {
    const [x, y] = game.split(':')
    return x > y ? acc + 3 : x < y ? acc + 0 : acc + 1
  }, 0)
}

console.log(points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3'])) // 30)
console.log(points(['1:1', '2:2', '3:3', '4:4', '2:2', '3:3', '4:4', '3:3', '4:4', '4:4'])) // 10)
console.log(points(['0:1', '0:2', '0:3', '0:4', '1:2', '1:3', '1:4', '2:3', '2:4', '3:4'])) // 0)
console.log(points(['1:0', '2:0', '3:0', '4:0', '2:1', '1:3', '1:4', '2:3', '2:4', '3:4'])) // 15)
console.log(points(['1:0', '2:0', '3:0', '4:4', '2:2', '3:3', '1:4', '2:3', '2:4', '3:4'])) // 12)
