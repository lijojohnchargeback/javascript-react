/**
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
 *
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
      www.lijo.com
         I canonot access any infrormation from google
         I cannot access any info from sub domain
         I cannot access any inform other port
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
   
          
 */
