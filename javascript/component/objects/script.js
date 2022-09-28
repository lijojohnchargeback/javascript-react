// 4A) Object is an collection of properties and method
// Object contained methods and properties
// Two ways we can build object

// 1)Object literal
let person = {
  firstName: "Lijo",
  lastName: "John",
  getFullName: function () {
    console.log(
      `${this.firstName} is my first name and my last name is ${this.lastName}`
    );
  },
};
console.log(person);
//add property
person.email = "lijojohnrbs@gmail.com";
// console.log(person);

//delete
delete person.firstName;
console.log(person);
console.log(person.firstName);
console.log(person.lastName);
person.getFullName();

// 2) Object constructor

const car = new Object({ age: 20 });
//add properties
car.color = "red";
car.brand = "Maruthi";
//add methode
car.getDetials = function () {
  console.log(`${this.brand} is my car and color is ${this.color} `);
};
delete car.age;
console.log(car);
car.getDetials();

// 3) Object.create()
const room = {
  roomnumber: 2000,
};

const book = Object.create(null);
book.color = "red";
book.pages = 20;
console.log(book);

//4)Factory function
//first way of create
let staff = (name, email) => {
  return {
    name,
    email,
  };
};
//second way of creating
let staffs = (name, email) => ({
  name,
  email,
  getDetails: function () {
    console.log(
      `${this.name} is staff name and his/her email id ${this.email}`
    );
  },
});
let abcpvt = staff("Sharma", "sharma@gmail.com");
abcpvt.salary = 20000;
console.log(abcpvt);
delete abcpvt.email;
console.log(abcpvt);
abcpvt.getDetails();
// 5)Construction function

let Student = function (name, email, classes) {
  this.name = name;
  this.email = email;
  this.classes = classes;
  this.showDetail = function () {
    console.log(
      `${this.name} is student name and email is ${this.email} and studing in ${this.classes}`
    );
  };
};
let Rahul = new Student("Rahul", "rahul@gmail.com", 8);
console.log(Rahul);
Rahul.showDetail();
//6) Class
class Students {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}
const Sachin = new Students("Sachin", "sachin@gmail.com", "9108167660");
console.log(Sachin);
