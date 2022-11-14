/*
ES 6 

   Es16 is advanced features of javascript which includes OOP.
 
 A) cosnt and let = 
        var is global variable. Any where you can access it. But const and let block scoped variable. const and let are not hoisted but var is hoisted
        if you write var it is attached to window object.
        var is funciton scopped andl let const block scopped
        var overwriteable  and let and const not overwriable
        var hoisted  and let const not hoisted
        const will not allow to redeclare varialbe
      const person = {
        name:"Lijo John"
      }
      person.name = "Thmomas"
      console.log(person)
 

  default parameter = The default parameter is a way to set default values for function parameters a value is no passed


   Template string or template literal.  = This is new feature in javscript which gives more control over string. Mulity line comments and embeded express


 Enhanded object literal: if key and values are same no need to write values. You can write keys alone access


 arrow functions :An arrow function expression is a syntactically compact alternative to a regular function expression, although without its own bindings to the this, arguments, super, or new.target keywords. Arrow function expressions are ill suited as methods, and they cannot be used as constructors. It will not bind this keyword

 Spread operator = The spread operator is a useful and quick syntax for adding items to arrays, combining arrays or objects, and spreading an array out into a function's arguments
 It allows to create iterable array/object/string expanded single arguments/elements

 Rest paramenter = collects all remaining elements into an array.

 array destruction = Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. That is, we can extract data from arrays and objects and assign them to variables. ... ES6 destucturing assignment makes it easier to extract this data.

 Object.entries  = Object. entries() method in JavaScript returns an array consisting of enumerable property [key, value] pairs of the object which are passed as the parameter whereas Object. values() method in JavaScript returns an array whose elements are the enumerable property values found on the object.


 Export and import : named import and named export, default import and default export
 
 Javascript =  javascript always refered as single thread, non-blocking and asychronoised programming language. 
     Synchronous means the execution happens in a single event. It will only execute the next event once the previous event is finished.

     In Asynchronous, the execution will never wait to complete, instead, it will execute all the events in a single go and multiple events will be in progress, hence making JavaScript non-blocking

      Single thread - Javascript is single langugate for code execution. Runtime is single thread. Thread pool exist in runtime enviromnet and run time will care of it 
      Runtime envt 

      Memory orgnization in javascript = We have heap region for random allocation and we call stack region where we manage functions
      Heap is the place (memory) where objects are stored when we define variables.
      call stack is purticular stack where keep track of all function currently beeing executed in runtime. This follows first come last  go follow

      Web api
              They are set of functionalities to perform addional task that are difficut to be perfromed by main thread. Think that those are capabilites provided by browser
              dome, ajax request, network request, settime out,
              runtime is sigle thread but alwyas have capabilty of exporting task to web apis which has capablity of creating multi thread.
    Event loop = Event loop is a entity that pulls out an event from event que and places in call stack whenver it is empty. Event que is special que that keep track of all the events that pending to get executed in javascript
    
    How it works
    setimieout. = function settime out function will call it call stack. Settimeout funciton requires additioanl thread it cannnot be performed in main thread. Thus  it will export to webapi which create additonal thread. after complting 5 seconds webapi releases event and places in event que. Event que will wait for its time. Once call stack is emply event que will push purticular event to call stack

    Promise =  A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending.

    Async await is syntatic surgar of promise. Async wait help javascript to perform asynchrounsed operation.

    Class = class is blueprint.
    
    Javascript execution context
      2 compoennte
      memory: where store all variables and functions. variable envi
      code component = also thread of executition. This place code executed

      Creation phase - creation phase javascript allocate space to variables and function
                      In this phase fuction will take as it is and varaibles will be undefeined
      Code execution phase =  
                     In this phase value will be assign to the varaiable
                global stack

JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.


setTimeout
setInterwell
setImmedaite = It will be called immediatly
clearTimeout
This keyword in javascript

1)Promises :
     A) Introduction
        -The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
        - It helps us to javascript to do asynchronse operation
        - Promises is to avoid call back hell
        - Two result 
            fullfilled and rejected
        - Three states of promises
            pending: initial state, neither fulfilled nor rejected.
            fulfilled: meaning that the operation was completed successfully.
            rejected: meaning that the operation failed.
        -   Eg:   
          let result = new Promise((resolve,reject)=>{
            let n = 1+4
            if(n==3){
              resolve("resolved")
            }else{
              reject("rejected")
            }
          })
          result.then(data => console.log(data)).catch(error=>console.log(error))
      B)Methods
        1)Promise.all()
            The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises. This returned promise will fulfill when all of the input's promises have fulfilled, or if the input iterable contains no promises. It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error.
            - to fullfill stand alone promises
            - one promise fail nothing will return

              success
                  const promise1 = Promise.resolve(3);
                  const promise2 = 42;
                  const promise3 = new Promise((resolve, reject) => {
                    setTimeout(resolve, 100, 'foo');
                  });

                  Promise.all([promise1, promise2, promise3]).then((values) => {
                    console.log(values);
                  // expected output: Array [3, 42, "foo"]
              reject
                  const promise1 = Promise.resolve(3);
                  const promise2 = 42;
                  const promise3 = new Promise((resolve, reject) => {
                    setTimeout(resolve, 100, 'foo');
                  });

                  Promise.all([promise1, promise2, promise3]).then((values) => {
                    console.log(values);
                  // expected output: nothing
            Synthax
                 - Promise.all([all promises])
            Parameter
                 Itarable array
            Return value
        2)Promise.allSettled()  
             - The Promise.allSettled() method returns a promise that fulfills after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.
             -In comparison, the Promise returned by Promise.all() may be more appropriate if the tasks are dependent on each other / if you'd like to immediately reject upon any of them rejecting.
             eg:
             const promise1 = Promise.resolve(3);
              const promise2 = 42;
              const promise3 = new Promise((resolve, reject) => {
                setTimeout(reject, 100, 'foo');
              });

              Promise.allSettled([promise1, promise2, promise3]).then((values) => {
                console.log(values);
              });
        3)Promise.any()
            Promise.any() takes an iterable of Promise objects. It returns a single promise that fulfills as soon as any of the promises in the iterable fulfills, with the value of the fulfilled promise. If no promises in the iterable fulfill (if all of the given promises are rejected), then the returned promise is rejected with an AggregateError, a new subclass of Error that groups together individual errors.
              It will reutn first resolved promises
                const promise1 = new Promise((resolve, reject) => {
                  setTimeout(reject, 1000, 'I am from prmoise 1 ');
                });
                const promise2 = new Promise((resolve, reject) => {
                  setTimeout(resolve, 2000, 'I am from prmoise 2 ');
                });
                const promise3 = new Promise((resolve, reject) => {
                  setTimeout(resolve, 3000, 'I am from prmoise 3 ');
                });

                Promise.any([promise1, promise2, promise3]).then((values) => {
                  console.log(values);
                }).catch(error=>console.log(error));
              I am from prmoise 2 

        4)Promise.race()
            It will return first reject/resolve promises in array
              const promise1 = new Promise((resolve, reject) => {
                setTimeout(reject, 1000, 'I am from prmoise 1 ');
              });
              const promise2 = new Promise((resolve, reject) => {
                setTimeout(resolve, 2000, 'I am from prmoise 2 ');
              });
              const promise3 = new Promise((resolve, reject) => {
                setTimeout(resolve, 3000, 'I am from prmoise 3 ');
              });

              Promise.race([promise1, promise2, promise3]).then((values) => {
                console.log(values);
              }).catch(error=>console.log(error));
        5) Promise.catch()
          -The catch() method returns a Promise and deals with rejected cases only.
        6)Promise.reject()
          -The Promise.reject() method returns a Promise object that is rejected with a given reason.
          function resolved(result) {
            console.log('Resolved');
          }

          function rejected(result) {
            console.error(result);
          }

          Promise.reject(new Error('fail')).then(resolved, rejected);
          // expected output: Error: fail
        7)Promise.resolve()
          The Promise.resolve() method "resolves" a given value to a Promise.
          const promise1 = Promise.resolve(123);
        8) Promise.then()
          The then() method returns a Promise. It takes up to two arguments: callback functions for the success and failure cases of the Promise.
        9)easiest way to ignore promise errors
          The easiest and safest way to ignore promise errors is void that error. This approach is ESLint friendly too.
          await promise.catch((e) => void e);


    C)Promise chaining
        The process of executing a sequence of asynchronous tasks one after another using promises is known as Promise chaining. Let's take an example of promise chaining for calculating the final result,
            new Promise(function (resolve, reject) {
              setTimeout(() => resolve(1), 1000);
            })
              .then(function (result) {
                console.log(result); // 1
                return result * 2;
              })
              .then(function (result) {
                console.log(result); // 2
                return result * 3;
              })
              .then(function (result) {
                console.log(result); // 6
                return result * 4;
              });
        In the above handlers, the result is passed to the chain of .then() handlers with the below work flow,

        The initial promise resolves in 1 second,
        After that .then handler is called by logging the result(1) and then return a promise with the value of result * 2.
        After that the value passed to the next .then handler by logging the result(2) and return a promise with result * 3.
        Finally the value passed to the last .then handler by logging the result(6) and return a promise with result * 4.
    D)Promise rules
        A promise must follow a specific set of rules,
        A promise is an object that supplies a standard-compliant .then() method
        A pending promise may transition into either fulfilled or rejected state
        A fulfilled or rejected promise is settled and it must not transition into any other state.
        Once a promise is settled, the value must not change.
    E)Error handling
       
2) ES 6 Features
      A)Below are the list of some new features of ES6,
          Support for constants or immutable variables
          Block-scope support for variables, constants and functions
          Arrow functions
          Default parameters
          Rest and Spread Parameters
          Template Literals
          Multi-line Strings
          Destructuring Assignment
          Enhanced Object Literals
          Promises
          Classes
          Modules
      B) ES6 is the sixth edition of the javascript language and it was released in June 2015. It was initially known as ECMAScript 6 (ES6) and later renamed to ECMAScript 2015. Almost all the modern browsers support ES6 but for the old browsers there are many transpilers, like Babel.js etc.

      C) Below are the list of different ways to deal with Asynchronous code.

          Callbacks
          Promises
          Async/await
          Third-party libraries such as async.js,bluebird etc
3)Asyn await
   An async function is a function declared with the async keyword which enables asynchronous, promise-based behavior to be written in a cleaner style by avoiding promise chains. These functions can contain zero or more await expressions.
      Let's take a below async function example,
              async function logger() {
              let data = await fetch("http://someapi.com/users"); // pause until fetch returns
              console.log(data);
              }
              logger();

    */
