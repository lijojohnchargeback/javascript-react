/*
1) Debouncing
  limiting rate of function calls in event
   for example search input. instead of each key stroke you can give time after keyevents and will give suggestion
   debouncing will call if they key press events of both keys are different (3seconds)
  - resizing means only pause some limited then only make call
  - button click only after click stop
2) Throtling
    function will be called only after 300 mil seconds. Whatever type 300 mil second will ignored
   - only make function resizing after limited time(300)
   - throtling will be call will be made certain period of time. 
3) Polyfil
   A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.
4) Event bubbling and event capturing 
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
    Event bubbling is a type of event propagation where the event first triggers on the innermost target element, and then successively triggers on the ancestors (parents) of the target element in the same nesting hierarchy till it reaches the outermost DOM element.
         event capturing
    Event capturing is a type of event propagation where the event is first captured by the outermost element, and then successively triggers on the descendants (children) of the target element in the same nesting hierarchy till it reaches the innermost DOM element.
            1) Master parent will be called , parent called, child called
            2)Master parent will be called parent called
 5)Event delegation
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
6) Cross Origin Resour Sharing (Cors)     
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
7) JSON
   - Javascript object notation  and data represtation formation to use cross use
   -commonly used in apis configus
   - it is light wegiht and easy to read and write
   -Most of the programe laguage has build in functionity to parse JSON
   -support = string, array, boolean, number,null,object
   -create .json file
   -json parse to convert json format to javascription json.parse()
   - json.stringify() to convert javascript obejct inot json
8) Optional chaining
 The optional chaining operator (?.) accesses an object's property or calls a function. If the object is undefined or null, it returns undefined instead of throwing an error.
    .?
    let object = {
      person:{
        name:"lijo"
      }
    }
    just imagin there is no property like person. Then definitly javascript throw error. To avoid this breaking application we use option chaining.
    you
9)nullish coalescing operator (??)
  It is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. This can be contrasted with the logical OR (||) operator, which returns the right-hand side operand if the left operand is any falsy value, not only null or undefined.
  console.log(null ?? true); // true
  console.log(false ?? true); // false
  console.log(undefined ?? true); // true
  
    let n  = ()=>{
      return({
        name:"Lijo",
        ages:0
      })
    }
    let m = n().ages||400
    console.log(m) //400

    let c = n().ages??400
    console.log(c) //0

8) DOM 
    -dom tree convert html elment in object which javascript understand
    -It is object oriented representation of the web pate
    - It stand for Document Object Model
    - Document means a file
    - Object means html tags in the file
    - Model - layout or structure of the Ojbect
    It will allow us create, update,delete,read content of the document
    It is a memory using tree structure
9)Microtask
  Microtask is the javascript code which needs to be executed immediately after the currently executing task/microtask is completed. They are kind of blocking in nature. i.e, The main thread will be blocked until the microtask queue is empty. The main sources of microtasks are Promise.resolve, Promise.reject, MutationObservers, IntersectionObservers etc 
10)Observable -
   What are the differences between promises and observables
      Some of the major difference in a tabular form

      Promises	Observables
      Emits only a single value at a time	Emits multiple values over a period of time(stream of values ranging from 0 to multiple)
      Eager in nature; they are going to be called immediately	Lazy in nature; they require subscription to be invoked
      Promise is always asynchronous even though it resolved immediately	Observable can be either synchronous or asynchronous
      Doesn't provide any operators	Provides operators such as map, forEach, filter, reduce, retry, and retryWhen etc
      Cannot be canceled	Canceled by using unsubscribe() method
11)Heap
      Heap(Or memory heap) is the memory location where objects are stored when we define variables. i.e, This is the place where all the memory allocations and de-allocation take place. Both heap and call-stack are two containers of JS runtime. Whenever runtime comes across variables and function declarations in the code it stores them in the Heap.
        Use memory - allocate memory - remove memory
12)postMessage
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
12)Paradigm
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

13)decode or encode a URL in JavaScript
    encodeURI() function is used to encode an URL. This function requires a URL string as a parameter and return that encoded string. decodeURI() function is used to decode an URL. This function requires an encoded URL string as parameter and return that decoded string.
    Note: If you want to encode characters such as / ? : @ & = + $ # then you need to use encodeURIComponent().
    let uri = "employeeDetails?name=john&occupation=manager";
    let encoded_uri = encodeURI(uri);
    let decoded_uri = decodeURI(encoded_uri);
14)Memoization
    Memoization is a programming technique which attempts to increase a function’s performance by caching its previously computed results. Each time a memoized function is called, its parameters are used to index the cache. If the data is present, then it can be returned, without executing the entire function. Otherwise the function is executed and then the result is added to the cache. Let's take an example of adding function with memoization
15)Modules
   Modules refer to small units of independent, reusable code and also act as the foundation of many JavaScript design patterns. Most of the JavaScript modules export an object literal, a function, or a constructor
   Below are the list of benefits using modules in javascript ecosystem
    Maintainability
    Reusability
    Namespacing
16)Service worker
    A Service worker is basically a script (JavaScript file) that runs in the background, separate from a web page and provides features that don't need a web page or user interaction. Some of the major features of service workers are Rich offline experiences(offline first web application development), periodic background syncs, push notifications, intercept and handle network requests and programmatically managing a cache of responses.
    navigator.serviceWoker()
17)Strict mode
    Strict mode is useful to write "secure" JavaScript by notifying "bad syntax" into real errors. For example, it eliminates accidentally creating a global variable by throwing an error and also throws an error for assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object.
18)Null and undefined
    Undefined 
    The undefined property indicates that a variable has not been assigned a value, or declared but not initialized at all. The type of undefined value is undefined too.
        -It is not an assignment value where a variable has been declared but has not yet been assigned a value.
        -Type of undefined is undefined
        -The undefined value is a primitive value used when a variable has not been assigned a value.
        -Indicates absence of variable itself
        -Converted to NaN while performing primitive operations
    Null 
     - The value null represents the intentional absence of any object value. It is one of JavaScript's primitive values. The type of null value is object. You can empty the variable by setting the value to null.
        - Type of null is object	
        -The null value is a primitive value that represents the null, empty, or non-existent reference.	
        -Indicates the absence of a value for a variable	
        -Converted to zero (0) while performing primitive operations	

     var user = null;
      console.log(typeof user); //object
    It is an assignment value which indicates that variable points to no object.
19)preventDefault
    The preventDefault() method cancels the event if it is cancelable, meaning that the default action or behaviour that belongs to the event will not occur. For example, prevent form submission when clicking on submit button and prevent opening the page URL when clicking on hyperlink are some common use cases.
     stopPropagation
20)Treeshakable 
      Removal of dead code is known as treenshakable. It used remove all unused modlues. import and export 
      Tree shaking is a form of dead code elimination. It means that unused modules will not be included in the bundle during the build process and for that it relies on the static structure of ES2015 module syntax,( i.e. import and export). Initially this has been popularized by the ES2015 module bundler rollup.

      Tree Shaking can significantly reduce the code size in any application. i.e, The less code we send over the wire the more performant the application will be. For example, if we just want to create a “Hello World” Application using SPA frameworks then it will take around a few MBs, but by tree shaking it can bring down the size to just a few hundred KBs. Tree shaking is implemented in Rollup and Webpack bundlers.
21)Eval = 
      The eval() function evaluates JavaScript code represented as a string. The string can be a JavaScript expression, variable, statement, or sequence of statements.

      This should not use. Because of slowness and not safe
      No, it allows arbitrary code to be run which causes a security problem. As we know that the eval() function is used to run text as code. In most of the cases, it should not be necessary to use it.
22)Regular expression = 
       A regular expression is a sequence of characters that forms a search pattern. You can use this search pattern for searching data in a text. These can be used to perform all types of text search and text replace operations. Let's see the syntax format now,
23)Debugger
      1)The debugger statement invokes any available debugging functionality, such as setting a breakpoint. If no debugging functionality is available, this statement has no effect. For example, in the below function a debugger statement has been inserted. So execution is paused at the debugger statement just like a breakpoint in the script source.
      function getProfile() {
        // code goes here
        debugger;
        // code goes here
      }
      2)breakingpoints
        You can set breakpoints in the javascript code once the debugger statement is executed and the debugger window pops up. At each breakpoint, javascript will stop executing, and let you examine the JavaScript values. After examining values, you can resume the execution of code using the play button. 
24)Native object, Host object, user object
  Native objects are objects that are part of the JavaScript language defined by the ECMAScript specification. For example, String, Math, RegExp, Object, Function etc core objects defined in the ECMAScript spec. Host objects are objects provided by the browser or runtime environment (Node). For example, window, XmlHttpRequest, DOM nodes etc are considered as host objects. User objects are objects defined in the javascript code. For example, User objects created for profile information.
25)Event flow
    Event flow is the order in which event is received on the web page. When you click an element that is nested in various other elements, before your click actually reaches its destination, or target element, it must trigger the click event for each of its parent elements first, starting at the top with the global window object. There are two ways of event flow

    Top to Bottom(Event Capturing)
    Bottom to Top (Event Bubbling)
28)Os details
   console.log(navigator.platform);








DOM Manupulation
Window object
Unary plus operator
 * Set
 * The Set object lets you store unique values of any type, whether primitive values or object references.
 *
 *

-web worker
storage event and its event handler
server-sent events - react
service worker - react
promises - new promises ,
The double exclamation or negation(!!)
history in javascript
  window.history.back(), window.history.forward(

  )














*/
