# Async-JS
### Difference between synchronous and asynchronous programming:
In synchronous programming, one thing happens at a time. When we call a function that performs a long-running action, it returns a result when the action has finished. 
This stops the program for the time the action takes. In contrast, asynchronous programming allows multiple things to happen at the same time. 
When we start an action, the program continues to run. When the action finishes, the program is informed and gets the result.

In synchronous programming, where the request function returns only after it has done its work. To perform this task, we make the requests one after the other. Here the drawback is that the second request will be started only when the first has finished. Suppose the time taken by the first request is 12 seconds, and the time taken by the second request is 13 seconds, so the total time taken will be the sum of the two response times.

In asynchronous programming, the functions that perform a slow action takes an extra argument, a callback function. The action is started, and when it finishes, the callback function is called with the result.

### Conclusion:
Asynchronous code does not have to wait; the program can continue to run. The asynchronous programming makes it possible to express waiting for long-running actions without stopping the program during these actions. JavaScript usually implements this style of programming using callbacks.

Asynchronous programming is made easier by using promises, objects that represent actions that might complete in the future, and async functions, which allow us to write an asynchronous program as if it were synchronous.
