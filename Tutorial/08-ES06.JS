/*
ES 6 
   Es16 is advanced features of javascript which includes OOP.
 
 cosnt and let = var is global variable. Any where you can access it. But const and let block scoped variable. const and let are not hoisted but var is hoisted
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


    */
