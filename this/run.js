//2 types of environment = Browser(Yes) & Node
//2 types of mode = strict and non-strict(Yes) mode ,(Yes) for React.js

//Global object -> windows or self object who called the function
//when there is no object , calling this keyword then it would print global object

b = "noor chahal";

function Person(firstName, lastName) {
  this.a = "firstName";
  this.b = "lastName";
  this.fullName = function () {
    console.log(firstName, " ", lastName);
    return `${this.a} ${b}`;
  };
}

const person = new Person("John", "Doe");
console.log(person.fullName()); // Output: "John Doe"
