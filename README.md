# react-z3as3s

[Edit on StackBlitz ⚡️](https://localhost:3000)
 # **JAVASCRIPT**

# **1.variable**
 - Variables are named values and can store any type of JavaScript value.
 ```
  var x = 100;
  let y=100;
  const z= 200;

```
# **2.scope**
- Scope refers to the **availability and accessibility  of variables and functions in certain parts of the code**. JavaScript has 3 types of scope:
-  i) ```Block scope```
-  ii)```Function scope or local scope```
-  iii) ```Global scope```

![alt text](https://miro.medium.com/v2/resize:fit:1400/1*KxHwVbB0zhnSVrhrWtT-gg.jpeg)
 # Block Scope:
- Before ES6 (2015), JavaScript had only Global Scope and Function Scope.
- ES6 introduced two important new JavaScript keywords: let and const.
- These two keywords provide Block Scope in JavaScript.
- **Variables declared inside a { } block cannot be accessed from outside the block**
### Example:1
```
{
  let x = 2;
}
// x can NOT be used here
```
###  Example:2 
```
{
  var x = 2;
}
// x CAN be used here
```
- Variables declared with the ```var``` keyword can NOT have block scope.
- **var** Variables declared inside a { } block can be accessed from outside the block.

# Local scope or functional scope:
- Variables declared within a JavaScript function, become LOCAL to the function.
- Local variables have Function Scope.
- **it can only be accessed within a function**
 ###  Example:1
```
// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// carName can't be accessed here (outside function)
```
# Global scope:
- Variables declared Globally (outside any function) have Global Scope.
- Global variables can be accessed from anywhere in a JavaScript program.
 ###  Example
```
let a = "hello"; // global declared
function greet() {
    a = 3;
}
// before the function call
console.log(a);

//after the function call
greet();
console.log(a); // 3
```
# **3.Hosting**
- Hoisting in JavaScript is a behavior in which a **function or a variable can be used before. declaration**
 ###  Example
```
a = 5; // assign value 
console.log(a);  // use 
var a; //  declare

```
# **4.Difference between var,let,const.**
![alt text](https://velog.velcdn.com/images/iha3257/post/f2e15fb2-22d8-4042-bf5c-f6617fd5be57/image.jfif)
 | var | let | const |
| ------ | ------ | -----|
  |The scope of a ```var``` variable is functional scope.. |The scope of a ```let``` variable is block scope. | The scope of a ```const``` variable is block scope.  |
  |It can be ```updated and re-declared``` into the scope.. | It can be updated but cannot be re-declared into the scope.. |  It cannot be updated or re-declared into the scope. |
   |It can be declared without initialization. | It can be declared without initialization. |  It cannot be declared without initialization.. |
     |It can be accessed without initialization as its default value is “undefined”. | It cannot be accessed without initialization otherwise it will give ‘referenceError’. |  It cannot be accessed without initialization, as it cannot be declared without initialization.. |
         |hoisting done, with initializing as ‘default’ value | Hoisting is done, but not initialized (this is the reason for the error when we access the let variable before declaration/initialization |  Hoisting is done, but not initialized (this is the reason for the error when we access the const variable before declaration/initialization |
# **5.Closure:**         
- a closure gives you access to an ```outer function's scope from an inner function```
 **example**:
![alt text](https://miro.medium.com/v2/resize:fit:1400/1*QgJDPOW-e39V-ZzTl2F2gA.png)
```
function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();
```
# **6.data types:** 
![alt text](https://dotnettrickscloud.blob.core.windows.net/img/javascript/js-datatype.png)

**example**
```
// Numbers:
let length = 16;
let weight = 7.5;

//undefined 
let x;       // Now x is undefined

//null 
let x=null;       // Now x is null

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");
```
 #  **7.How to check data type :**     
 ```
  var apple = "apple";
  console.log(typeof apple); // string
  
   var number = 2052021;
  console.log(typeof number); // number
  
 typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object"
 ```
 
 # **8.type conversion:** 
 - In programming, type conversion is the process of **converting data of one type to another**. For example: converting String data to Number.
 - There are two types of type conversion in JavaScript.
 - ```Implicit Conversion``` - automatic type conversion
 - ```Explicit Conversion``` - manual type conversion
 
***More Details***: https://www.programiz.com/javascript/type-conversion#google_vignette

 # **9.Object:** 
 - JavaScript object is a non-primitive data-type that allows you to **store multiple collections of data**.
 
***how to create object:***
```
//1
const person = {
  firstName: 'testFirstName',
  lastName: 'testLastName'
};

//2
const person = new Object();
person.firstName = 'testFirstName';
person.lastName = 'testLastName';
```

 ***Accessing Object Properties:***
 - You can access the value of a property by using its key.
 
 ```1. Using dot Notation```
 ```
 // syntax objectName.key
 const person = { 
    name: 'John', 
    age: 20, 
};

// accessing property
console.log(person.name); // John
 ```
  ```2. Using bracket Notation```
  ```
   // syntax objectName["propertyName"]
  const person = { 
    name: 'John', 
    age: 20, 
};

// accessing property
console.log(person["name"]); // John
  ```
 ***how to create and access on Nested Objects***
 ```
 // nested object
const student = { 
    name: 'John', 
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}

// accessing property of student object
console.log(student.marks); // {science: 70, math: 75}

// accessing property of marks object
console.log(student.marks.science); // 70
 ```
