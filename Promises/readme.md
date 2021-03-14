## Promises
Promises is a way through which we can deal with asynchronous operations in JavaScript. As we know that callback functions were initially used to handle asynchronous operations. However, callbacks functions were limited in terms of functionality and often led to confusing code, so, promises were introduced to deal with these problems.

### What is a Promise?
A promise in JavaScript is similar to a promises we do in real life. When we make a promise, it is a guarantee that in future, we are going to do something. A promise has two possible outcomes: it will be kept when the time comes, or it will not. Similarly, in JavaScript, when we define a promise, either it will be resolved when the time comes, or it will get rejected. According to MDN, “the Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.”

A promise has three states:
1. Pending: It is the initial state.
2. Fulfilled: It indicates that the promised operation was successful.
3. Rejected: It indicates that the promised operation was unsuccessful.

When new Promise is created, the function passed into it runs automatically. It contains the producing code which produces the result. Its arguments resolve and reject. 

See the code for reference
> Function inside then is ran as - resolve()

> Function inside catch is ran as - reject()

Promises are the ideal choice for asynchronous programming. Promises can handle multiple asynchronous operations easily and are better at error handling as compared to callbacks and events.

### Benefits of Promises:-
* It improves the code readability
* It is better in the handling of asynchronous operations
* It has a better flow of control definition in asynchronous logic
* It is better in error handling
