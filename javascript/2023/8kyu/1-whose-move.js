// Simple Fun #261: Whose Move  |  PUZZLES
// https://www.codewars.com/kata/59126992f9f87fd31600009b/solutions/javascript

function whoseMove(lastPlayer, win) {
   if (lastPlayer === "black" && win === false) {
    return "white"
  } else if (lastPlayer === "black" && win === true) {
    return "black"
  } else if (lastPlayer === "white" && win === true) {
    return "white"
  } else if (lastPlayer === "white" && win === false) {
    return 'black'
  }
}

console.log(whoseMove("black",false)) // "white"

console.log(whoseMove("white",true)) // "white"

console.log(whoseMove("white",false)) // "black"
