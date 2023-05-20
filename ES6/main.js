//const
const firstAge = 6;
// firstAge = 8;

const childAges = [5, 6, 8, 10];
// childAges = [5, 6, 8, 10, 12];
childAges.push(12);
console.log(childAges);

const personObj = {name: 'Nabendu', skill: 'JS'}
personObj.skill = 'React';
personObj.profession = 'Trainer';

console.log(personObj);

//Default parameters
const isEqual = (num1, num2=10) => {
    console.log(num1);
    console.log(num2);
    return num1 === num2;
}

console.log(isEqual(10, 20));
console.log(isEqual(10));

//Object Literals Extensions
const name = 'Nabendu';
const age = 40

let obj = {
    name,
    age
}

console.log(obj);

//Dynamic Fields
let ageField = 'age'

const es6Obj = {
    name: "Shikha",
    [ageField]: 40
}

console.log(es6Obj)

//Rest Opearators
let arrFunc = (...arr) => {
    console.log(arr)
}

arrFunc(55, 67, 12, 32, 45, 78, 12);

let restFunc = (a, b, c, ...n) => {
    console.log(a, b, c, n)
}

restFunc(55, 67, 12, 32, 45, 78, 12);