// console.log("Hello JavaScript");

//Variables
// var firstName = 'Nabendu';
// var age = 40;
// var rating = 5.5;
// var isDeveloper = true;

// const firstAge = 8;
// firstAge = 10;

// console.log(firstName);
// console.log(age);
// console.log(rating);
// console.log(isDeveloper);

//Datatypes - String, Numbers, Boolean, null, undefined
// const firstName = 'Nabendu';
// const age = 40;
// const rating = 5.5;
// const isDeveloper = true;
// const x = null;
// let y;

// console.log(typeof firstName);
// console.log(typeof age);
// console.log(typeof rating);
// console.log(typeof isDeveloper);
// console.log(typeof x);
// console.log(typeof y);

//Difference between var and let
// function varFn(){
//     if(true){
//         var num1 = 10;
//         console.log("Inside if var " + num1);
//     }
    
//     console.log("Outside if var " + num1);
// }

// varFn()
// console.log("Outside function var " + num1);


// if(true){
//     let num2 = 20;
//     console.log("Inside if let " + num2);
// }

// console.log("Outside if let " + num2);

//String Concatenation
// const name = 'Nabendu';
// const age = 40;

//Old way
// console.log('My name is ' + name + ' and i am ' + age + ' year\'s old.');

//New way
// console.log(`My name is ${name} and i am ${age} year's old.`);

//String Methods
// const str = 'Hello JavaScript';

// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.startsWith('Hell'));
// console.log(str.startsWith('Well'));
// console.log(str.split(' '));
// console.log(str.endsWith('ipt'));
// console.log(str.endsWith('well'));
// console.log(str.substring(0, 7));
// console.log(str.includes('Java'));
// console.log(str.includes('Cobol'));

//Array
// const lang = ['JavaScript', 'Java', 'C++', 'Golang', 'Kotlin', 5, true];
// console.log(lang[2]);

// lang.pop();
// lang.pop();
// console.log(lang);

// lang.push('Pascal');
// lang.unshift('Flutter');
// console.log(lang);

// lang.shift();
// console.log(lang);

//Array methods
// console.log(Array.isArray(lang));
// console.log(Array.isArray('JavaScript'));
// console.log(lang.includes('Java'));
// console.log(lang.includes('Cobol'));
// console.log(lang.indexOf('Golang'));
// console.log(lang.indexOf('Cobol'));
// console.log(lang.join());
// console.log(lang.join(''));
// console.log(lang.join('-'));

//Objects
// const person = {
//     firstName: 'Nabendu',
//     'last Name': 'Biswas',
//     age: 40,
//     isDeveloper: true,
//     hobbies: ['coding', 'teaching', 'youtubing'],
//     address: {
//         street: "Victor Plains",
//         suite: "Suite 879",
//         city: "Wisokyburgh",
//         zipcode: "90566-7771",
//         geo: {
//             "lat": "-43.9509",
//             "lng": "-34.4618"
//         }
//     }
// }

// console.log(person.firstName);
// console.log(person['last Name']);
// console.log(person.hobbies[1]);
// console.log(person.address.zipcode);
// console.log(person.address.geo.lng);

// console.log(Object.keys(person));
// console.log(Object.values(person));

//Loops
//Traditional for loop
// for(let i=0; i<=10; i++){
//     console.log(`Loop Number - ${i}`)
// }

//While loop
// let i=0;
// while(i<=10){
//     console.log(`Loop Number - ${i}`)
//     i++
// }

//do-while loop
// let i=0;
// do {
//     console.log(`Loop Number - ${i}`)
//     i+=11; //i = i+ 11
// }while(i<=10);

//Reverse for loop
// for(let i=10; i>0; i--){
//     console.log(`Loop Number - ${i}`)
// }

//Arrays of object
const lang = [
    {id: 1, name: 'Pascal', year: 1970},
    {id: 2, name: 'C', year: 1972},
    {id: 3, name: 'C++', year: 1985},
    {id: 4, name: 'Java', year: 1994},
    {id: 5, name: 'JavaScript', year: 1995},
    {id: 6, name: 'Kotlin', year: 2011}
];

//Traditional for loop
// for(let i=0; i<lang.length; i++){
//     console.log(lang[i].id)
// }

//for..of loop
// for(let l of lang){
//     console.log(l.name)
// }

//forEach loop
// lang.forEach(item => console.log(item.year));

//Conditionals
//if statement
// const a = 10
// if(a > 5){
//     console.log('a is greater then 5')
// }

// const x = '10';
// if(x == 10){//10 == 10
//     console.log('x is 10');
// }

//if-else statement
// const y = '20';
// if(y === 20){
//     console.log('y is 20')
// } else {
//     console.log('y is string 20')
// }

//if-else if-else statement
// const z = 79;
// if(z>100){
//     console.log('z is greater then 100')
// } else if(z>80){
//     console.log('z is greater then 80')
// } else if(z>60){
//     console.log('z is greater then 60')
// } else if(z>40){
//     console.log('z is greater then 40')
// } else {
//     console.log('z is lesser then 40')
// }

//OR and AND operators
// const x = 20;
// const y = 30;

// if(x === 20 || y === 40){
//     console.log('Any one of the statement is true');
// }

// if(x === 20 && y === 30){
//     console.log('Both of the statement are true');
// }

//Ternary operators
// const z = 10;
// let color;
// if(z > 10){
//     color = 'red'
// } else {
//     color = 'blue'
// }

// console.log(color);

// const color2 = z > 9 ? 'red' : 'blue';
// console.log(color2)

//Switch Statement
// const color = 'blue';

// switch(color){
//     case 'red':
//         console.log('Color is red');
//         break;
//     case 'green':
//         console.log('Color is green');
//         break;
//     case 'blue':
//     case 'yellow':
//         console.log('Color is blue or yellow');
//         break;
//     default:
//         console.log('No color was matched');
// }

//Functions

//Method #1 - Function decleration
function addNums(num1, num2){
    console.log(num1 + num2);
}

addNums(30, 20);

//Method #2 - Function expressions
const multiNums = function(num1, num2){
    return num1 * num2;
}

console.log(multiNums(30, 20))

//Method #3 - Arrow Function
const modNums = (num1, num2) => {
    return num1 % num2;
}

console.log(modNums(30, 20))

//Method #4 - Condensed Arrow Function
const divNums = num1 =>  num1 / 2;

console.log(divNums(30))
