// Q-1 Write a javascript function named is_integer which checks if the passed argument is 
// an integer. You can use any mathematical operator or functions defined in the Math 
// object.

// function is_integer(a){
//     if(typeof(a)==="number"){
//         console.log("it is integer");
//     }
//     else{
//         console.log("it is not integer");
//     }
// }

// is_integer("6");

// Q-2 Using the forEach function defined for an array, find the sum of the array of numbers. 
// (function add_all(arr){...})

// let a=[5,7,3,5,1];
// let sum=0;
// for(var i=0;i<a.length;i++){
//     sum=sum+a[i];
// }
// or
// a.forEach(Element=>{
//    sum= sum+Element;
// })
// console.log(sum);

// Q-3 Write a JavaScript program to convert temperatures to and from celsius, 
// Fahrenheit. [ Use the formula : c/5 = (f-32)/9, where c = temperature in celsius 
// and f = temperature in Fahrenheit]

// function temp(f){ 
//     let c;
//   return c=((f-32)/9)*5;
// }

// console.log(temp(40));


// function sum(a,b){
//     let add=a+b;
//   return add;   
// }
// console.log(sum(5,3));
// console.log(sum(10,20));

// Q-4 Write a factorial function that returns the factorial of a given number, n. Make sure you return the 
// calculated value and not just print it.
// Ans

//5!=5*4*3*2*1=120

// function factorial(n){

//     let fact=1;
//     for(var i=1;i<=n;i++){
//         fact =fact*i;
//     }
//     return fact;
// }

// console.log(factorial(5));

// Q-5 Write a javascript function that converts a given amount of money into coins of denominations (1, 2, 5, 10 and 25). 
// You may choose to print the coin denominations used on the console. E.g.convert_to_coins(87) should print 25 25 25 10 2.

//Ans

// const convert=(n)=>{
//     while(n>0){
//     if(n>=25){
//         console.log(25);
//         n=n-25; //n=62 //n=37 // n=12
//     }
//     else if(n>=10){
//         console.log(10);
//         n=n-10; // 2
//     }
//     else if(n>=5){
//         console.log(5);
//         n=n-5;
//     }
//     else if(n>=2){
//     console.log(2);
//     n=n-2; //n=0
// }
// else{
//     console.log(1);
//     n=n-1;
// }

// }
// }
// convert(87);

//Q-6 Write a program to find whether a number is odd or even if; odd print odd else print even.

// let print=(n)=>{
//     if(n%2==0){
//         console.log("Even");
//     }
//     else{
//         console.log("Odd");
//     }
//    return
// }

// print(6);

//Q-7 Write a program find the area of the circle and parimeter as well. use arrow function and backtick to print the result.

// const p=3.14;
// let area=(n)=>{

//     let a=p*(n*n);
//     let pari=2*p*n;
//     return `${a} and ${pari}`;
    
// }
// console.log(area(5));


