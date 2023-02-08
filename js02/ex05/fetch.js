const MAX = 100;
const MIN = 1;

const n = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'PATCH',
    body: JSON.stringify({
        id: n,
    }),
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
    },
})
   .then(resonse => resonse.json())
   .then(json => console.log(json));