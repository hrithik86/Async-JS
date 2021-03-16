## Async Await
Promises provide us an easier way to deal with asynchronous programming. Async/await functions, which is a new addition with ES2017, that help us even more in allowing us to write completely synchronous-looking code while performing asynchronous tasks behind the scenes. 

The functionality we can achieve using async functions can also be achieved by combining promises with generators, but async functions give us what we need without any extra complex code. As the async/await keywords were introduced in the newer version of JavaScript (ES8). Some older browsers may not support the use of async/await.

### The Async Keyword:-
We use the async keyword with a function to represent that the function is asynchronous. The async function always returns a promise.

### The await keyword:-
The await keyword is used to wait for the asynchronous operation. This keyword is used inside the async function. 

### Benefits of using an async function:-
* Debugging using promises sometimes is very hard because the debugger will not step over the asynchronous code. But the Async/await makes this very easy because it is just like synchronous code to the compiler.
* The code looks very simple compared to the code using plain promises, with chaining and callback functions.
* Error handling is simpler in async functions.