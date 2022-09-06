/*
A) collection of data are called array

B) In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:
        JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
        JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
        JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
        JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).


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

D)Methods
   
   a)Array.from()
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
8)array.concat
            The concat() method is used to join two or more arrays.
              const name = [2,3,4,43,43,4]
              const name1 = [3,43,44,3443,43]
              const name2 =[5,54,54,54,5]
              const joins = name.concat(name1,name2)
              console.log(duplicate)
              console.log(joins)

9)array.length
            The length property of an object which is an instance of type Array sets or returns the number of elements in that array
            const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];
            console.log(clothing.length);
            // expected output: 4
10)array.join(seperator)
            The join() method returns the array as a string.
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

A)   The slice() method returns the selected elements in an array as a new array object. It selects the elements starting at the given start argument, and ends at the given optional end argument without including the last element. If you omit the second argument then it selects till the end.

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
