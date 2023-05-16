//Async JS 
const posts = [
    { title: 'JS Basics', summary: 'This post contains the basics of JS'},
    { title: 'DOM Basics', summary: 'This post contains the basics of DOM'}
]

function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach(post => output += `<h3>${post.title}</h3><p>${post.summary}</p>`)
        document.body.innerHTML = output
    }, 1000)
}

//The Problem

// function createPost(post){
//     setTimeout(() => {
//         posts.push(post)
//     }, 2000)
// }

// getPosts()
// createPost({ title: 'Async Basics', summary: 'This post contains the basics of Async'})

//Callbacks
// function createPost(post, callback){
//     setTimeout(() => {
//         posts.push(post)
//         callback()
//     }, 2000)
// }

// createPost({ title: 'Async Basics', summary: 'This post contains the basics of Async'}, getPosts)

//Promises
function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)
            const num = 4;
            num > 4 ? resolve() : reject('Error: Something is wrong');
        }, 2000)
    })
}

//Promises - then..catch
// createPost({ title: 'Async Basics', summary: 'This post contains the basics of Async'})
//             .then(getPosts)
//             .catch(err => document.body.innerHTML = `${err}`)

//Promises - Async-Await
// async function init(){
//     try {
//         await createPost({ title: 'Async Basics', summary: 'This post contains the basics of Async'})
//         getPosts()
//     } catch (err) {
//         document.body.innerHTML = `${err}`
//     }
// }

// init()

//Async-await Fetch
// async function fetchPosts() {
//         const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const posts = await res.json();
//         let output = '';
//         posts.forEach(post => output += `<h3>${post.title}</h3><p>${post.body}</p>`)
//         document.body.innerHTML = output
// }

// fetchPosts()

//Async-await then..catch
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts => {
        let output = '';
        posts.forEach(post => output += `<h3>${post.title}</h3><p>${post.body}</p>`)
        document.body.innerHTML = output     
    })
    .catch(err => document.body.innerHTML = `${err}`)

  