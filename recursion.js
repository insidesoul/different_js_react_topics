// ABSTARCT js/react

//------------------
// Recursion(рекурсия) in JS
// 1. Должно быть базове условие
//------------------

// let count = 0;
//
// function recurse() {
//     if(count === 5) return 'done';
//
//     count++;
//     recurse();
// }
//
// console.log(recurse());
// console.log('count =', count);

//------------------

// function pow(x, y) {
//     if(y === 0) return 1;
//
//     return x * pow(x, y-1)
// }

//------------------

function sumOfDigits(number) {
    if(number / 10 < 1) return 1
    console.log(number, 'look')
    return 1 + sumOfDigits(number/10)
}

console.log(sumOfDigits(100)) //3
console.log(sumOfDigits(9432)) //4