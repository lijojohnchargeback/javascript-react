/*
A) collection of data are called array

B) In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:
        JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
       The Array object is used to store multiple values in a single variable:
        Array indexes are zero-based: The first element in the array is 0, the second is 1, and so on.

C) Two ways can arrays
    a) Array literal

    const age = [2,3,,4,4,4,4]
    you can add using indx x[1] = "ram"

    b)Array constructor
       The Array() constructor is used to create Array objects.Two parameter required
      - elements
      - array length
  
    const array = new array("Manong", "Grape")
    array is zeo indexed.

      Array constructor with a single 
        Arrays can be created using a constructor with a single number parameter. An array with its length property set to that number and the array elements are empty slots.
      const fruits = new Array(2); it will reserver two place in memory
E) 
    1) concat()	Joins arrays and returns an array with the joined arrays
    2) constructor	Returns the function that created the Array object's prototype
    3) copyWithin()	Copies array elements within the array, to and from specified positions
    4) entries()	Returns a key/value pair Array Iteration Object
    6) every()	Checks if every element in an array pass a test
    7) fill()	Fill the elements in an array with a static value
    8) filter()	Creates a new array with every element in an array that pass a test
    9) find()	Returns the value of the first element in an array that pass a test
    10) findIndex()	Returns the index of the first element in an array that pass a test
    11) forEach()	Calls a function for each array element
    12) from()	Creates an array from an object
    13) includes()	Check if an array contains the specified element
    14) indexOf()	Search the array for an element and returns its position
    15) isArray()	Checks whether an object is an array
    16) join()	Joins all elements of an array into a string
    17) keys()	Returns a Array Iteration Object, containing the keys of the original array
    18) lastIndexOf()	Search the array for an element, starting at the end, and returns its position
    19) length	Sets or returns the number of elements in an array
    20) map()	Creates a new array with the result of calling a function for each array element
    21) pop()	Removes the last element of an array, and returns that element
    prototype	Allows you to add properties and methods to an Array object
    22) push()	Adds new elements to the end of an array, and returns the new length
    23) reduce()	Reduce the values of an array to a single value (going left-to-right)
    24) reduceRight()	Reduce the values of an array to a single value (going right-to-left)
    25) reverse()	Reverses the order of the elements in an array
    26) shift()	Removes the first element of an array, and returns that element
    27) slice()	Selects a part of an array, and returns the new array
    28) some()	Checks if any of the elements in an array pass a test
    29) sort()	Sorts the elements of an array
    30) splice()	Adds/Removes elements from an array
    31) toString()	Converts an array to a string, and returns the result
    32) unshift()	Adds new elements to the beginning of an array, and returns the new length
    33) valueOf()	Returns the primitive value of an array
F)Methods
    1)array.concat
            The concat() method is used to join two or more arrays.
            The concat() method returns a new array, containing the joined arrays.
            The concat() method does not change the existing arrays.
               Synthax = array1.concat(array2, array3, ..., arrayX)
               Parameter
                 array1,...	Required - The array(s) to be concatenated.
              Return value will be an new array

                  const name = [2,3,4,43,43,4]
                  const name1 = [3,43,44,3443,43]
                  const name2 =[5,54,54,54,5]
                  const joins = name.concat(name1,name2)
                  console.log(duplicate)
                  console.log(joins)
    2)arry.constructor
       const fruits = ["Banana", "Orange", "Apple", "Mango","dlaskd",3,3,3,3,];
      let text = new Array(3,...fruits)
      console.log(text.length)
      new array(4)// it will create 4 empty space in memory
    3)array.copyWithin()
       The copyWithin() method copies array elements to another position in the array.
       The copyWithin() method overwrites the existing values.
      The copyWithin() method does not add items to the array.
         Synthax
          array.copyWithin(target, start, end)
         Parameter
          target	Required.
          The index (position) to copy the elements to.
          start	Optional.
          The start index (position). Default is 0.
          end	Optional.
          The end index (position). Default is the array length.
     4)array.entries()
         The entries() method returns an Array Iterator object with key/value pairs:
        [0, "Banana"]
        [1, "Orange"]
        [2, "Apple"]
        [3, "Mango"]

        The entries() method does not change the original array.
         Synthax
           array.entries()
         Paramenter: none
        An array with key/value pairs.
        for (let x of f) {
        document.getElementById("demo").innerHTML += x;
      }
      5)array.every()
           - it return true or false based on condition

          The every() method executes a function for each array element.
          The every() method returns true if the function returns true for all elements.
          The every() method returns false if the function returns false for one element.
          The every() method does not execute the function for empty elements.
          The every() method does not change the original array

          const ages = [32, 33, 16, 40];

          let one  = ages.every(checkAge)

          function checkAge(age) {
            return age > 18;
          }
          console.log(one)
          ages.every() = will take a function which will check every item is above 18
          Anothe way to write
          const ages = [32, 33, 19, 40];
          let one  = ages.every(item=>item>18)
          console.log(one)
      6)array.fill()
         synthax
          array.fill(value, start, end)
         parameter 
            Parameter	Description
            value	Required.
            The value to fill in.
            start	Optional.
            The start index (position).
            Default is 0.
            end	Optional.
            The stop index (position).
            Default is array length.
         The fill() method overwrites the original array.
            replace value(first parameter) only given means everything will replace
            first two partermeter given from start value to end will replace value
      7)array.filter
         The filter() method creates a new array filled with elements that pass a test provided by a function.
        The filter() method does not execute the function for empty elements.
        The filter() method does not change the original array.
        Synthax
            array.filter(function(currentValue, index, arr), thisValue)
        Parameter
            function()	Required.
            A function to run for each array element.
            currentValue	Required.
            The value of the current element.
            index	Optional.
            The index of the current element.
            arr	Optional.
            The array of the current element.
            thisValue	Optional. Default undefined
            A value passed to the function as its this value.
                  let books = [2,3,4,5,0,6,7]
                  let one = books.filter(item=> item<3)
                  console.log(one)
      8) array.find()
        The find() method returns the value of the first element that passes a test.
        The find() method executes a function for each array element.
        The find() method returns undefined if no elements are found.
        The find() method does not execute the function for empty elements.
        The find() method does not change the original array.
        Synthax
          array.find(function(currentValue, index, arr),thisValue)
        Parameter
            function()	Required.
            A function to run for each array element.
            currentValue	Required.
            The value of the current element.
            index	Optional.
            The index of the current element.
            arr	Optional.
            The array of the current element.
            thisValue	Optional. Default undefined.
            A value passed to the function as its this value.
          let books = [3,4,4,4,5,1]
          let one = books.find(item=> item<3)
          console.log(one)
          answer is one 1
      9)array.findIndex()
          The findIndex() method executes a function for each array element.
          The findIndex() method returns the index (position) of the first element that passes a test.
          The findIndex() method returns -1 if no match is found.
          The findIndex() method does not execute the function for empty array elements.
          The findIndex() method does not change the original array.  
            array.findIndex(function(currentValue, index, arr), thisValue)
          parameter 
            function()	Required.
            A function to be run for each array element.
            currentValue	Required.
            The value of the current element.
            index	Optional.
            The index of the current element.
            arr	Optional.
            The array of the current element.
            thisValue	Optional. Default undefined.
            A value passed to the function as its this value.
          let books = [3,4,4,4,5,1]
          let one = books.findIndex(item=> item<3)
          console.log(one)
          answer 5
      10) array.forEach()
          The forEach() method calls a function for each element in an array.
          The forEach() method is not executed for empty elements.
          array.forEach(function(currentValue, index, arr), thisValue)
              function()	Required.
              A function to run for each array element.
              currentValue	Required.
              The value of the current element.
              index	Optional.
              The index of the current element.
              arr	Optional.
              The array of the current element.
              thisValue	Optional. Default undefined.
              A value passed to the function as its this value.
            let books = [3,4,4,4,5,6,1]
            let newArry =[]
            books.forEach(item=> item>4&&newArry.push(item))
            console.log(newArry)
            ans 5,6
      a)Array.from()

        use case remove duplicate and return array
The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object

      
for loop iteration
    const runs = [1,2,3,3,4,4,4,]
      for(let item of runs){
        console.log(item)
      }
      for of loop
      for(let value of runs){
          console.log(value)
      }

multidiametions array
    2d,3d [[2],[2]]


1) array.forEach 
      The forEach() method executes a provided function once for each array element.
      callback take three parameter = currentValue, index,array
      //total
        let numbers = [1,3,4,54,554,54,]
        let total = 0
        numbers.forEach((item)=>{
          total += item
        })
        console.log(total)

      //counting letter numbers
          let items = "india is greate country"
          let count = {}
          items.split("").forEach(item=>{
            if(count[item]){
              count[item]++
            }else{
              count[item]=1
            }
          })
2) array.map
         The map() method creates a new array with the results of calling a function for every array element.

         It takes three parameter
           current value
           index
           array
        It create new array. It will not change existion array
3)array.filter
          The filter() method creates a new array with all elements that pass the test implemented by the provided function
          It takes three parameter
           current value
           index
           array
          It create new array. It will not change existion array
          search/filter result
          let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

            const filterItems=(arr, query)=>{
              return arr.filter((el)=> {
                  return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
              })
            }
            console.log(filterItems(fruits, 'a'))
          remove duplicate 
           const duplicate = names.filter((item,index.joins)=> joins.indexOf(item) === index)
4)array.reduce
            The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
            accumuator = total value, all object or array added
            value = current value
            index
            source

            const name = [2,3,4,4,34,5,55,54,5,45,54,54,54,5,]

            let runs  = name.filter((item,index,name) => name.indexOf(item)===index)
            console.log(runs)
            let total = name.reduce((acc,value)=>{
z              return acc + value
            },0)
            console.log(total)

            const array1 = [1, 2, 3, 4];
            const reducer = (accumulator, currentValue) => accumulator + currentValue;

            // 1 + 2 + 3 + 4
            console.log(array1.reduce(reducer));
            // expected output: 10

            // 5 + 1 + 2 + 3 + 4
            console.log(array1.reduce(reducer, 5));
            // expected output: 15

5)array.splice 
            The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
            parameters
              start: starts with index
              count: number of items
              additems:

              const months = ['Jan', 'March', 'April', 'June'];
              months.splice(1, 0, 'Feb');
              // inserts at index 1
              console.log(months);
              // expected output: Array ["Jan", "Feb", "March", "April", "June"]

              months.splice(4, 1, 'May');
              // replaces 1 element at index 4
              console.log(months);
              // expected output: Array ["Jan", "Feb", "March", "April", "May"]

6) array.slice 
            The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end
            The original array will not be modified.
            start end
            const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

            console.log(animals.slice(2));
            // expected output: Array ["camel", "duck", "elephant"]

            console.log(animals.slice(2, 4));
            // expected output: Array ["camel", "duck"]

            console.log(animals.slice(1, 5));
            // expected output: Array ["bison", "camel", "duck", "elephant"]

    Array.splice and array.slice
       -Array.slice method will return new array. It will not change original array
       - array.slice take two parameter = start and end
       - end index based 1 index and start is 0 index
       - array.slice method takes both positive and negative numbers
       -array.splice changes original array
       -array.splice take three paramtner = start , count , new item.
       -array.splice take only positive numbers
       const food = ['pizza', 'cake', 'salad', 'cookie',"dish"];
        let n = food.slice(2,4)
        console.log(n)
        let m = food.splice(1,4,"burrito")

        console.log(m)
        console.log(food)

            A)   The slice() method returns the selected elements in an array as a new array object. It selects the elements starting at the given start argument, and ends at the given optional end argument without including the last element. If you omit the second argument then it selects till the end.

      slice method first argument takes 0 index and second argument 1 index
          Some of the examples of this method are,
        let arrayIntegers = [1, 2, 3, 4, 5];
        let arrayIntegers1 = arrayIntegers.slice(0, 2); // returns [1,2]
        let arrayIntegers2 = arrayIntegers.slice(2, 3); // returns [3]
        let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]
        Note: Slice method won't mutate the original array but it returns the subset as a new array.
      B)The splice() method is used either adds/removes items to/from an array, and then returns the removed item. The first argument specifies the array position for insertion or deletion whereas the optional second argument indicates the number of elements to be deleted. Each additional argument is added to the array.

          Some of the examples of this method are,

          let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
          let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
          let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

          let arrayIntegers1 = arrayIntegersOriginal1.splice(0, 2); // returns [1, 2]; original array: [3, 4, 5]
          let arrayIntegers2 = arrayIntegersOriginal2.splice(3); // returns [4, 5]; original array: [1, 2, 3]
          let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); //returns [4]; original array: [1, 2, 3, "a", "b", "c", 5]
          Note: Splice method modifies the original array and returns the deleted array.
      C)What is the difference between slice and splice
        Slice
          Doesn't modify the original array(immutable)	
          Returns the subset of original array	
          Used to pick the elements from array	
        Splice
          Modifies the original array(mutable)
          Returns the deleted elements as array
          Used to insert or delete elements to/from array
7) array.sort 
            The sort() method sorts the elements of an array in place and returns the sorted array
            //array object
            const car = [{name:"Dravid", age:20},{name:"Sachin", age:30},{name:"Simon", age:50},{name:"Anjali", age:99}]
            const sorts = car.sort((a,b)=>a.name.toLowerCase() > b.name.toLowerCase() ? 1:-1)
            console.log(sorts)

            //string
            const names = ["John","Banu", "Rani","Kumar","Thomas","Arya","Rahul"]
            const sortNames = names.sort((a,b)=> a>b?1:-1)
            console.log(sortNames)

            //numbers
            const numbers= [2,3,4,43,5,54,54,543,43,443]
            const sortn = numbers.sort((a,b)=>b-a)
            console.log(sortn)
8)

9)array.length
            The length property of an object which is an instance of type Array sets or returns the number of elements in that array
            const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];
            console.log(clothing.length);
            // expected output: 4
10)array.join(seperator)
            The join() method returns an array as a string.
            The join() method does not change the original array.
            Any separator can be specified. The default is comma (,).
               Synthax array.join(separator)
                separator	Optional.
                The separator to be used.
                Default is a comma.
            arry.join() return string
            
            array.join(seperator) 
            const runs = [1,2,3,4,4]
            runs.join("/")
            result[1/2/3/4/6/]
            after joingt this turn to be string
11)array.reverse()
            The reverse() method reverses the order of the elements in an array.
            const name = ["dravid","money","dalkj","Rahul","mone"]
            const reversed = name.reverse()
            console.log(reversed)
12)array.toString()
            The toString() method returns a string representing the specified array and its elements.
            const array1 = [1, 2, 'a', '1a'];

            console.log(array1.toString());
            // expected output: "1,2,a,1a"
13)array.every()
            The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
            const isBelowThreshold = (currentValue) => currentValue < 40;

            const array1 = [1, 30, 39, 29, 10, 13];

            console.log(array1.every(isBelowThreshold));
// expected output: true


        
Array.isArray will retur booleain value

array.indexOf()
    first occurance will apppear
    also if no item founnd it will give -1 result
array.fill(){}
array.entries()
The entries() method returns an Array Iterator object with key/value pairs.
Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});

*/

// ja
