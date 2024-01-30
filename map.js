const numbers = [4, 5, 6, 7, 8, 10];

function doubleIt(num) {
    return num * 2;
}

const result = numbers.map(doubleIt)

console.log(result);


// const doubled = [];

// for (const num of numbers) {
//     const double = num * 2;
//     doubled.push(double);
// }
// console.log(doubled);
