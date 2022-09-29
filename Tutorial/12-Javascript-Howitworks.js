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
 *
 */
