
// JS will skims through the whole program line by line and it allocates memory to all the variables and function

// Hoisting is a phenomena in JS  by which we can access these variables and functions even before we have initialize it

// Even before the code is start executing memory is allocated to all the variables and functions



// var x = 10;
// function getName(){
//     console.log("Hello Maroof");
 //  we will get an actual copy of a function
// }

// getName();
// console.log(x);


getName();
console.log(x);
console.log(getName);

var x = 10;
// function getName(){
//     console.log("Hello Maroof");
// }


 var getName = ()=>{
    console.log("Hello World");
 }
//  getName will behave like a Variable now