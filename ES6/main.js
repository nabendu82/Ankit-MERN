//const
const firstAge = 6;
// firstAge = 8;

const childAges = [5, 6, 8, 10];
// childAges = [5, 6, 8, 10, 12];
childAges.push(12);
// console.log(childAges);

const personObj = {name: 'Nabendu', skill: 'JS'}
personObj.skill = 'React';
personObj.profession = 'Trainer';

// console.log(personObj);

//Default parameters
const isEqual = (num1, num2=10) => {
    console.log(num1);
    console.log(num2);
    return num1 === num2;
}

// console.log(isEqual(10, 20));
// console.log(isEqual(10));

//Object Literals Extensions
const name = 'Nabendu';
const age = 40

let obj = {
    name,
    age
}

// console.log(obj);

//Dynamic Fields
let ageField = 'age'

const es6Obj = {
    name: "Shikha",
    [ageField]: 40
}

// console.log(es6Obj)

//Rest Opearators
let arrFunc = (...arr) => {
    console.log(arr)
}

arrFunc(55, 67, 12, 32, 45, 78, 12);

let restFunc = (a, b, c, ...n) => {
    console.log(a, b, c, n)
}

restFunc(55, 67, 12, 32, 45, 78, 12);

//Spread Operator
let a = [55, 67, 12, 32, 45, 78, 12];
console.log(Math.min(2, 3, 1));
console.log(Math.min(...a));
console.log(Math.max(...a));

//Copy by reference problem
let x = [67, 12, 32, 45];
let y = x;
y.push(55);
// console.log(x)
// console.log(y)

//Solution with spread
let c = [55, 67, 12, 32];
let d = [...c];
d.push(13);
// console.log(c);
// console.log(d);

//Spread operator to merge array
let x1 = [55, 67], x2 = [12, 32], x3 = [78, 99];
let d1 = [...x1, ...x2, ...x3];
// console.log(d1)

//Spread operator in Objects
let obj1 = { foo: 'bar', x: 42 }, obj2 = { foo: 'baz', y: 13}
let clonedObj = {...obj1}
console.log(clonedObj)
let mergedObj = {...obj1, ...obj2}
// console.log(mergedObj)

//Array Destructuring
const rgb = [255, 200, 0];
// const r = rgb[0]
// const g = rgb[1]
// const b = rgb[2]

const [r, g, b] = rgb;
// console.log(r, g, b);

//Object destructuring
const developer = {
    firstname: 'Nabendu',
    lastname: 'Biswas',
    country: 'India'
};

// const firstname = developer.firstname;
// const lastname = developer.lastname;
// const country = developer.country;

const {firstname, lastname, country} = developer;
// console.log(firstname, lastname, country)

//ES6 classes
class CreateRoom{
    constructor(name){
        this.room = `${name}'s room`
    }

    cleanRoom(soap){
        console.log(`Cleaning ${this.room} with ${soap}`)
    }
}

const nabRoom = new CreateRoom('Nabendu'); 
const shikhaRoom = new CreateRoom('Shikha'); 

// nabRoom.cleanRoom('Domex');
// shikhaRoom.cleanRoom('Lizol');

//Classical for loop
let languages = ['Java', 'JavaScript', 'Cobol'];
for(let i=0; i<languages.length; i++){
    // console.log(languages[i])
}
  
//forEach
// languages.forEach(lang => console.log(lang));

//Map use case
let numbers = [6, 8, 10];

let doubledNums = [];
for(let i=0; i<numbers.length; i++){
    doubledNums.push(numbers[i]*2)
}
// console.log(doubledNums)

//map
let doubled = numbers.map(number => number*2);
console.log(doubled)

//filter use case
let products = [
    { name: 'Samsung M21', category: 'smartphone'},
    { name: 'Samsung M31', category: 'smartphone'},
    { name: 'Macbook Air', category: 'laptop'},
    { name: 'Asus Zenbook', category: 'laptop'}
];

let filteredProducts = [];
for(let i=0; i<products.length; i++){
    if(products[i].category === 'smartphone'){
        filteredProducts.push(products[i])
    }
}
// console.log(filteredProducts)

//filter
let filtered = products.filter(item => item.category === 'laptop');
console.log(filtered)

//find use case
let users = [
    {name: 'Nabendu'},
    {name: 'Shikha'},
    {name: 'Hriday'},
    {name: 'Robin'},
    {name: 'Mousam'},
    {name: 'Hari'}
];

let user;
for(let i=0; i<users.length; i++){
    if(users[i].name === 'Shikha'){
        user = users[i];
        break;
    }
}
console.log(user)

//find
const coder = users.find(user => user.name === 'Mousam');
console.log(coder)

//some and every
let devices = [
    { name: 'Samsung M21', category: 'smartphone', ram: 4},
    { name: 'Samsung M31', category: 'smartphone', ram: 6},
    { name: 'Macbook Air', category: 'laptop', ram: 8},
    { name: 'Asus Zenbook', category: 'laptop', ram: 16}
];

//every
const allDevCanCode = devices.every(device => device.ram >= 6);
console.log(allDevCanCode)

//some
const someDevCanCode = devices.some(device => device.ram >= 6);
console.log(someDevCanCode)
  

  