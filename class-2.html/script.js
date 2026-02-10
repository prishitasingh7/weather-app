//1 Function declaration

// function greet(a){
//     console.log("param: ",arguments[4]);

//     //loop can be used to access all the args

// }

// greet(0,2,3,6,10);

//Rest operator

// const greet = (...args) => {
// console.log(args);
// }

// greet(10,20,30,40,50);
// greet(10,20)

//This keyword

// const x = {
//   name: "Ash Katchem",
//   role: "Js Developer",
//   exp: 30,
//   show: function () {
//     console.log("this ", this); //calling Object
//     setTimeout(() => {
//     console.log("inside the function ", this); //Lexical this
//       console.log("Hello I'm ", this.name);
//     }, 2000);
//   },
// };

// const y = {
//   name: "Brock",
//   role: "Py Developer",
//   exp: 3000,
//   show: function () {
//     console.log("this ", this); //calling Object
//     const that = this;
//     setTimeout(function () {
//       console.log("this inside function ", this); //Window object

//       console.log("Hello I'm ", that.name);//Work around
//     }, 2000);
//   },
// };

// console.log(x.name);
// console.log(x.role);
// x.show();

//Nested functions

let a =10;
console.log(a);//10
function outer() {
  console.log("outer called",a); //10

  function inner() {
    console.log("inner called",a); //10
    let b=20;
  }
  inner();
  {
    {
        console.log(a) //10
        // console.log(b) //Error
    }
  }
}


outer();



// ## Objective

// Implement the same business logic using **four different function styles** in JavaScript:

// 1. Function Declaration  
// 2. Function Expression  
// 3. Arrow Function  
// 4. Immediately Invoked Function Expression (IIFE)

// ---

// ## Scenario

// You are building a **simple order pricing module** for an e-commerce application.

// ---

// ## Business Rules

// - **Price per item:** ₹500  
// - **Discount:** Apply **10% discount** if quantity ≥ 10  
// - **Tax:** Apply **18% GST** after discount  
// - **Output:** Return the **final payable amount**

// ---



// +41
// Lines changed: 41 additions & 0 deletions


// Original file line number	Diff line number	Diff line change
// @@ -0,0 +1,41 @@
// # JavaScript Practice Questions
// ---
// ## Practice Question 1 – Nested Function Scope
// ### Task
// Write JavaScript code that:
// - Declares a variable `x` in the **global scope** with value `10`
// - Creates a function `outer()` that:
//   - Declares a variable `x` with value `20`
//   - Defines a function `inner()`
// - The `inner()` function must:
//   - Print the value of `x` from `outer()`
// - Call the `outer()` function
// ---
// ### Restrictions
// - Do **NOT** pass parameters
// - Use **only** `console.log`
// ---
// ## Practice Question 2 – Normal Function
// ### Task
// Write JavaScript code that:
// - Creates a **normal function** named `multiply`
// - The function:
//   - Accepts **two numbers**
//   - Returns their **multiplication**
// - Call the function with values `4` and `5`
// - Print the result using `console.log`
