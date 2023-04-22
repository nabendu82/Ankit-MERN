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
function varFn(){
    if(true){
        var num1 = 10;
        console.log("Inside if var " + num1);
    }
    
    console.log("Outside if var " + num1);
}

varFn()
console.log("Outside function var " + num1);


// if(true){
//     let num2 = 20;
//     console.log("Inside if let " + num2);
// }

// console.log("Outside if let " + num2);
