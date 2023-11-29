// Person constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a greet method to the Person prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Employee constructor function that inherits from Person
function Employee(name, age, jobTitle) {
  // Call the Person constructor using Employee's context
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Inherit the Person prototype in the Employee prototype
Employee.prototype = Object.create(Person.prototype);

// Fix the constructor property to point back to Employee
Employee.prototype.constructor = Employee;

// Adding a jobGreet method to the Employee prototype
Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};






// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
