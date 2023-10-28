
// Temporal Dead zone is a time since when this let variable was hoisted till it gets initialized some value
let a = 10;
console.log(a);
var b = 100;

// In case of Let and const they are also allocating memory but they are  storing in a seperate memory space and we cannot access them before we have putin some values


// b is attached to window object
// let and const wont be attched to window object as they are stored in a seperate memory space


let c;
c=10;
console.log(c);

// but in case of const

//const d; // d is supoosed to declare over here
// d=10;
// console.log(d)

const g = 100;
g =100;
console.log(g);  //typo error