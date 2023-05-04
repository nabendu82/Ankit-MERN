//Grab Single Element
// const form = document.getElementById('my-form');
// console.log(form);

// console.log(document.querySelector('#my-form'));
// console.log(document.querySelector('.container'));
// console.log(document.querySelector('h1'));

//Grab multiple elements
// const nodeItems = document.querySelectorAll('.item');
// const colItems = document.getElementsByClassName('item');
// console.log(document.getElementsByTagName('li'));
// console.log([23, 45, 67]);

// nodeItems.forEach(item => console.log(item))
// for(let i=0; i<colItems.length; i++){
//     console.log(colItems[i])
// }

//DOM Manipulation
// const ul = document.querySelector('.items');
// // ul.remove();
// const btn = document.querySelector('.btn');
// btn.style.backgroundColor = 'blue';
// btn.style.textTransform = 'uppercase';
// btn.style.fontSize = '16px';

//Event Listener
// btn.addEventListener('click', e => {
//     e.preventDefault()
//     ul.firstElementChild.textContent = 'HTML';
//     ul.children[1].innerText = 'CSS';
//     ul.lastElementChild.innerHTML = '<h4>JS</h4><p>Language of the Web</p>';
// })

//Form Manipulation
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault()
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerText = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000)
    } else {
        const li = document.createElement('li');
        li.append(`${nameInput.value}: ${emailInput.value}`);
        userList.append(li);
        nameInput.value = '';
        emailInput.value = '';
    }

}