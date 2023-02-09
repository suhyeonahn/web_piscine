import fetch from 'node-fetch';

const MAX = 100;
const MIN = 1;
const n = [];

for (let i = 0; i < 5; i++)
    n.push(Math.floor(Math.random() * (MAX - MIN + 1) + MIN));

function fetchPost(count) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${n[count]}`, {
            method: 'GET',
        })
        .then(resonse => resonse.json())
        .catch(e => console.error(e));
}

function fetchComments(count) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${n[count]}/comments`, {
        method: 'GET',
    })
    .then(resonse => resonse.json())
    .catch(e => console.error(e));
}

function postLog(content, n) {
    console.log(`POST [${n}]`)
    console.log("Title: " + content.title);
    console.log(content.body + "\n");
}

function commentsLog(content) {
    console.log("User name: " + content.name);
    console.log("Email: " + content.email);
    console.log(content.body + "\n");
}

async function asyncCall() {
    for (let i = 0; i < n.length; i++) {
        let post = await fetchPost(i);
        postLog(post, i + 1);
        let comments = await fetchComments(i);
        comments.forEach(commentsLog);
    }
}
asyncCall();