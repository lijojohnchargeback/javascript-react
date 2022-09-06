/*
Constructor method is special method creating and initializing class. By defalt construct mehtod is inbuit. If we are writing
constructor method it is overwriting

all properties and methods other than constructot prototype property
// Try edit message
class Mobile {
  constructor(){
    this.name = "Dinda"
  }
  display(){
    return "indai is grate"
  }
}
const samsug = new Mobile()
console.log(samsug.display())
console.log(samsug.name)

class declartion and class expressiong. Class express above
// class with parament
class Mobile {
  constructor(country,color){
    this.name = "Dinda",
    this.country = country
    this.color = color
  }
  display(){
    return this.color +" indai is grate " + this.country
  }
}
const samsug = new Mobile("thomas","green")
console.log(samsug.display())

class express
var name = clasas {

}

Inheritance
  exends keyword used in class declaration
class Father {
  shows(){
    return "I am father"
  }
}
class Son extends Father {
  sons(){
    return "I am son"
  }
}
const x = new Son()
console.log(x.shows())


Super keyworkd
   super keyword is to initialize parent class constructor
   
   class Father {
  constructor(amount){
    this.amount = amount
  }
  shows(){
    return "I am father "+ this.amount
  }
}
class Son extends Father {
  constructor(money){
  super(money)
  this.a = 12
  }

  sons(){
    return "I am son" + this. a
  }
}
const x = new Son(23)
console.log(x.shows())
console.log(x.sons())

you can overwrite methods

static
 static method used using utility funciton
 

 


*/