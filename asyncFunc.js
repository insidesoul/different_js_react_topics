// ABSTARCT js/react

//------------------
// Asynchronous functions(асинхронные функции) in JS
//------------------

// Попробуем переписать следующее на асинхронную функцию

// fetch('http://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then(console.log)
//     .catch(console.error);

//------------------

// возвращает promise
async function getPosts(url) {
    try {
        const response = await fetch(url);
        const posts = await response.json();
        return posts;
    } catch (error){
        console.warn(error)
        return error;
    }

}

getPosts('http://jsonplaceholder.typicode.com/posts').then(console.log)

// когда мы в js получаем ошибку, дальше код не идет
// поэтому надо обрабатывать ошибки при помощи try catch как написано выше

//-------------------

// вызывать можно по разному, например

// #1
// const getComments = async () => {}

// #2
// class Articles {
//     async methodName() {}
// }
// const article1 = new Articles();
// article1.methodName().then()
