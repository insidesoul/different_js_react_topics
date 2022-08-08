// ABSTARCT js/react
//------------------
// Closures(замыкания) in JS
// 1. Функции возвращают новые функции.
// 2. Возвращаемые функции помнят контекст, где были созданы.
//------------------

//  function createGreeting() {
//     const message = 'hello';
//
//     function greeting(str) {
//         console.log(message, str);
//     }
//
//     return greeting;
// }
//
// const helloWorld = createGreeting();
// helloWorld('world');
//
// helloWorld('John');

//-------------------

// function addByX(num) {
//     return function (x) {
//         return num + x;
//     };
// }
//
// const addByTwo = addByX(2);
// const addByFive = addByX(5);
//
// console.log(addByTwo(3)) //5
// console.log(addByTwo(6)) //8
//
// console.log(addByFive(6)) //11
// console.log(addByFive(2)) //7

//--------------------

function once(fn) {
    let hasBeenCalled = false;
    let cachedResult;

    return function(...args) {
        if(hasBeenCalled) return cachedResult;

        hasBeenCalled = true;
        cachedResult = fn(...args);

        return cachedResult;
    }
}

const addByTwoOnce = once(num => num + 2);

console.log(addByTwoOnce(2)); //4
console.log(addByTwoOnce(5)); //4
console.log(addByTwoOnce(7)); //4