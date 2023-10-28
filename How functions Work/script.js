var x = 1;

a();
b();
console.log(x);

function a(){
// execution context is limited to this fun it will again go through two phases
// memory will be allocated again to all the variables and function isnide this peice of code  
    var x = 10;
    console.log(x);
}

function b (){
    var x = 100;
    console.log(x);
}