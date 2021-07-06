//# Global Scope
// A varible is define at root, file level and outside of the function then it is call global scope
// Example 
// ----Global Scope-----
// var a=10;
// var name ='Chirag';

// //# Local Scope
// // varible is define within function is called local scope.

// // Example
// // -----Local Scope----

        //    var a = 10;
        //     var name = 'Chirag';

        //     // local Scope
        //     function hello() {
        //         var name = "Goel";
        //         console.log("hello >>", name); //Goel
        //     }
        //     hello();

        //     function logName() {
        //         console.log(" logName >>", name); //Chriag
        //     }
        //     logName();

        //     function helloWorld() {
        //         console.log(" init helloWorld >> ", name); //Chirag
        //         name = "Mr";
        //         console.log(" helloWorld >>", name); //Mr
        //     }
        //     helloWorld();

        //     console.log("5.Global >>",name); //In this print chirag but due to local scope of helloWorld Chirag is override by name of Mr and then it print Mr

// =======================================
        //     var nam = 'Chirag';

        //     // local Scope
        //     helloWorld();

        //     hello();

        //     function logName() {
        //         console.log("2. logName >>", nam);
        //     }
        //     logName();

        //     function helloWorld() {
                    
        //         console.log("3. init helloWorld >> ", nam);
        //        var nam = "Mr";
        //         console.log("4. helloWorld >>", nam);
        //     }

        //     function hello() {
        //         console.log("1. hello >>", nam);
                
        //         const nam="Goel"
        //         // console.log("1. hello >>", nam);
        //     }

        //     console.log("5.Global >>",nam); //How Mr is comming


//# Lexical Scoping

// The scope chain is used to resolve the value of variable names 
// in JS.

// scope chain in js is lexically defined, which means that we can 
// see what the scope chain will be by looking at the code. 

// At the top, we have the Global Scope, which is the window Object
// in the browser.

// Lexical Scoping means Now, the inner function can get access to 
// their parent functions variables But the vice-versa is not true.            

// var g="global"; // Global has acces to varible g
// //  console.log(g,o,i); // In this we cannot access outer(o) and inner(i) varible beacause o and i is not define at global level(Or we can say o and i is not part of global scope it is part of outer and inner function), o and i is define in local socpe in function.
//  console.log(g);
// function outer(){// Functiion outer has acces to varible o and g
//     var o="Outer";
//     console.log("1."+g,o); // in this we cannot access i because i is define in inner function which is local scope of inner function.
    
//     function inner(){ // Functiion inner has acces to varible i, o and g
//         var i="inner";
//         console.log("2."+g,o,i); // At this point we can access all varible  g, i and o.
        
//     }
//     inner();
// }

// function anotherOuter(){
//     var ao="anotherOuter";
//     console.log(ao,g o,i); // At this point o and i is not part of anotherOuter() function and through o  and i is not define error;
// }
// anotherOuter();

// outer();

//# Parameter pass in lexical scoping

// var g="Global";
// console.log(g);
// function outer(data){
//     var o="Outer"
//     console.log(g,o,data);

//     function inner(){ 
//         var i="inner";
//         console.log(g,o,i,data); // it return data same as outer data like Hello
//     }
//     inner(data);
// }

// // function anotherOuter(){
// //     var ao="AnotherOuter";
// //     console.log(ao);
// // }
// // anotherOuter();

// outer("Hello");

//Note If we remove parameter from outer function and passed parameter in inner function and  then call through outer function then it would be error because in outer function parameter is not define then we cannot call data of outer function through inner function, and if we pass parameter in outer function then we can access outer data and inner data.

// ========================================
// # BlockScope
// Ask here 
// if(true){
//     let b=11;
//     console.log("1. >>",b);
// }

// for(var c=1;c<=10;c++){
//     // console.log("3. >>",c);
// }

// console.log("2. >>",b);
// console.log("4. >>",c);// value of c is 11 because  c will be increament last time and compare 11<=10, it was false and didn't enter in loop. after that 11 will print at gloabal level. that's why console.log("4. >>",c); is 11


// function cond(){
//     console.log("5. e >>",e); // e is undefine beacuse e is not define at global level, the global level of e in this condition is funtion cond()
//     if(true){
//         var e=12;
//         console.log("6. e >>",e); //12
//     }
//     console.log("7. e >>",e); //12
// }
// cond();
// console.log("8. e >>",e); // erroe e is not define.

//========================================================================================================
// ------Block statement-----------

// Block statements like if and switch conditions or for and while loops, unlike functions, don't create a new scope. Variables defined inside of a block statement will remain in the scope they were already in.

// console.log("Block statement");
// if(true){
//     var b=10;
//     console.log("1. >>",b);
// }
// console.log("2. >>",b);

// // let c; // if we assign c at file or global level then let can be execute.
// for( let c=1;c<=10;c++){// if we assign c in local level then it is not execute at global or file level.
// //   console.log("3. >> ",c);
// }
// console.log("4. >> ",c);// c is not define if c is assign in local level.


// ==========Hosting==========

// Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration. For example,

// var test; it is declare varible.
// test=10;  the test is the name of the variable and is assigned a value of 10. this is called initilising.
// var test=10; // it is declaration and initilising.

// var a=1; // it is declaration
// console.log("1. >>",a);

// var a;
// a=1;
//  console.log("2. >>",a);

//  console.log("3. >>",b);// we cannot declare variable after print, we should declare variable before print
//  var b=2;

// var b;
// console.log(b); // undefine
// b=2;

// # Move to the top ==== Doubt whole
// var a=1;
// var b=2;
// c=10;

// console.log(a+" "+b+" "+c); // 1,2,10

// var c; // here reversed space will move to the top in c and then start initilising

// var a;
// var b;
// a=1;
// b=2;
// console.log(a+" "+b+" "+c);

// c=3;


// function func(){
//     console.log("1. >>",temp); // undefine
//     if(true){
//         var temp=10;
//     }
//     console.log("2. >>",temp); // 10
// }
// func();

// OR
// var temp=20;
// function func(){
//     console.log("1. >>",temp); // undefine
//     if(true){
//         var temp=10;
//     }
//     console.log("2. >>",temp); // 10
// }
// func();


// Function Decelaration and expression
// Ask
//# Function Decelaration

// console.log(Dec); // [Function: Dec]
// console.log(Dec("xyz")); // xyz
// Dec(); // Hosted
// function Dec(name){
//     return name;
// }

// #Function Expression

// var myFun;
// console.log(myFun);
// console.log(myFun("PQR"));
//  myFun=function(name){
//     return name;
// }

// a=1; // Error cannot access a before initialization in let and const(it is not hosted) case but in var case a=1 in both console.log
// console.log(a);
// let a;
// console.log(a);

// if(true){
//         let a=10;
// }
// console.log(a); // a is not define because in let case variable a is not hosted.


// #TDZ(Temporal Dead Zone)

// In let and Const case, all of the thing above in let and const where decelare will become Temporal Dead Zone.(Let and const ke case main jitani bhi upar ki chize hai wo sabhi TDZ main chali jayegi and this is called TDZ)
// // Example:- This is example of TDZ
//  var b=20;
//  console.log(b);

// if(true){
//         var b=20;
//         console.log(b); //undefine because in block statement  variable b is not hosted top.
//         console.log(a); // cannot assess 'a' before initilisation in case we initlise with let and const because of TDZ.
//         //Statement 1
//         let a=10;
//         console.log(a);
//         var b=20;
// }

// function abc(){
//         var dga=20; // Decelaration and initilisation
//         console.log(dga);
//         dga=10;
//         console.log(dga); // In this case the initilisation will move top and print the value 10, it doesn't change the variable name. it change the value and print again
// }
// abc();

// In case we will not decelare in the same scope

// var a;
// // function abc(){
// console.log(a);
// a=1; //In case we will not decelare in the same scope then the decelaration will move at the global level
// }

