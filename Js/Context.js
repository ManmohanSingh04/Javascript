// #Context 

// context tells us the reference exactly of the immediate object which calling it.

// ===================1. This keyword =========================

  // Case-1:- if we print this in browser then the context of this keyword is window.

//   Example-1:- this // it return window in browser.

//   Example-2:- function abc(){} abc(); // In this the context is window in browser, because this reffers to the immediate object which is calling it.

  // Case-2:-  If we print this keyword within a editor then the context become of this keyword is global. 

//   Example-1:- 
    //   console.log(this);// it return {} (empty object)it depends with respect to which we are executing. 
    // like at client side it exxcuting window object and at service side it executing global object or Empty object {}.


    // Example-2:-
    // var data={
    //     a:1,
    //     b:2,
    //     fn:function(){console.log(this);}
    // }
    // data.fn(); // In this example, we are calling this function with respect to data object. that's why it return {a: 1, b: 2, fn: ƒ}.

//  Example-3:- 
// a=6;
//     var data={
//         a:1,
//         b:2,
//         fn:function(){console.log(this.a);} 
//     } 
//     data.fn(); 
//     var fn1=data.fn;  // In this we are reference data.fn() to immediate object which is fn1.// We are assiging data.fn to fn1 which is declared globally so now the context has been changed from data to global, and now since there is no a varible is present in global it will print undefined
//     fn1();
    // OR
    // window.fn1(); fn1() and window.fn1() both are same.
    // In this we are calling fn1(); with respect to window object that's why it return window.


    // Example-4:- 

//     var a=2; var b=3;
//     var obj={
//         a:1,
//         b:2,
        
//         childObj:{
//             c:3,  // In this the context of this is childObj that's why c:3. 
//             add:function(){
//                 console.log(this); // In this it return {c: 3, add: [Function: add]} the child object because this call the childObj.
//                 // console.log(this.a+" "+this.b+" "+this.c); // In this it return (undefined undefined 3) because variable a and b is not define in childObj.
//         }
//     }
// }
// obj.childObj.add();

// var fn=obj.childObj.add;
// fn();
// var mob=obj.childObj.add.bind(obj);
// mob();

// var mon2=obj.childObj.add.bind(obj.childObj);
// mon2();




// Example-5:- If we want to run this program in browser then a and b need to decelare by var lke var a=1: var b=3;, and if we using at file level then we don't need to decelare a and b. like a=2; b=3;

//  a=2;  b=3;
//     var obj={
//         a:1,
//         b:2,
//         childObj:{
//             c:3,  
//             add:function(){
//                 console.log(this.a+" "+this.b+" "+this.c); 
//         }
//     }
// }
// var sum=obj.childObj.add;
// sum() // it return (2 3 undefine) because sum is calling window and varible a and b are define at window level and c is define at local level so this keyword is not capable to access the c that's why variable a and b is 2 and 3 and c is undefine.

// ============================#2.Call()=====================================

// Call main jo value send karte hai wo comma seperated hoti hai.

// Example-6:- In this example you have to execute fn1 with respect to result.
// Note:- In this there are three context data and result. 

//  var data={
//      a:1,
//      b:2,
//      fn:function(){console.log(this);}
//  }

// var result={
//   a:3,
//   b:5
// };

// var fn1=data.fn;
// fn1.call(result); // we have to call the function to another context and pass the value of another context.
// // we have to call the fn1 to result context and pass the value of result.
// fn1.call(data); 

// Caller and Calli.
//In var case caller is the main(or king) which is used to called and calli is the called by caller. 
// Example:-  data.fun() // In this, data is caller and fn() is the calli
// Example:- fn1() is the calli and window is the caller, So it will write window.dn1() both are same


// Example-7:-

// var fullname=function(){console.log(+this.firstname+" " +this.lastname);}
// var bioData={firstname:"Manmohan", lastname:"Singh"}
// fullname.call(bioData"); // It return Manmohan Singh, In this we call bioData WRT fullname

// Example-8:- Pass an arrgument
// var fullname=function(greeting){console.log(greeting+" "+this.firstname+" " +this.lastname);}
// var bioData={firstname:"Manmohan", lastname:"Singh"}
// fullname.call(bioData,"Hello"); // It return Hello Manmohan Singh
// OR
// fullname("Bye")//Bye undefined undefined

// =========================#3. Apply()====================

// Or apply main jo value send karte hai wo simple array hota hai jisske andar hamare pass sari value hoti hai. 

// var fullname=function(greeting,b){console.log(greeting+" "+b+" "+this.firstname+" " +this.lastname);}
// var bioData={firstname:"Manmohan", lastname:"Singh"}
// fullname.apply(bioData,["hi","Hello"]); 

//=========================#4.Bind()===================

// Bind ke case main function turant call nahi hota, bind binding bana ke chhod deta hai(jaise new function bana kar deta hai or uska this set hota hai) and to latest stage par function use kar sakte hai jisaki this already set hogi. Iss main this bioData ko represent kar rha hai.


// var fullname=function(greeting){console.log(greeting+" "+this.firstname+" " +this.lastname);}
// var bioData={firstname:"Manmohan", lastname:"Singh"}

// var pname=fullname.bind(bioData);
// pname("Hi");

// var pNameFn={firstname:"Rahul",lastname:"Rathore"};
// var p=fullname.bind(pNameFn);
// p("Hi");

// Jo bind function main object pass kiya hai usake context se function ko bind kar deta hai.
// Jab ham bind use karte hai to usako hame alag function main store karwana padata hai or usake baad ham function ko future main use kar sakte hai. 

// const mode = {
//   x: 42,
//   getX: function() {
//     return this.x;
//   }
// };

// const unboundGetX = mode.getX; // Purana wala 
// // OR meaning of mode.getX
// // const unboundGetX = function() {
// //   return this.x;
// // };
// console.log(unboundGetX()); // The function gets invoked at the global scope
// // expected output: undefined

// const boundGetX = unboundGetX.bind(mode); // new = purana+mode(unboundGetx mode ke sath mixed karke jo function return ho rha hai usko boundGetx main store karwa rha hai or purana change nahi hoga)
// console.log("Hello",unboundGetX()); 
// console.log(boundGetX());
// expected output: 42

// hamko bind bar bar use nahi karna padta or new function ko bar bar use karsakte hai.
// =======================# Clouser=================
// function greet(){
//   var name="Manmohan";
//   return function(){
//     console.log("Hi"+name);
//   }
// }

// var greetMe=greet();
// greetMe; // it return ƒ (){console.log("Hi"+name);}
// greetMe();// it return Hi Manmohan


// Example:-
  // function add(mul){
  //   return function(x){
  //     return mul*x;
  //   }
  // }

  // var add1=add(10);
  // add1(2); // it return 20

