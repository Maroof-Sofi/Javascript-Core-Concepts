// JS is an syncronous language but with Callback
// callback helps us to do async operations
// functions that are passed as an argument to another function is called as Callback function
setTimeout(()=>{
  console.log("timer")
},2000);
function x(y){
    console.log("x");
   y();
}
x(function y(){
    console.log("y");
});
// If JS doesnt have these First Class Functions or we can say callback functions we could not have been able to do async operatiins in JS

// The function which is passes a first paramater to setTimeout  is called callback function
// let count =0;
// document.getElementById("clickme")
// .addEventListener("click", function(){
//     // This function over here is callback function
//     console.log("You clicked", ++count);
// })
function attachEventListener(){

    let count =0;
    document.getElementById("clickme")
    .addEventListener("click", function(){
        // This function over here is callback function
        console.log("You clicked", ++count);
    });
}
// the calllback function here is forming the closure with its outer scope
attachEventListener();

/**
 Garbage Collection and RemoveEventListeners
  * Eventlisterns are heavy. whenever they are attached an eventlisternes it kinda form closure 
 Even when the call stack is empty but stilll above program dont free the memorys 
 
 */
