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

createPost({ title: 'Async Basics', summary: 'This post contains the basics of Async'})
            .then(getPosts)
            .catch(err => document.body.innerHTML = `${err}`)