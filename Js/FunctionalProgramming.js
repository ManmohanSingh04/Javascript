// Return a number
//  function sum(a,b){
//      return a+b;
//  }

//  const sum1=(a,b)=>a+b;

//  // Return an Object

//  const bioData=()=>({

//     firstName:"MAnnu",
//     lastName:"Singh",
//  });
 
// // Or Both way are correct to creat function.(One is arrow and another named function)
//  function bioData(){
//      return{
//         firstName:"MAnnu",
//         lastName:"Singh",
//      };
//  }
 
//  // Return a number with Debug

//  function sum(a,b){
//      console.log(a,b);
//      return a+b;
//  }
// sum(2,3);
//Return a string

// function hello(){
//     return "Hi";
// }
// console.log(hello());


// const hello=function(){ // This is anonymous function
//     return "Hello";
// }
// console.log(hello());

const hello=()=> console.log("Hi"); "Hello1"; // This is arror function. Ask here (Why Hi is print and Hello1 is not print);
// //Or
// const hello=()=> {
//     console.log("hi");
//     return "Hello1"; 
// }
console.log(hello());

// const hello=(value)=>console.log(value);
// hello();

// ===================# Spread Operator===========================

// const arr=["a","b","c"];

// const arr1=arr;
// arr1[0]="Hi";
// console.log("1>> ",arr,arr1); // Isame ham arr ka copy bana rahe hai arr1 main or arr1 ka zero index modify kar rahe hai, then isame arr and arr1 ka zero index dono hi modify ho rahe hai. Iss problem ko kam karne ke liye ham slice or spread operator ka use karte hai.


// const arrCopy=arr.slice();
// arrCopy[0]="Hello";
// console.log("2>> ",arr,arrCopy); // Isame arr ka zero index same rahega but arrCopy ka zero index modify ho jayega.

// const arrCopy1=[...arr]; // This is spread operator.
// arrCopy1[0]="Bye";
// console.log("3>> ",arr,arrCopy1); // it is same as slice (Isame arr ka zero index same rahega but arrCopy ka zero index modify ho jayega.)

// ===================# Rest Operator===========================

// const [first,second,...arr2]=["a","b","c","d"];
// console.log("3>> ",first,second,arr2);// Rest operator main first and second as a arrgument pass kiya hai orr baaki rest main hai, then console main a and b to print ho jayega or baaki bache element rest operator(arr2) main chale jayenge.

// Output a,b ["c","d"] // issame a and b string hi hai, console main print ho rahe hai iss liye hame quotes nahi dikh rahe hai.

// OR
// function Name(a,b,c,...hello){
//     console.log(hello);
//     return null;
// }
// Name(1,2,3,4,5,6,7,8);

// OR

// function myFun(a,  b, ...manyMoreArgs) {
//     console.log("a", a)
//     console.log("b", b)
//     console.log("manyMoreArgs", manyMoreArgs)
//   }
  
//   myFun("one", "two", "three", "four", "five", "six")
  
  // Console Output:
  // a, one
  // b, two
  // manyMoreArgs, ["three", "four", "five", "six"]

//Ask 

//   const getTotalFortuneOfTenRichest = (richPeople) => {
//     richPeople.sort(
//         (first, second) => first.money - second.money
//     );

//     let sum = 0;

//     for (let i = 0; i < richPeople.length; i++) {
//         sum += richPeople[i].money;

//         if (i >= 10) {
//             return sum;
//         }
//     }
// };

// const getTotalFortuneOfTenRichest1 = (richPeople) => (
//     [...richPeople]
//         .sort((first, second) => first.money - second.money)
//         .slice(0, 10)
//         .reduce((total, person) => total + person.money, 0)
// );


// ============#Map=========

// The map() method creates a new array with the results of calling a function for every array element.(Jo hamare pass array hai usko hi call karke new array create kar deta hai.)

// The map() method calls the provided function once for each element in an array, in order.

// Note: map() does not execute the function for array elements without values.

// Note: this method does not change the original array.

// Stntax:- array.map(function(currentValue, index, arr), thisValue)

// Argument	          Description
// currentValue	      Required. The value of the current element(Jiss array ko use kar rahe hai uski value batata hai)

// index	            Optional. The array index of the current element
// arr               	Optional. The array object the current element belongs to (ye hame batata hai ki kiss array ko use kar rahe ho.)

// const doubleMap =number=>{ // This line can be written as [const doubleMap=function(number){}] both are same
//   const double=[];
//   for(let i=0;i<number.length;i++){
//     double.push(number[i]*2);
//   }
//   return double;
// }
// var data=[2,3,4];
// console.log(doubleMap([2,4,8]));
// console.log("1 >>",doubleMap(data)); // The number passed in data as an reference not a primitive.
// console.log(data);


// const doubleMap1=(number)=>{
//   return number.map((item,i,arr)=>{ // In this item points toward to data and i stands for index value
//     console.log("Map >> ",item,i);

// return item*2;
//   });
// }
// console.log(doubleMap1(data));

// const arr=data.map((item,i)=>{
//   console.log("arr map >>",item,i);
//   return item*2; // If you return inside i will keep pushing into the new array which is created arr; In tis you can return anything.
// });
// console.log("arr >>",arr);


// ==========================#Filter==============================

// The filter() method creates an array filled with all array elements that pass a test (provided as a function).
// Note: filter() does not execute the function for array elements without values.

// Note: filter() does not change the original array.

// Syntax:- array.filter(function(currentValue, index, arr), thisValue)

// var data=[1,2,3,4,5,6,7,8,9,10];

// const filterFun=(item)=>{
//   if(item%2===0){
//     return true;
    
//   } 
// };

// const newfn=data.filter(filterFun);
// console.log(newfn);


// ======================#Find===========================
// Ask why i is here
// var data = [{
//     name: "Chirag",
//     fullName: "Chirag Goel",
//     age: "X"
// }, {
//     name: "Ram"
// }, {
//     name: "John"
// }, {
//     name: "Man",
// }];
// const findFn = (item,i) => { //ask here why i is here
//     if (item.name === "Chirag") {
//         // return false; //it return undefine
//         // OR
//         return item;// It return { name: 'Chirag', fullName: 'Chirag Goel', age: 'X' }.
//         //OR
//         // return item.name; //It return { name: 'Chirag', fullName: 'Chirag Goel', age: 'X' }.
//         //OR
//         // return i; //It return { name: 'Chirag' }
//         // OR
//         // return true; //It return { name: 'Chirag', fullName: 'Chirag Goel', age: 'X' }
//     }
// };

// const findNum = data.find(findFn);

// console.log(findNum);


//=========================#Reduce============================

// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// Syntax:- array.reduce(function(accumulator, currentValue, currentIndex, arr), initialValue)

// accumulator:- The accumulator accumulates callbackFn's return values.(Accumulator callbackFunction ke return value ko jama karta hai, or single value data ka output dena)
// currentValue:- it show the value of data Array.
// currentIndex:- it show the index of data Array.
// arr:- it return array of data.
// initialValue:- ye accumulator ko value deta hai.(Agar ham initial value pass na kare to accu ki value aaary(data=[2,3,4]) ka first element ho jayegi like 2).

//Example:- 
// var data=[2,3,4];
// let sum =data.reduce((accu,curr)=>{ // isame accum ki value 2 hogi and curr ki value 3 hogi after addition accu ki value 5 ho jayegi or curr ki value 4 hogi, or ye jab tak chalta jayega tabtak addition complete nahi ho jata.

//   return accu+curr;
// },0) // Agar ham intitial value provide karte hai to accu ki value 0 ya 1 (jo ham chahe wo value initial main pass kar sakte hai or object bhi pass kar sakte hai.) ho jayegi or curr ki value 2. suppose we put the value of initial value is 1 then accu value is 1 and curr value is 2 after addition accu value become 3 and curr value will 3.

// console.log(sum);

// Example:- 
// const summation=number=>{

//   const sum=[];

//   for(let i=0;i<number.length;i++){
//     sum+=number[i];
//   }
//   return sum;
// }

// const summation1=number=>{
//   const sum=number.reduce((acc,item)=>{

//     var add=acc+item;
//     return add;
//   },0);

//   return sum;
// }

// console.log(summation1(data));


// =======

// var data = [{
//     name: "Chirag",
//     fullName: "Chirag Goel",
//     age: "X"
// }, {
//     name: "Ram"
// }, {
//     name: "John"
// }, {
//     name: "Man",
// }];


// const reduce2=items=>items.reduce((accu,items)=>{
//   accu.push(items.name);
//   // console.log(accu);
//   return accu;
// },[])

// console.log(reduce2(data));

//# Shared state and side effect

// const x={
//   val:2
// };

// const x1=()=>x.val=x.val+1; // or  const x1=(m)=>m.val=m.val+1;
// const x2=()=>x.val=x.val*2; // or  const x2=(m)=>m.val=m.val+1;
// const x3=()=>x.val=x.val*2; // or  const x3=(m)=>m.val=m.val+1;

// console.log(x1()); //3   or// console.log(x1(x));
// console.log(x2()); //6   or// console.log(x1(x));
// console.log(x3()); //12  or// console.log(x1(x));

// console.log(x.val); // 12

// #Function composition  // Ask By Amit

// const compose = function (fn1, fn2) {
//     return  function (value) {
//         return fn3(fn2(fn1(value)));
//     };
// };
// const log = () => { 
//     // ... 
// };
// const mul = () => { 
//     // ... 
// };

// const output = compose(log, mul) (1);

// log(mul(1, 2));

// compose(f1, f2, f3, f3, f4) (1,2);

// const compose = (...fns) => (initialVal) => fns.reduceRight((val, fn) => fn(val), initialVal);
// compose(console.log, Math.sqrt) (9);


// # First Class Function

// // Assign function to a variable
// const square = function(x) {
//     return x * x;
// }
// // prints 25
// square(5);

// // Pass as parameter

// function formalGreeting() {
//     console.log("How are you?");
//   }
//   function casualGreeting() {
//     console.log("What's up?");
//   }
//   function greet(type, greetFormal, greetCasual) {
//     if(type === 'formal') {
//       greetFormal();
//     } else if(type === 'casual') {
//       greetCasual();
//     }
//   }
//   // prints 'What's up?'
//   greet('casual', formalGreeting, casualGreeting);
//   formalGreeting.data = "mydata";


//   // return functions

//   function sayHello() {
//     return function() {
//        console.log("Hello!");
//     }
//  }

//  console.log(sayHello());

// #Currying 

// When a function, insted of taking all arguments at one time, takes the first one and return a new functon, that takes the second one and return a new function which take the third one, and so fourth until all arguments have been fulfilled.

// Example:- 
// function sum(num1){
//   // console.log(num1);
//   return function(num2){
//     // console.log(num1+num2);
//     return function(num3){
//       console.log(num1+num2+num3);
//     }
//   }
// }
// sum(3)(5)(8);

// Now we doin by currying function

// const sum= num1=>num2=>num3=>console.log(num1+num2+num3); // Isame ek function dusare function ko return kar rha hai.(isame num1,num2 and num3 function hain.)
// sum(5)(3)(8);


