//# "use strict"
//  Ans:- it's a new feature of ECMAScript-5.
//  The statement "use strict"; instruct the browser to use the strict mode, which is reduced and safer feature set of Javscript.  

// "use strict" // if we commit line 10 and use strict mode a is not defined .
                 
// function namee(){
//     function age(){
//         let a=2;        // if we define a and use strict mode the 
//         console.log(a); // a is not defined
                        
//     }
//     age();
// }
// // console.log(a);  // if we commit the line 5 value is 2
// namee();
// console.log(a);



//Basic of Functions 

// 1. Named Function // We can access named function anywhere.
    //  function add(){
    //      console.log("This is Named function");
    //  } add(); //This is Named function

// 2. Anonymous function // We cannot access this function anywhere we neet to call functon after decelare this function
// var anonymous=function(){
//     console.log("This is  Anonymous function");
// }
// anonymous(); //This is  Anonymous function
 
//   OR
// var anonymous=function(){
//     console.log("This is  Anonymous function");
// }
// anonymous(); // anonymous is not a function

// 3. IIFE(Immediately Invoked Function Expression)

//   (function(){
//       console.log("Immediately Invoked Function Expression");
//   })();

//# ==============Here we store or capture the data in variable.==================

// var divide = function(a,b){
//     var result =a/b;
//     return result;
//     // console.log(result); // If we call result by consloe.log then we can call result function like divide(8,2)
// }

// var car=divide(10,2); // In this we are storing the data od divide function in car and the we print car
// console.log(car);
// OR 
//   console.log(divide(10,2))
// divide(8,2);

//=============Question How many types of data ?========================
// Answer:- There are two type of data
//    1. Primitive( String, number, boolean, null undefine and Nan)
//    2. Non-Primitiv(Array, Object and function)

//   Primitive :- 
// Immutables are the objects whose state cannot be changed once the object is created.
// Strings and Numbers are Immutable.

// Non-Primitiv:- Mmutables are the objects whose state can be changed.
//  Q What is Nan?
//    console.log(typeof(10/"2")); // number
// console.log(1/"Hello"); //Nan and it is primitive

// Q What is null and undefined

// var a=null;
// var b;
// console.log(a); // null
// console.log(b); // undefined

// Q Difference between “ == “ and “ === “ operators.
// Both are comparison operators. The difference between both the operators is that,“==” is used to compare values whereas, “ === “ is used to compare both value and types.

// var a=5;
// var b="5";
// console.log(a==b);
// console.log(a===b);

// NOTE:- * In this the type of 5 and "5" is that one is number(5) and another is string("5")
 //       * And value of a and b is 5 and "5"







