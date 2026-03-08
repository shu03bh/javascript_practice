//setTimeOut - it is a web API that allows us to execute a function after a specified delay, it is used to handle asynchronous operations, it does not block the main thread, it allows the UI to remain responsive while waiting for the specified time to elapse

setTimeout(function(){
    console.log("Hello after 2 seconds");
}, 2000)

const sayShubh = function(){
    console.log("Hello Shubh");
}
setTimeout(sayShubh, 3000) //we can also pass the function as a reference without calling it, it will execute after the specified time

//how to stop settimeout

//clearTimeout - it is used to stop the execution of a function that was scheduled to be executed after a specified delay using setTimeout, it takes the timeout ID returned by setTimeout as an argument and cancels the scheduled execution of the function

