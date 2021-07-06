// Q what is difference between var and let,const?

// let and const ES6 main introduce huye hai jo morden JS ka part hai and varible hamare pass starting se hi avalible hai Js main.

// #Var
// a variable can be declared after it has been used(a variable can be used before it has been declared.)

// The scope is global when a var variable is declared outside a function. This means that any variable that is declared with var outside a function block is available for use in the whole window.

// var is function scoped when it is declared within a function. This means that it is available and can be accessed only within that function.()

// hum var ko block scope main function ke andar access kar skte hai. par function ke bahar nahi.
// Example:- 
// var greeter = "hey hi";    
//     function newFunction() {
//         return hello;
//         var hello = "hello";

//     }
//    console.log( newFunction());

// function ab(){
// console.log (greeter);
// var greeter = "say hello"
// }
// ab();

// # Var hosting================
// Example:- Isame ham global scope main print karwa rahe hai.
// console.log(a);
// var a;  // Jitane bhi varible decelaration hote hai unko top main move karwa diya jata hai and value set undefine ho jati hai.
// a=10;

// Isame output undefine and 10 iss liye hogi kyuki var a hai move ho jayega top main(global scope)  or value set undefine kardega. or 10 iss liye aayega kyuki global main javascript a=10 main automatic var laga dega.

// After hosting is will convert like this behinde the console.
// var a;
// console.log(a);
// a=10;

// Example:- 
// function sc(){
// console.log(a);
// var a;
// a=10;
// }
// sc();
// Isame output undefine iss lye hoga kyuki jab function scope main varible move to top hoga tab uski value undefine hogi(same as global example(or previse example))

// Example:-1
// if(true){
//     // var b=11;
//     let b=11;
//     console.log("1 >",b);
// }
// console.log("2 >",b);


// O/P In Var case :- b=11 b=11;
// O/P In Let case :- b=11 b= b is not define because 2 > b is not define at global level;

// Example:-2

// for(var c=1;c<=10;c++){
//     console.log("3 >",c);
// }
// console.log("4 >",c); // Jab for loop exit karega 10 print karke then c ek baar or increment hoga or check karega  11<=10 then it's become false, it print outside of the loop means global.

// Example:-3
// function condition(){
//     var e=12;
//     if(true){
//         console.log("Hello",e);
//         var e=11;
//         console.log("1>",e);
//     }
//     console.log("2>",e);
// }
// condition();
// console.log("3>",e);




// It's important to point out that the hoisting will affect the variable declaration, but not its value's initialization. The value will be indeed assigned when the assignment statement is reached:

// Example:-4
// var e=14;
// function condition(){
//     console.log("1>",e); // undefine // varible ko use karne se phele hame declare karna hoga
//     var e=101;

//     if(true){
//         console.log("Hello",e);
//         var e=11;
//         console.log("2>",e);
//     }
//     console.log("3>",e);
// }
// condition();
// console.log("4>",e);

//=====#Let

// 1. We cannot redeclared varible in let.
// let x = "John Doe";
// let x = 0;

// let is block scoped
// A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block.
// So a variable declared in a block with let  is only available for use within that block. Let me explain this with an example:

// let greeting = "say Hi";
// let times = 4;

// if (times > 3) {
//      let hello = "say Hello instead"; 
//      console.log(hello);// "say Hello instead"
//  }
// console.log(hello) // hello is not defined // this hello is not assess outside of the block because let is a block scope.

//====== #let can be updated but not re-declared.

// === a variable declared with let can be updated within its scope.
// let greeting = "say Hi";
//  greeting = "say Hello instead";

//=== a let variable cannot be re-declared within its scope.

// let greeting = "say Hi";
// let greeting = "say Hello instead";

// ===However, if the same variable is defined in different scopes, there will be no error:

// let greeting = "say Hi";
// if (true) {
//     let greeting = "say Hello instead";
//     console.log(greeting); // "say Hello instead"
// }
// console.log(greeting); // "say Hi"

// Why is there no error? This is because both instances are treated as different variables since they have different scopes.

// ===#let hosting

// Just like  var, let declarations are hoisted to the top. Unlike var which is initialized as undefined, the let keyword is not initialized. So if you try to use a let variable before declaration, you'll get a Reference Error.

// function sc(){
// console.log(a);
// let a;
// a=10;
// }
// sc(); Jaise ham variable var main host karte wakkt a ki value undefine millti thhi vaise hi let ke case main hame undefine ki jaga Reference Error milega or error Cannot access 'a' before initialization aayega.(iska mtlb let host hota hai.) 



// ====#const
// Variables declared with the const maintain constant values. const declarations share some similarities with let declarations.

// ===const declarations are block scoped
// Like let declarations, const declarations can only be accessed within the block they were declared.

// ===const cannot be updated or re-declared
// This means that the value of a variable declared with const remains the same within its scope. It cannot be updated or re-declared. So if we declare a variable with const, we can neither do this:



//=== Hosting in const
// isame syntax error aayega or same as let ki tara hoga

// let c;
// for( c=1;c<=10;c++){
//     console.log("1",c);
// }
// console.log("2",c);// In this c value is 11 because c is decelare at global level.

// var nam="hello";
// function he(){
//     console.log("1. >",nam);
//     var nam="bye";
//     console.log("2. >",nam);

// }
// he();

// var t=10;
// function x(){
//     console.log("1.> ",t); // it undefine because var is a decelare in globally not functionally.
//     if(true){
//         var t=12;
//     }
//     console.log("2.> ",t);
// }
// x();

// console.log(myFun);
// console.log(myFun('xyz'));
// function myFun(name){
//     return name;
// }
// myFun();

// a=1;
// console.log("var",a);
// let a;
// console.log("let",a);


// var a;
// function a(){
//     var a=10;
//     return a;
// }
// console.log(a());


//==========Interview Question==============

// Q1:-
// for(var i=0;i<5;i++){
//     setTimeout(()=>{
// console.log("2>> ",i);
//     },10)
// }

// output  5 time 5
// Jab hosting hoti hai Js ek memmory allocat kar deta hai or ussmaine varible ki value change hotii rheti hai to wha par value replace hoti rheti hai iss liye 5 time 5 output aa rha hai.

// ye problem let main nahi hogi kyuki let ek block scope hai or let host nahi hota iss liye output 0,1,2,3,4 aayega.













