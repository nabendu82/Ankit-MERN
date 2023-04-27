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

const x = '10';
if(x == 10){//10 == 10
    console.log('x is 10');
}

//if-else statement
const y = '20';
if(y === 20){
    console.log('y is 20')
} else {
    console.log('y is string 20')
}

//if-else if-else statement
const z = 79;
if(z>100){
    console.log('z is greater then 100')
} else if(z>80){
    console.log('z is greater then 80')
} else if(z>60){
    console.log('z is greater then 60')
} else if(z>40){
    console.log('z is greater then 40')
} else {
    console.log('z is lesser then 40')
}