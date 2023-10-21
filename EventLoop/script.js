/**
 * THE CALLSTACK IS PRESENT INSIDE JS ENGINE AND JS CODE IS EXECUTED INSIDE THE CALL STACK
 * CALLSTACK IS INSIDE JS ENIGINE AND JS ENGINE IS INSIDE BROWSER
 * FOR ACCESSING THOSE SUPERPOWERS WHICH BROWER HAVE JS ENINGINE NEEDS TO FIND SOME WAY
 * SETTIMEOUT IS NOT A PART OF JS THESE ARE BASICALLY SUPERPOWERS OF BROWSER BROWSER GIVES US CCESS INSIDE THE JS CALLSTACK
 * FOR ACCEESSING THE DOM TREE THE BROWSER GIVES US ACCESS TO THE DOM TREE VIA DOM API TO MAKE CONNECTION WITH SERVER 
 * FOR TIMER WE HAVE TO DO WINDOW.SETTIMEOUT AS WINDOW IS A GLOBAL OBJECT AND SETTIMEOUT IS INSIDE THE GLOBAL OBJECT SO WE JUST ONLY WRITE SETTIMEOUT
  */

// EXAMPLE 1

console.log("start");
setTimeout(()=>{  //setTimeout calls the web API timeout and it gives access to the timer feature and it takes a callback function and some delay
    // when we pass this callback func to the setTimeout it basically registers a callback and starts the delay
  console.log("Timer");
},5000);
console.log("End");
// once we end with our code GEC will be popped out from the stack  meanwhile this happens our timer is still running once the timer is over This callback should be in the callstack from webApi Environment

// Once the timer ends this cb moves inside the callback Queue
// The job of EventLoop is to check this callbackQueue  and put the function which is inside the cb queue into the callstack

// Fetch API
console.log("start");
setTimeout(()=>{
  console.log("Timer");
}, 5000);
fetch("https://api.netflix.com")
.then(function cbf(){       //This callback function will register in the Web Api environment
    console.log("cb Netflix");
});
console.log("end");
// fetch will make an API call and it returns a promise and we have to pass a callback function which will be executed once the problem is resolved

// Just like cbq fetch functions will go inside MTQ
// Event loop is contineoulsy monitoring the callstack as MTQ has higher priority so fetch functions will be executed first the the callback functions inside setTimeout