// Q1. What is the difference between Java & JavaScript?
// Answer
// Java	                                         JavaScript
// Java is an OOP programming language.   |  JavaScript is an OOP scripting language.
// It creates applications that run in    |  The code is run on a browser only.
// a virtual machine or browser.	
// Java code needs to be compiled.	      |   JavaScript code are all in the form of tex

// Q-2 What is JavaScript, and Where is it Used? 

// Q-3 What are the different data types present in javascript?
// Q-4 Why Javascript is single Threaded ?
// Q-5 What is event actual?

// Q-6 
// 6.1 What will be the output of below code? 
// 6.2 What change should made to print 1, 2, 3.?  
// 6.3 What is the other way to do the above question ?
// [Hint :- Try to relate this with clouser]
// var i;
// for(i=0;i<3;i++){
//     // console.log("ouside SetOut "+i)
//     setTimeout(function(){
//     console.log("inside SetOut "+i)
       
//     },0)
// }


 // Ans 6.1 is 3 3 3 // In this, value of i first print 0,1,2 and setTimeout function wait until all value of i print 
//  and  when i=0,1,2 then setTimeout update our value one by one while value of i was printed..

 // Ans 6.2 is first change the datatype, convert var into let and initilise i=1 and i<=3 then 1, 2, 3 will be print
 // Ans 6.3  The other way to print above question is while loop

//  Using IIFE

// for(var i=0; i<3; i++)
//  {
//   (function(){
//   setTimeout(()=> console.log(i), 300)
//   })();
// };

// using let

// for(var i=0; i<3; i++){ 
//     setTimeout(()=> console.log(i), 1000);
// }  


// Using Bind

// for(var i=0; i<10;i++) {
//     setTimeout(console.log.bind(console,i), 1000);//null or console u can write both
//   };
  
