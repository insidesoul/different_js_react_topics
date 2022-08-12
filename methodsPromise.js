// ABSTARCT js/react

//------------------
// Methods promise(методы промисов) in JS
//------------------

async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    return await response.json();
}

async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    return await response.json();
}

async function getComments() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');

    return await response.json();
}

// метод ожидает исполнения всех промисов или отклонения любого из них
Promise.all([getPosts(), getUsers(), getComments()]).then(console.log);

// метод ожидает завершения всех полученных промисов (как исполнения так и отклонения)
// (тоже самое что и прошлый метод, но не отклоняет всю нашу историю, если один из промисов будет отклонен)
Promise.allSettled([getPosts(), getUsers(), getComments()]).then(console.log);

// метод ожидает исполнения или отклонения любого из полученных промисов
// возвращает промис, который будет исполнен или отклонен с результатом исполнения первого промиса
Promise.race([getPosts(), getUsers(), getComments()]).then(console.log);

// ещё есть Promise.resolve(value)
// возвращает промис, исполненный с результатом value

// и Promise.reject(value)
// Возвращает промис, отклоненный из-за reason