/*
 function are subprogram which are used to compute a value or a perform a task

 1)
    Type of functions
    A) Function statement/ Function declaration 
     Function Declaration is the traditional way to define a function. It is somehow similar to the way we define a function in other programming languages. We start declaring using the keyword “function”. Then we write the function name and then parameters.
    The function declaration (function statement) defines a function with the specified parameters.
        function getFullName(firstName,lastName){
              return 
        }
    B) Function Expression
      create a functiona assign to variable is called function expression function expresstion is not hoisted
    let getFullName = function(firstName,lastName){
              return 
        }
    C)Annonymouse function
       A function which does carry name is known as annonmouse function. 
       Annomouse function used  to member- Other wise we need to a function in variable
       It is maily used as callback or immediately invoked function   
       Anonymous Function is a function that does not have any name associated with it. Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, we use only the function keyword without the function name.
            // function showMessage(){
            //   console.log("I am working")
            // }
            setTimeout(function (){
            console.log("I am working")
            },3000)
    D) Immediatly invoked functions
      Immediately-Invoked Function Expressions (IIFE), pronounced "iffy", are a common JavaScript pattern that executes a function instantly after it's defined. Developers primarily use this pattern to ensure variables are only accessible within the scope of the defined function.
        (function showMany(){
        console.log("I am good") 
        })()
    The primary reason to use an IIFE is to obtain data privacy because any variables declared within the IIFE cannot be accessed by the outside world. i.e, If you try to access variables with IIFE then it throws an error as below,

            (function () {
        var message = "IIFE";
        console.log(message);
        })();
        console.log(message); //Error: message is not defined
    E)Arrow functions/lamda functions
         An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.

        There are differences between arrow functions and traditional functions, as well as some limitations:

        Arrow functions don't have their own bindings to this, arguments or super, and should not be used as methods.
        Arrow functions don't have access to the new.target keyword.
        Arrow functions aren't suitable for call, apply and bind methods, which generally rely on establishing a scope.
        Arrow functions cannot be used as constructors.
        Arrow functions cannot use yield, within its body.
        
        - we can write in single line if we retun one value
        - one parameter we can remove parater
        - no parater, multiple paramter should have bracket
        - if we return single value you can remove retun keyword and curly bracket
        let books = ()=> console.log("this is my book")
    F)First class functions
    In Javascript, functions are first class objects. First-class functions means when functions in that language are treated like any other variable. So that you can pass to another function, return function etc
        -a function assign to a variable
          let greetings = ()=>{
            return "Hello"
          }
        -Passed as an argument
        let SayHelloToPerson = (greeting,person){
            return greeting()+ " " + person
        }
        -Return a function
        const greetingMaker = (person)=>{
            return (greeting)=>{
                return person + " "+ greeting
            }
        }


    G)First order functions
            First-order function is a function that doesn’t accept another function as an argument and doesn’t return a function as its return value.
        const firstOrder = () => console.log("I am a first order function!");

    H)Higher order 
        Higher-order function is a function that accepts another function as an argument or returns a function as a return value or both.
        //hirgher order function
            const x  = function(callback){
                callback()
            }
            //call back function
            const y = function(){
            console.log("I am from call back function")
            }
            x(y)
    I)Unary functions
      Unary function (i.e. monadic) is a function that accepts exactly one argument. It stands for a single argument accepted by a function.
      const unaryFunction = (a) => console.log(a + 10); // Add 10 to the given argument and display the value

    J)Curry functions
    It is a technique in functional programming, transformation of the function of multiple arguments into several nested functions of a single argument in sequence.
        Noncurried version//
        const add = (a, b, c)=>{
            return a+ b + c
        }
        console.log(add(2, 3, 5)) // 10

        Curried version//
        const addCurry =(a) => {
            return (b)=>{
                return (c)=>{
                    return a+b+c
                }
            }
        }
        console.log(addCurry(2)(3)(5)) // 10
        Currying in Javascript may be a little b
    K)Pure functions
       Pure function are function that accept an input and return a value without modifying outside its score(side effects)
        -predictable and no side effects
        = side effects meas it will not modify any varaible
        //Impure
        let numberArray = [];
        const impureAddNumber = (number) => numberArray.push(number);
        //Pure
        const pureAddNumber = (number) => (argNumberArray) =>
        argNumberArray.concat([number]);
    L) Call back functions
        A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
    M) build in function  = alert() valuefoR, console.log(),  console.table()
        console.time()
    N) Generator function
    O) Timer function
      1) setTimeout
         The setTimeout() method is used to call a function or evaluate an expression after a specified number of milliseconds. For example, let's log a message after 2 seconds using setTimeout method,

            setTimeout(function () {
              console.log("Good morning");
            }, 2000); 
      2) setInterwell
        The setInterval() method is used to call a function or evaluate an expression at specified intervals (in milliseconds). For example, let's log a message after 2 seconds using setInterval method,

        setInterval(function () {
          console.log("Good morning");
        }, 2000);
      3) clearTimeout
          The clearTimeout() function is used in javascript to clear the timeout which has been set by setTimeout()function before that. i.e, The return value of setTimeout() function is stored in a variable and it’s passed into the clearTimeout() function to clear the timer.
          For example, the below setTimeout method is used to display the message after 3 seconds. This timeout can be cleared by the clearTimeout() method.    
                let clear = setTimeout(()=>console.log(200000),2000)
                clearTimeout(clear)
                setTimeout(()=>console.log(300000),2000)
      4)clearInterwell
          The clearInterval() function is used in javascript to clear the interval which has been set by setInterval() function. i.e, The return value returned by setInterval() function is stored in a variable and it’s passed into the clearInterval() function to clear the interval.
      let m =setInterval(()=>console.log("done"),2000)
      clearInterval(m)


    
2) function with parameter
        function funciton_name(param1,param2...){
        bod of the function
        }
        parameter also known as argument
        function_name(params,parma2)
                EG)  function india (one,two){
                    console.log("i AM FINE" + " " + one + " " +  two)
                    }
                    india("runs")
    function parameter missing
        missing vlau are set to undefined
3) too many argument
        if function is called too many agrument it will build in object
        using argument object using index number
    argument object
        you access number of argument using arguments.

4) Return statement
        return statement it will any type of data
        it will stop execution
5) Rest operator
6) Default parameter
7) Global execution context
   Whenever javascript file is created global execution context is created. and this. window and window object is  part of glboal execution context. window object contains various properties and mehtods. Also whenver you declare a varaible that aslo become part of window object. Whenver function is invoked new execution context created. There are two things are in functoin execution context 1)this keyword and 2) arguments keyword
   Each execution context will have two phase. creating phase and exectuing phase
8)
    */
