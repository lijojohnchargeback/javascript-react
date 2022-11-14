/*
4A) Object is an collection of properties and method
Object contained methods and properties
Two ways we can build object 

  A) Object literal 
      let car ={
        name:"Hundai",
        year:2007,
        show:function(){
          console.log(`${this.name}  is one best car and manufactctueed years ${this.year}`)
        },
        manufacture:function(){
          return `${this.name} and manufactured ${this.year}`
        }
      }
      car.color = "blue"
      car.show()
  B) Object constructor
        const car = new Object()
        car.color = green
        car.brand = "honada"

        accessing properties
          name = coar.name
        accessing method
          function = function()
        adding property
          mobile.mobileName="dafda"
        Delete object
          delete.mobile.name
      console.log(car.manufacture())
  C) Obejct.create
        let car ={
          name:"Hundai",
          year:2007,
          show:function(){
            console.log(`${this.name}  is one best car and manufactctueed years ${this.year}`)
          },
          manufacture:function(){
            return `${this.name} and manufactured ${this.year}`
          }
        }
        let Maruthi = Object.create(car)
        Maruthi.age = 40
        Maruthi.ageBook = function(){
          return `${this.age} is my ${this.name}`
        }
        // Maruthi does not contain all the methods and properties. We need to create new one. Also it access prototype of car object
        console.log(Maruthi.ageBook())
  D) constructor function
        Object instances are created using constructure function. 
        
        function employee(name,email,age){
          this.name = name,
          this.email = email,
          this.age = age

        }
        let Sam = new employee("Sam", "lijojohnrbs@gmail.com", 20)
        console.log(Sam)

        function  Mobile (name,price){
              this.name = name
              this.price = price
              this.profile = function(){
                  console.log(`My name is ${this.name} and price is ${this.price}`)
              }
            }
          const data = new Mobile("Lijo", 20)
          console.log(data.profile())

  E) constructor function with prototype
          let Student = function(name,email,classes){
          this.name = name
          this.email = email,
          this.class = classes
          this.show = function(){
            return `${this.name} is student name and email address is ${this.email} and claases is ${this. classes}`
          }
        }
        let john = new Student("john", "john@gmail.com", 4)
        console.log(john.show())
        Student.prototype.login = function(date){
          this.date = date
          return `${this.name} logged on ${this.date}`
        }
        console.log(john.login(28))

  F) ES6 Class
      class House {
        constructor(name,email,age){
          this.name = name;
          this.email = email;
          this.age = age
        }
        getFullName(){
          return `${this.name} is my name and ${this.email} is my email addres`
        }
      }
      const Lijo = new House("Lijo","lijojohnrbs@gmail.com",8)
      console.log(Lijo.getFullName())


  H) Factory function
      When a function return object is called factory funciton. It can produce object instance without new keyword class
      function fun_name(){
      return {
        mode:galaxy
      }
      }
      when ever a funciton return object is called factory function
  factory funciton method
    a)const mobile =  ()=>({
        name:"Gaaxy",
        price:200,
        unit:3,
        totals:function(){
            return this.price*this.unit;
        }
    })
    const y = mobile();

    console.log(y.totals())

  b)factory function with parameter
      const team = (name,players)=>({
        teamName:name,
        players:20,
        message:function(){
            return this.teamName + "is my favorate player in bang and team size is" + this.player

        }
    })
    const jackie = team("Inbdaufa",20)
    console.log(jackie.message())
  redux mapStateToProps

4B) Call, Apply, Bind mehtthods

    -Call, apply methods allow us borrow function from an object
    -difference between call and apply is call take argument using comma and apply take as array
    A)Call and Apply
     let name = {
        firstName:"Aksha",
        lastName:"John",
      }
      let printFullanme = function(hometown,state){
          console.log(this.firstName + " " + this.lastName + "from" + " " + hometown + " " + state)
        }
      printFullanme.call(name,"Banglore")
      let name2={
        firstName:"Sachin",
        lastName:"Tendular"
      }
      //function borrowing
      you can borrow function from other object
      printFullanme.call(name2, "Mumbai","Karntalak")
      printFullanme.apply(name2, ["Mumbai","Keral"])

      const fullName = printFullanme.bind(name2, "Mumbai","Karntalak")
      bind create copy of function and assign. It will not call direct
      fullName()
      We have learned that how this keyword behaves differently in JavaScript than in other object-oriented languages. The call, bind and apply methods can be used to set the this keyword independent of how a function is called.
4B)
    Map is a collection of elements where each element is stored as a Key, value pair. Map object can hold both objects and primitive values as either key or value. When we iterate over the map object it returns the key, value pair in the same order as inserted.
  - There are two types of map . function map (That is used higher orde function) and second class map
    Class map  is similar  to object but little bit advanced from object
    Map key can any data type but object only string
    Map has more features than object
    Map has better perform that object
    
    //initiate new map object
    const demo = new Map()
    //add properties to to map object
    demo.set("a",1)
    demo.set("b",2)
    demo.set("c",3)
    demo.set(3,"d")
    console.log(demo)
    // get one property from object
    console.log(demo.get("a"))
    //delete one propery from object
    console.log(demo.delete("a"))
    //check wheather it has key or not. It gives boolean vlaue
    console.log(demo.has("b"))
    //check the size of the object
    console.log(demo.size)

    //iterate and get value
    for(let keys of demo){
        console.log(keys)
    }
    console.log(demo)
    // iterable or not. This will nelp using next
    let m = demo[Symbol.iterator]()
    //this is get propery one by one 
    console.log(m.next().value)
    console.log(m.next().value)
    //values
    let n = demo.values()
    console.log(n.next().value)
    console.log(n.next().value)
    console.log(n.next().value)
    //keys
    let o = demo.keys()
    console.log(o.next().value)
    console.log(o.next().value)
    console.log(o.next().value)
    //entries
    //The entries() method returns a new iterator object that contains the [key, value] pairs for each element in the Map object in insertion order. 
    let p = demo.entries()
    console.log(p)
    //foreach
    demo.forEach((key,value)=>console.log(`key is ${key} and vlaue is ${value}`))
  Objects are similar to Maps in that both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. Due to this reason, Objects have been used as Maps historically. But there are important differences that make using a Map preferable in certain cases.

  1) The keys of an Object are Strings and Symbols, whereas they can be any value for a Map, including functions, objects, and any primitive.
  2) The keys in Map are ordered while keys added to Object are not. Thus, when iterating over it, a Map object returns keys in order of insertion.
  3) You can get the size of a Map easily with the size property, while the number of properties in an Object must be determined manually.
  4) A Map is an iterable and can thus be directly iterated, whereas iterating over an Object requires obtaining its keys in some fashion and iterating over them.
  5) An Object has a prototype, so there are default keys in the map that could collide with your keys if you're not careful. As of ES5 this can be bypassed by using map = Object.create(null), but this is seldom done.
  5)A Map may perform better in scenarios involving frequent addition and removal of key pairs.
4C) Set
  The Set object lets you store unique values of any type, whether primitive values or object references
      let n = [1,2,3,3,3,3]
      const m = new Set([...n])
      //add new element and cannot add new array
      m.add(8)
      //chainable
      m.add(9).add(10)
      console.log(m)
      //for of
      for(values of m){
          console.log(values)
      }
      //size
      console.log(m.size)
      //entries(This is will conver each element in to key values in array)
      let p = m.entries()
      for(values of p){
          console.log(values)
      }
      console.log(p)

      //foreach
      p.forEach(item=>console.log(item))
      //iterator
      const iterator1 = m[Symbol.iterator]();
      console.log(p.next().value)
      console.log(iterator1.next().value)
      console.log(iterator1.next().value)

      //delete (second item will be deleted)
      m.delete(2)
      console.log(m)
      //clear
      m.clear(m)
      console.log(m)
4D) Globalsthis
The global globalThis property contains the global this value, which is akin to the global object.
   Javascript uses differnt syntax accessing global variable. In browser self, window or frames and Node it is global
   this mode can be run using non-strict mode. if you use strict mode it will be undefiend
   Globalthis is property which provide standard way of accessing the global this value
   across enviroment
4)Infinity 
   -The global property Infinity is a numeric value representing infinity.
   -Infinity is a property of the global object. In other words, it is a variable in global scope.  

4C) Propertieds and methods
      1)Object.keys
         The Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop. (The only difference is that a for...in loop enumerates properties in the prototype chain as well.)
         const object1 = {
            a: 'somestring',
            b: 42,
            c: false
          };

          console.log(Object.values(object1));
          // expected output: Array ["somestring", 42, false]
      2)Obeject.freeze(), Object.isFrozen()
        The Object.freeze() method freezes an object.We cannot make changes in this object properties. A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned.
         -cannot add new property
         -cannot update property
         -cannot delete property
         -It works only top level
         Object.isFrozen() - to check object frozen or not /expect boolean value
           let object.money.book = 10 = it works

              const obj = {
                  prop: 42
                };

                Object.freeze(obj);

                obj.prop = 33;
                // Throws an error in strict mode

                console.log(obj.prop);
                // expected output: 42
      3)Object.seal(),Obejct.isSealed()
         The Object.seal() method seals an object. Sealing an object prevents extensions and makes existing properties non-configurable. A sealed object has a fixed set of properties: new properties cannot be added, existing properties cannot be removed, their enumerability and configurability cannot be changed, and its prototype cannot be re-assigned. Values of existing properties can still be changed as long as they are writable. seal() returns the same object that was passed in
          -Object properties cannot remove
          -Obejct properties cannot add
          -Object property value can be changed
          -It also works on top lever.
          -Object.isSealed() - It is way to check obejct is sealed not. Boolean value
              const object1 = {
                property1: 42
              };

              Object.seal(object1);
              object1.property1 = 33;
              console.log(object1.property1);
              // expected output: 33

              delete object1.property1; // cannot delete when sealed
              console.log(object1.property1);
              // expected output: 33 
        4)Object.preventExtensions(), Object.exstensible()    
          The Object.preventExtensions() method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object). It also prevents the object's prototype from being re-assigned.
             - allow us to update value
             - allow delete values 
             -Not allow us to have new properties
             - once you delete property you cannot add back again
             - It also applies to top level property
             -Object.extensible() is return boolean value 
                const object1 = {};
                Object.preventExtensions(object1);

                try {
                  Object.defineProperty(object1, 'property1', {
                    value: 42
                  });
                } catch (e) {
                  console.log(e);
                  // expected output: TypeError: Cannot define property property1, object is not extensible
                }
        5)Object.assign()
          The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.   
           - it returns brand new obeject merging two.
           -Obect.assign() - variable and first parameter object will have the propertis
           -
           const target = { a: 1, b: 2 };
            const source = { b: 4, c: 5 };

            const returnedTarget = Object.assign(target, source);

            console.log(target);
            // expected output: Object { a: 1, b: 4, c: 5 }

            console.log(returnedTarget);
            // expected output: Object { a: 1, b: 4, c: 5 }
            
             // second example 
              const person = {
                name:"Lijo John",
                email:"lijojohnrbs@gmail.com",
                quatity:20
              }
              const qaulfication = {
                class:12,
                passed:true,
                  quatity:30
              }
              const books ={
                name:"Roons",
                price:20,
                  quatity:30
              }

              let merge = Object.assign(person,qaulfication,books)
              console.log(merge)
              console.log(person)
              console.log(books)
        6)Obejct.create(null)/or Obejct.create(objectName)
        7)Object.defineProperties() 
          The Object.defineProperties() method defines new or modifies existing properties directly on an object, returning the object.
4B) for in loop & for of
     for in loop used loop through object propery. Object.key() Object.value similary. You can include expclue
      Both for...in and for...of statements iterate over js data structures. The only difference is over what they iterate:

      for..in iterates over all enumerable property keys of an object
      for..of iterates over the values of an iterable object.
      Let's explain this difference with an example,
      let arr = ["a", "b", "c"];

      arr.newProp = "newVlue";

      // key are the property keys
      for (let key in arr) {
        console.log(key);
      }

      // value are the property values
      for (let value of arr) {
        console.log(value);
      }
          for..in iterates over all enumerable property keys of an object
          for..of iterates over the values of an iterable object. Examples of iterable objects are arrays, strings, and NodeLists.
4C) Javascript iterable
    Iterable objects are objects that can be iterated over with for..of.Technically, iterables must implement the Symbol.iterator method.
    The iterator protocol defines how to produce a sequence of values from an object.
        An object becomes an iterator when it implements a next() method.

        The next() method must return an object with two properties:

        value (the next value)
        done (true or false)
4D) Build in iterable
  Below are the list of built-in iterables in javascript,
  Arrays and TypedArrays
  Strings: Iterate over each character or Unicode code-points
  Maps: iterate over its key-value pairs
  Sets: iterates over their elements
  arguments: An array-like special variable in functions
  DOM collection such as NodeList
Object literal
Oject contructure
Construction function
factory function

Examples
Object literal
const m ={
    name:"lijo",
    age:20,
    fee:100,
    fee2:200,
    totalFee:function(){
       return  this.fee+this.fee2
    }
}
console.log(m.totalFee())

Object constructor
Object should be always object
const name = new Object();
name.runs ="Thnalda"
name.fee = 200
name.fee2 = 300
name.total = ()=> name.fee+ name.fee2
console.log(name.total())

//delete propete


delete name.name
let person = {
  name:"Lijo John",
  city:"Bangalore"
}
let {city, ...person1} = person
console.log(person1)


Example  copy
  //Object literal
const employee = {
  person:"Rose Gilburge",
  age:29,
  show:function person(){
   return `${this.person} is my  name and age is ${this.age}`
  }
}
console.log(employee.show())
//Object construction
const car = new Object()
car.name ="Maruthi"
car.model = "Wogan"
car.age = 8
car.books = function(){
  return `${car.name} is my car and model is ${car.model} and car age is ${car.age}`
}
console.log(car.books())
//Object create
let man = Object.create(null)
man.books = "one"
man.eat = "Frutit"
man.show =function(){
  return `${man.books} is my food and I eat ${man.eat}`
}
console.log(man.show())
//constructor funciton
let employees = function(name,email,mobile){
  this.name = name
  this.email = email
  this.mobile = mobile
  this.showDetails=function(){
    return `${this.name} is my name and my email id is ${this. email} and my number is ${this.mobile} `
  }
}
let lijo = new employees("Lijo", "lijo@mgail.com", 9108167660)

console.log(lijo.showDetails())

//constructor funciton example 1
let employees = function(name,email,mobile){
  this.name = name
  this.email = email
  this.mobile = mobile
  this.showDetails=function(){
    return `${this.name} is my name and my email id is ${this. email} and my number is ${this.mobile} `
  }
}
let lijo = new employees("Lijo", "lijo@mgail.com", 9108167660)
employees.prototype.login = function(){
  return `${this.name} is my name and address is ${this.email}`
}
console.log(lijo.login())

console.log(lijo.showDetails())




*/
