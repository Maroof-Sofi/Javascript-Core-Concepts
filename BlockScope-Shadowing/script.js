
// Block is also called as compound statement
// we group multiple elements together and use it at a plcae where javascript expects only one statement

// Block variales are stored inside sepearte memory than global. They are stored in a block that is the reason let and const are block scoped

  var a = 100;  // this is being shadowed 
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b)
    console.log(c)

}
console.log(a);
console.log(a);
console.log(b);
console.log(c);

// let a= 20;
// {
    //var a=20;  // ILLEGAL SHADOWING
    //we cannot go out of scope(its a function scope) cant shadow let using var 
//   function x(){
    // var a =20;
//   }
// }

Block scope also follows lexical scope
const d = 20;
{   
    const d =100;
    {
        const d = 200;
    }
    console.log(d);
    
}



// let a = 200;
// {
//     let a =10;
//     console.log(a)
// }
// console.log(a)

// const c = 300;
// {
//     const c = 30;
//     console.log(c)
// }
// console.log(c)

