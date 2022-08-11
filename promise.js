// ABSTARCT js/react

//------------------
// Promise(промисы) in JS
//------------------

// function akaFetch() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('hello from promise');
//         }, 2000);
//     });
// }
//
// akaFetch()
//     .then((response) => {
//         console.log(response);
//         return response + '!';
//     })
//     .then(console.log)
//     .catch(console.error)
//     .finally(() => {
//         console.error('operation complete');
//     });

//------------------

fetch('http://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => console.log(data))