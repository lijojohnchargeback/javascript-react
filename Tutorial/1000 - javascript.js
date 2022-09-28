/**
 * Whenever javascript run execution contest will be crated
 * Javascript global execution contest two things
 *  - varialbe enviroment also know as memory. It uses key value pair to store varialbe and function
 *  -Thread of execution also known as code.
 * Execution happen in two phase
 *    -memory creation phase
 *       in first phase javascript allocate memory to all varibles and functions
 *    -code execution phase
 *   var n = 2
 *   funciton  addbooks(num){
 *     var answ = num*num
 *    return answ
 * }
 *    var square 1 = addboks(2)
 *    var square2 = addbooks(3)
 *
 *  First phase
 *
 *    first phase javascript and scan eniter code and allocate memory to all varibles and functions
 *      var n = "undefined"
 *      var addbooks = whole function
 *       var square1= undefined
 *      var square2 = undefined
 *  second phase
 *    again scan entire code code execution phase
 *     var n = 2
 *     var square1 = funciton invocation-
 *                  when you invoce a function brand new code execution context created
 *                  Again it will have two component
 *                              memory and code phase
 *                 first pase(memory)
 *                             num:undefined
 *                             ans: undfiend
 *                 second phase(code exuction phaase)
 *                             numb:2
 *                             anw:2*2
 *                 n is parametor of function and 2 is argument of the  function
 *                return key word will ask return to major functin
 *                 as soon as return value this exuction context will be deleted and move to global exectuion context
 *                var sqaure2 = this again create code exection contentex to again
 *               callstack
 *               bottom line call is global execution context
 *               then function invocation
 *
 *        call stack maintain the order of execution of execution conetext
 *Temporal dead zene - if not hoised the memory will created unitil initilize value 
 *Before start executing memory is allocated to each variable and functions
 * arrow function = arrow function assign to variable it will throw error it throw error is not function
 *
 * window is global object which is created along with global execution context
 * anything which not in funciton will be attched to the global object
 * var a = 10
 * function addnumber(){
 * var x = 10
 * }
 * console.log(window.a)
 * console.log(a) if you do not window here then it assume that window
 *undefined
 *scope means access a varaible or function a code
 *
 * Set
 * The Set object lets you store unique values of any type, whether primitive values or object references.
 *
 * The optional chaining operator in JavaScript is convenient as it allows the developer to specify an object's property as being optional, and only return a value if the specified property is not "null" or "undefined" - otherwise return "undefined".
 * 
 * 
 *D) Polyfil
   A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.
  E)Event bubbling and event capturing 
    Event bubbling and event caputuring are event propagate in DOM tree
    a)Event bubbling  = When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
    b)There’s another phase of event processing called “capturing”. It is rarely used in real code, but sometimes can be useful.

                The standard DOM Events describes 3 phases of event propagation:

                Capturing phase – the event goes down to the element.
                Target phase – the event reached the target element.
                Bubbling phase – the event bubbles up from the element

         eg: master parent ,parent, child
         event bubbling = 
             1)child function will called, paretn function will called, master parent function will be called
             2)clicked on parent = parent function will be called, master paretn function will be called
         event capturing
            1) Master parent will be called , parent called, child called
            2)Master parent will be called parent called
 D)Event delegation
           Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object.
   in react by default event delegation implimented
   eg: One box 10 cards. Each card click alert will be poped.
       1) You can give each card onclick event
       2) You can give one parent function and will be called in each card after click
       It will improve application
  If you attach event to parent perfomance of the applicatoin is high. 

    Flow - event is document and move downward to target(button, table cell) and execute and then move upward.
    parent node will handle events. Not child node
    No need to attach react event listenter. It is already attached to it.16 veriosn document lever and but 17 onward it root level
E) Cross Origin Resour Sharing (Cors)     
    This is policy from browser you cannot share host from other host.
     For example 
      your website name is www.lijo.com
         I canonot access any infrormation from google
         I cannot access any info from sub domain such www.sandbox.lijo.com
         I cannot access any inform other port www.lijo.com:3000
         I cannot access differnt protocal (Http/and https) 
     after cors mechanis resouse shareing common all browser

     Phase
       - preflight call is made to veryfy weathe eilible or not
       - option call is made
       - then actual call
     Accept-controll-allow * means it allows all domain 
     Accept-controll-method - GET,PUT,POST
JSON
   - Javascript object notation  and data represtation formation to use cross use
   -commonly used in apis configus
   - it is light wegiht and easy to read and write
   -Most of the programe laguage has build in functionity to parse JSON
   -support = string, array, boolean, number,null,object
   -create .json file
   -json parse to convert json format to javascription json.parse()
   - json.stringify() to convert javascript obejct inot json
Proto-types
   -Prototype is mechanism in javascript by which javascript inherit properities and methods from another object.
   
DOM 
    -dom tree convert html elment in object which javascript understand
    -It is object oriented representation of the web pate
    - It stand for Document Object Model
    - Document means a file
    - Object means html tags in the file
    - Model - layout or structure of the Ojbect
    It will allow us create, update,delete,read content of the document
    It is a memory using tree structure
DOM Manupulation
Window object
Unary plus operator
Microtask
  Microtask is the javascript code which needs to be executed immediately after the currently executing task/microtask is completed. They are kind of blocking in nature. i.e, The main thread will be blocked until the microtask queue is empty. The main sources of microtasks are Promise.resolve, Promise.reject, MutationObservers, IntersectionObservers etc 
Observable -
   What are the differences between promises and observables
      Some of the major difference in a tabular form

      Promises	Observables
      Emits only a single value at a time	Emits multiple values over a period of time(stream of values ranging from 0 to multiple)
      Eager in nature; they are going to be called immediately	Lazy in nature; they require subscription to be invoked
      Promise is always asynchronous even though it resolved immediately	Observable can be either synchronous or asynchronous
      Doesn't provide any operators	Provides operators such as map, forEach, filter, reduce, retry, and retryWhen etc
      Cannot be canceled	Canceled by using unsubscribe() method
Heap
      Heap(Or memory heap) is the memory location where objects are stored when we define variables. i.e, This is the place where all the memory allocations and de-allocation take place. Both heap and call-stack are two containers of JS runtime. Whenever runtime comes across variables and function declarations in the code it stores them in the Heap.
        Use memory - allocate memory - remove memory

postMessage
   postMessage: cors issue in website. embeded opening box etc.
   
   Security
    Yes, postMessages can be considered very secure as long as the programmer/developer is careful about checking the origin and source of an arriving message. But if you try to send/receive a message without verifying its source will create cross-site scripting attacks.
   problem with wild card postMessage(*)
        The second argument of postMessage method specifies which origin is allowed to receive the message. If you use the wildcard “*” as an argument then any origin is allowed to receive the message. In this case, there is no way for the sender window to know if the target window is at the target origin when sending the message. If the target window has been navigated to another origin, the other origin would receive the data. Hence, this may lead to XSS vulnerabilities.
        targetWindow.postMessage(message, "*");
   Avoid receiving postMessage from attackers
        Since the listener listens for any message, an attacker can trick the application by sending a message from the attacker’s origin, which gives an impression that the receiver received the message from the actual sender’s window. You can avoid this issue by validating the origin of the message on the receiver's end using the “message.origin” attribute. For examples, let's check the sender's origin http://www.some-sender.com on receiver side www.some-receiver.com,

      //Listener on http://www.some-receiver.com/
      window.addEventListener("message", function(message){
          if(/^http://www\.some-sender\.com$/.test(message.origin)){
              console.log('You received the data from valid sender', message.data);
        }
      });
    Can I avoid using postMessages completely
        You cannot avoid using postMessages completely(or 100%). Even though your application doesn’t use postMessage considering the risks, a lot of third party scripts use postMessage to communicate with the third party service. So your application might be using postMessage without your knowledge.
    Is postMessages synchronous
      The postMessages are synchronous in IE8 browser but they are asynchronous in IE9 and all other modern browsers (i.e, IE9+, Firefox, Chrome, Safari).Due to this asynchronous behaviour, we use a callback mechanism when the postMessage is returned
Paradigm
    - Paradigm means ways or methods to write code in which solve different problems
      Imeperative = oldest and follow sequent commad
          if your friend visitg home details directions way of giving address 1-2-3
            1)procedure
                sequetial recipi
                reusable
            2)object oriented
                codes can be broken into classes
                clases will include related methods and properties
                also clases can inherit other classes
                It is based object
            3)Parellel
                Many argue that parellel programing not exist in javascript
                aftrer introduciton of web worker in browser and worker thread in pareller programming
                It is used cpu intensive worker we use worker thread

          Simple to read, impliment,scalability
          messy if complex

      Declarative = logic and cocepts, focus on result
        -feel good
        -
          will give address. and visitor will choice how to reach your own
             1)functional
                you can write any function without mutating global values
             2)logical
                It is not in javascript
             3)data driven
                Most of the database programming.



       
    JavaScript is a multi-paradigm language, supporting imperative/procedural programming, Object-Oriented Programming and functional programming. JavaScript supports Object-Oriented Programming with prototypical inheritance.
 */
