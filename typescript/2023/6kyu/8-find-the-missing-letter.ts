// Find the missing letter
// https://www.codewars.com/kata/5839edaa6754d6fec10000a2

function findMissingLetter(array:string[]):string | undefined {
    for (let i = 0; i <= array.length; i++ ) {
     if (array[i].charCodeAt(0) + 1 !== array[i + 1].charCodeAt(0)) {
     return String.fromCharCode(array[i].charCodeAt(0) + 1)
    }
  }
}

// ❤️ function findMissingLetter(array:string[]):string {
//     return String.fromCharCode(1 + array.map(x => x.charCodeAt(0)).reduce((x, y) => y > x+1 ? x : y));
// }  

console.log(findMissingLetter(['a','b','c','d','f'])) //  'e'
console.log(findMissingLetter(['O','Q','R','S'])) //  'P'
