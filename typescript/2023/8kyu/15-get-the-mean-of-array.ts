// ✨ Get the mean of an array   |   ARRAYS   ALGORITHMS
// https://www.codewars.com/kata/563e320cee5dddcf77000158

function getAverage(marks:number[]){
    //TODO : calculate the downwar rounded average of the marks array
    return Math.floor(marks.reduce((acc, curr) => acc + curr, 0) / marks.length);
}


console.log(getAverage([2,2,2,2])) //2
console.log(getAverage([1,2,3,4,5,])) //3
console.log(getAverage([1,1,1,1,1,1,1,2])) //1
