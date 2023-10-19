
//  Scope means where we can access our functions and variables inside our code

// function a(){
//       console.log(b); //JS will try to find out the value of b inside its lcal memory space
// }
// var b = 10;
// a();

// lexical env :  local memory along with the lexical env of its parent

 function a(){
    var b =10;  //what is the scope of var b,2.is b inside the scope

    c();
    function c(){
        console.log(b);  // Even inisde the function which is inside the another function which is inside the GLOBAL EXECUTION CONTEXT
    }
 }
 a();
//  THIS WAY OF FINDING IS KNOWN AS SCOPE CHAIN
// SCOPE CAHIN IS NOTHING BUT THE CHAIN OF ALL THESE LEXICAL ENVIRONMENTS & THE PARENT REFRENCE
// console.log(a);
//  function a(){
//     var b = 10;
//     c();
//     function c (){
      
//     }
//  }
//  a();
//  console.log(b);
// //  console.log(a());