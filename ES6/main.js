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
console.log(mergedObj)

//Array Destructuring
const rgb = [255, 200, 0];
// const r = rgb[0]
// const g = rgb[1]
// const b = rgb[2]

const [r, g, b] = rgb;
console.log(r, g, b);

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
console.log(firstname, lastname, country)
  