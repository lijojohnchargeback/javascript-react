/*
 2A )
     Way of addingl langauge in javascript
     inline: <script><script>
     exteranl:<script scrc="ldfja.js"></script>
     <script> tag explain javascript file
     You can add more than one external files

 2B)
  Output
     JavaScript Display Possibilities
     JavaScript can "display" data in different ways:
       Writing into an HTML element, using innerHTML.
       Writing into the HTML output using document.write().
       Writing into an alert box, using window.alert().
       Writing into the browser console, using console.log()

2C)
  comments
    Single line comement = Single line comments start with //.
    Multi line comeents = Multi-line comments start with (/* and end with )
    JavaScript comments can be used to explain JavaScript code, and to make it more readable.

2D)
  variables 
    a varaible is an identifier  or  a name which is used to refer a value
            var x = 5;
            var y = 6;
            var z = x + y;
    - All JavaScript variables must be identified with unique names.
    -reserved keywords varaible = there many variable which are reserved
    fixed values are called literal and variable values are called variables
    declare variable = var x
    intilize variable = let x =1

2E)1) Data Types
 Primitiave =  
        1)String = A string (or a text string) is a series of characters like "John Doe".,
        2)Number: JavaScript has only one type of numbers. with or without decimals, 
        3)Boolean:Booleans can only have two values: true or false., 
        4)undefined: In JavaScript, a variable without a value, has the value undefined. The type is also undefined.It means a variable declared, but no value has been assigned a value.
        5)Null -Whereas, null in JavaScript is an assignment value. You can assign it to a variable.
        6)bigInt:Normal number accepton only 17 digit numbers. Big int will help us get more number using last n  or BigInt(), Number.MAX_SAFE_INTEGER
        type of unidentified is unidentified but null is an object
 Not-primiitive =
        1)Object:JavaScript objects are written with curly braces {}.Object properties are written as name:value pairs, separated by commas., Object is collection of property and methods
        2)array : JavaScript arrays are written with square brackets.Array items are separated by commas., The Array object lets you store multiple values in a single variable . These values are called elements
        3)Reg express - A regular expression is a sequence of characters that define a search pattern. Usually such patterns are used by string-searching algorithms for "find" or "find and replace" operations on strings
    2)The typeof Operator
      You can use the JavaScript typeof operator to find the type of a JavaScript variable.

      eg:typeof ""            // Returns "string"
        typeof "John"         // Returns "string"
        typeof "John Doe"     // Returns "string"

2F) Operator
  javascript operator
   Artithamatic operator, Comparison operator, logical operator, bitwise operator, assignment operator

Artithamatic operator
   +,-,%,*, ++,--
            let a = 5
            let b = 2
            console.log(a+b)//7
            console.log(a-b)//3
            console.log(a*b)//10
            console.log(a**6)//15625
            console.log(Math.pow(a,6))//15625
            console.log(a*a*a*a*a*a)//15625
            console.log(a%b)//1
            a++//5
            b--//2
            console.log(a)//6
            console.log(b)//1

Relations or comparison operator
  < > <= >= != === !===
            let a = 5
            let b = 2
            let c="5"
            let d= 
            console.log(a>b)//true
            console.log(a<b)//false
            console.log(a<=b)//falese
            console.log(a>=b)//true
            console.log(a==c)//true
            console.log(a===c)//false
            console.log(a!==c)//true
            
Logical operator
    &&,||,! 
            let a = 5
            let b = 2
            console.log(a>b && b>a)//false
            console.log(a>b || b>a)//true
Bitwise operator = it is not import
assignment oepration
   = += -= *= %= >> <<=
2G)
if statement, else ,else if
  if contiont true means that block code will executure ele if another execture else
2H)swith statement
  alternative of switch statemnt
          const day = "Tuesday"
        switch(day){
          case "Monday":
          console.log("Dafdaljl")
          break
          case "Tuesday":
          console.log("I amw oerkdlkj")
          break
          default:
          console.log("I damflal")
        }
2I)
for loop 
 for(initialze; condtion; increawtement or decremnt){
  block statement
 }

2J) 
break menas stop or exit
While loop
 while(condtion){
   body,
   increament
 }
 2K)
 do while loop
   condtion will run after running first time

Break and continue
 break=   it will stop 
 continue = skip value
2L) === and ==
   Abstract equality  ==
   Strict Eqauality  ===
    0 is false and 1 is true
     0 == false   // true
      0 === false  // false
      1 == "1"     // true
      1 === "1"    // false
      null == undefined // true
      null === undefined // false
      '0' == false // true
      '0' === false // false
      []==[] or []===[] //false, refer different objects in memory
      {}=={} or {}==={} //false, refer different objects in memory


*/
