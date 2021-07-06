//In JavaScript, almost "everything" is an object.

//except primitives, all values in js are objects.

//primitive data type             primitives values

// string                 =           'Hello World'
// number                 =            25
// boolean                =           true/false
// null                   =           it assigned value means nothing. (var name=null)// null
// undefined              =           variable has been declared but not defined. var name; // undifine
//Nan                     =           Nan



//Objects
//But objects can contain many values.

//How to create object

// let school = {
//     name : "Vivekananda School",
//     location : "Delhi",
//     established : "1971",
   
// }
//  console.log(school); //it gives property adn values of whole object 

// There are some type of object access:-

// 1. Dot property accessor or  dot notation

// Syntax:- expression.identifier
  // console.log(school.location); 

//  1.1 The value can be of any type. Let’s add a boolean one: true/false or any datatype

// console.log(school.name); 
// console.log(school.location); 
// console.log(school.established); 
// console.log(school.isAdmin=true); //it add  value
// console.log(school.salary=35000);
// console.log(school);

// 1.2 To remove a property, we can use delete operator: return boolean
  //  console.log(delete school.name); 
// console.log(school.name);

// 1.3 to convert object into array we use:- Object.values()

    // console.log(Object.values(school));

// 1.4 to convert object into string we use:- JSON.stringify()

// console.log(JSON.stringify(school));
//  console.log(typeof(JSON.stringify(school)));  //The result will be a string following the JSON notation:

//2 We can also use multiword property names, but then they must be quoted: or
//Dot property accessor requires identifiers

// let user = {
//     name: "John",
//   //   Surname:"Wick",
//   //   age: 30,
//   //   "likes birds": 'hello' , // multiword property name must be quoted
//   // };

// console.log(user.likes birds); //Unexpected identifier

// 3. Square brackets property accessor
//    Syntax:- expression[expression]

// Note:- The string inside the brackets is properly quoted.

// console.log(user['likes birds']);

// var x =user['likes birds'];
// console.log(x);


// the variable key may be calculated at run-time or depend on the user input. 
// And then we use it to access the property.

// The dot notation cannot be used in a similar way:

// let user = {
//     name: "John",
  //   age: 30
  // };
  
//   let key = prompt("What do you want to know about the user?", "name");
  
//   access by variable
//   alert( user[key] ); // John (if enter "name")

// let user = {
//     name: "John",
//     age: 30
//   };
  
//   let key = "name";
//   alert( user.key ) // undefined

// #Computed properties

//Step-4 let fruit = prompt("Which fruit to buy?", "apple");
//Step-2 let bag = {
//Step-3   [fruit]: 5, // the name of the property is taken from the variable fruit line nuumber 89
// };
// step-1  alert( bag.apple ); 
 
// step-5 So, if a visitor enters "apple", bag will become {apple: 5}.


// #Property existence test, “in” operator

//it’s possible to access any property. There will be no error if the property doesn’t exist!
//Reading a non-existing property just returns undefined. So we can easily test whether the property exists:

// let user = {noSuchProperty:'hello'};//false
// let user = {};//true

// console.log( user.noSuchProperty === undefined );

//There’s also a special operator "in" for that.

//The Syntax is "key" in object

//Example:- 
// let user = { name: "John", age: 30 };

//  console.log( "age" in user ); // true, user.age exists
//  console.log( "blabla" in user ); // false, user.blabla doesn't exist

// # The “for…in” loop

// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//   };
//   for(var i in user){
//       console.log(user[i]);
//   }
  

// Tasks 4

/************************************************************************************************************ */

   // 1.1 Object references and copying

       //   Here we put a copy of message into phrase:

  //  let message = "Hello!";
  //  let phrase = message;
  //  console.log(phrase);  // As a result we have two independent variables, each one storing the string "Hello!".

//    Quite an obvious result, right?
//    Objects are not like that.

// A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.

//When an object variable is copied, the reference is copied, but the object itself is not duplicated.

// let user = { name: "John" };
// let admin = user; // copy the reference<<<<<<<<<<
// admin.address="hello";
// console.log(admin);
// console.log(user);

// Now we have two variables, each storing a reference to the same object:

                        //  .........
                        //  .   N   .
                        //  .   A   .
                        //  .   M   .
        //      /---->  //  .   E    .
        //     /        //  .       .
        //    /         //   ........      
        //   /              // Object
        //  /                         ^
     //    /                          |
   //     /                           |
 //  .........                        |                              
 //  .   E   .               A        |                                 
 //  .   S   .               D   -----|                                      
 //  .   E   .               M                                           
 //  .   R   .               I                                          
 //  .       .               N                                             
 //   ........                                                           
     // user                admin

  //  Example-1
// let user = { name: 'John' };
// let admin = user;
// admin.name = 'Pete'; // changed by the "admin" reference
// console.log(admin); //
// console.log(user); 

//#Comparison by reference
// let a = {};
// let b = a; // copy the reference
//  console.log( a == b ); //true, both variables reference the same object
//  console.log( a === b ); //true


// Example-2

// let a = {name:"hello"};
// let b = {name:"hello"}; // two independent objects
//  // false/true
// console.log( a == b );



//#Cloning and merging, Object.assign

// let user = {
//   name: "John",
//   age: 30
// };
// let clone = {}; // the new empty object
//                 // let's copy all user properties into it
// for (let key in user) {
//   clone[key] = user[key];
// }
// // // now clone is a fully independent object with the same content
// clone.name = "Pete"; // changed the data in it
//  console.log( user.name ); // still John in the original object


//# Object.assign 

//syntax is: Object.assign(dest, [src1, src2, src3...])

//1.1 The first argument dest is a target object.
//1.2 It copies the properties of all source objects src1, ..., srcN into the target dest. 
//1.3 In other words, properties of all arguments starting from the second are copied into the first object.


// let user = { name: "John" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// // copies all properties from permissions1 and permissions2 into user
// Object.assign(user, permissions1, permissions2);
// console.log(user);
// now user = { name: "John", canView: true, canEdit: true }

// OR

// let user = {  
//   name: "John",
//   age: 30
// };

// let clone = Object.assign({}, user);
// console.log(clone);

//#Nested clone

// let user = {
//   name: "John",
//   sizes: {
//     height: 182,
//     width: 50
//   }
// };

// let clone = Object.assign({}, user);

// console.log( user.sizes === clone.sizes ); // true, same object

// // // user and clone share sizes
// user.sizes.width++;       // change a property from one place
//  console.log(clone.sizes.width); // 51, see the result from the other one



     // # this keyword

     // let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//   };

//      To access the object, a method can use the this keyword.
//      In a function definition, this refers to the "owner" of the function.
//      In the example above, this is the person object that "owns" the fullName function.

// It has different values depending on where it is used:
// 1. In a method, this refers to the owner object.

// 2. Alone, this refers to the global object.R
// var x=this;
// console.log(x); // Run this example in crome console

//if we use "use strict" mode in Alone then it is also return [object Window]

// 3. In a function, this refers to the global object.

// function myFun(){return this;} myFun(); Run this example in crome console

// 4. In a function, in strict mode, this is undefined.
// "use strict" 
// function myFun(){return this;} myFun(); run crome

// var user = {
//     firstName: "Mannu",
//     lastName : "Rathod",
//     id       : 5566,
//      fav:["Dhoom","Hayabusha","2021",16],
//     fullName : function() {
//       return this.firstName + " " + this.lastName+ " " +this.fav.join('-');
//       // return this.id;
//     // return user;
//     }
//   };
//   console.log(user.fullName());


    //  OOP's
// #Object Constructors or “this” is not bound

//use the same function in two objects

// Create a Person object

// function Person(first, last, age, eye,price) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
      //  this.discoutedPrice=function(items){
      //    return items*(this.price-20);
      //  };
//   }


// var myFather = new Person("John", "Doe", 50, "blue","500");
// var myMother = new Person("AMit", "Ravi", 20, "red","300");
// // var abc=new Person2("Arun","vishal",35);

// console.log(myFather.firstName); // to print a particular value of object.
// console.log(myMother.firstName); //  it print whole object.

//# Object Types (Blueprints) (Classes)

//Sometimes we need a "blueprint" for creating many objects of the same "type".
// So through the use an object constructor function. we can call the many object to use same function.

// var myMother = new Person("Ravi", "Amit", 20, "blue");
// console.log(myFather.age);
// console.log(`My mother age is ${myMother.age} and my father age is ${myFather.age}`);

//# Add nationality to object

    //  myFather.nationality = "English";
    //  myFather.city="New Delhi";

    //  console.log(myFather.nationality+" "+ myFather.city);
    //  console.log(myFather);

// # Array of Object  

// var car =[
//   {
//     company:'Ford',
//     color: "purple",
//     type: "minivan",
//     registration: new Date('2017-01-03'),
//     "capacity": 7,
//     login : function(){
//           return this.registration;
//     }
//   },

// {
//   company:'Tata',
//       "color": "red",
//       type: "sport",
//       'registration of': new Date('2018-03-03'),
//       capacity: 2,
//       admin : function(){
//         return this.text;
//   }
// }
// ]


// Object of Object
// let cars = ()=>{
//   let abc= { 
//     company:'Ford',
//     color: "purple",
//     type: "minivan",
//     registration: new Date('2017-01-03'),
//     "capacity": 7,
//     login : function(){
//           return this.registration;
//     },
//   }
  
//   let text={
//     color:'red',
//     size:35,
//     price:200,
//   }

//  let xyz= {
//    text:text,
//     company:'Tata',
//     "color": "red",
//     type: "sport",
//     'registration of': new Date('2018-03-03'),
//     capacity: 2,
//     admin : function(){
//       return this.text;
// },
//   }

// return xyz;

// }

// console.log(cars().admin());


  //console.log(cars); // it return whole array of object
  // console.log(this[0]); // it return first array of object minivan
  // console.log(cars[1].admin());// dot.notation it gives a particular value of object
  // console.log(cars[1].['registration of']); //  Square brackets same as dot notaion

// OR
//   let cars ={ 

//  abc: { 
//     company:'Ford',
//     color: "purple",
//     type: "minivan",
//     registration: new Date('2017-01-03'),
//     capacity: 7,
//     login : function(){ 
//           return this.registration;
//     },
//   },
  
//   text:{
//     color:'red',
//     size:35,
//     price:200,
//   },

//    xyz:{
//     // text1:this.text,
//     company:'Tata',
//     color: "red",
//     type: "sport",
//     registration: new Date('2018-03-03'),
//     capacity: 2,
//     admin : function(){
//       return this.text;
// }
//   },

// }

// console.log(cars.xyz.admin.call(cars));
  

  //  loops

  // var cars =[
  
  //   {
  //     company:'Ford',
  //     color: "purple",
  //     type: "minivan",
  //     registration: new Date('2017-01-03'),
  //     capacity: 7,
  //     login : function(){
  //           return this.registration;
  //     }
  //   },

  
  // {
  //       company:'Tata',
  //       "color": "red",
  //       type: "sport",
  //       'registration of': new Date('2018-03-03'),
  //       capacity: 2,
  //       admin : function(){
  //         return this.type;
  //   }
  // }
  // ]

  // 1:- for Loop
  // for(let i=0;i<cars.length-1;i++){
  //   console.log(cars[i].capacity+" "+cars[i].type);  
  //  }

  // using this loop we can access a particular value of both boject like type of of both object return minivan sport. 

   // 2:- For in loop

//    for (var property in cars) {
//   	console.log(property,":",cars[property]);
// }

// this loop can access whole object property and value along with index value

// 3:- forEach loop

// cars.forEach(function (element) {
//   var x= element.type+ " "+ element.company;
//   console.log(x);

//   //   OR    
//   console.log(element.type+" "+element.company);
//    OR
  // console.log(element);
// });


// Add an object at the start using unshift()

// var blackCar=[
//   {
//     'company':'jaguar',
//     "color": "black",
//     "type": "regular",
//     "registration": new Date('2021-03-03'),
//     "capacity": 4
//   },
// ]

// console.log(cars);
// cars.unshift(blackCar);
// console.log(cars);

// Add a new object in the middel splice()

//  var middle=[
//     {
//       'company':'BMW',
//       "color": "black",
//       "type": "regular",
//       "registration": new Date('2021-03-03'),
//       "capacity": 4
//     },
//   ]

//  cars.splice(1, 0, middle);  
//  console.log(cars);

//   {index where to start =1},
//   {how many items to remove =0},
//   {items to add}



// #Accessor properties (Getters and setters)

// In JavaScript, accessor properties are methods that get or set the value of an object. For that, we use these two keywords:

// get - to define a getter method to get the property value.
// set - to define a setter method to set the property value.

 // 1. Getter

//  let user={
//    name:'Amit',
//    lastN:'kumar',
//    age:'24',

//    //accessor property getter
//    get getName(){
//          return this.name+" "+this.age;
//    },
   
//    fullname:function(){
//       return this.name+" "+this.lastN;
//    }

//  };

   // accessing getter methods
  //  console.log(user.getName);

   // trying to access as a method
  // console.log(user.getName()); // it gives us error (getName is not a function)

    // console.log(user.fullname()); // this is function it not give us error


// #Setter :- setter methods are used to change the values of an object.
// let user={
//   name:'Amit',
//   lastN:'kumar',
//   age:24,

//   // accessor property setter
//   set changeName(newName){ // if we put two parameter in changename(newName,newLast) it return syntax error 
//   //                                   Setter must have exactly one formal parameter.
//   //  this.name=newName;
//   //  this.lastN=newName;
  
//   // Alternative OR
//    [this.name, this.lastN, this.age] = newName.split(" ");
//    this.age=+(this.age);
//   },
  
// };

// // change(set) object property using a setter
// console.log(`${user.name}`);

    // user.changeName="Ravi";
    // user.changeName="Panchal"

// Alternative OR
    // user.changeName = "Ravi Panchal 35";
    // console.log(`New name is : ${user.name} ${user.lastN} ${user.age}`);
    // console.log(typeof(user.age));
    

    // #Object.defineProperty()
  //we can also use Object.defineProperty() method to add getters and setters.

  // The static method Object.defineProperty() defines a new property directly on an object,
  //  or modifies an existing property to an object, and returns the object.

  // let user={
  //     name:'Amit',
  //     lastN:'kumar',
  //     age:'24',
  // };

  // object (user) The first argument is the objectName.
// prop (name) The second argument is the name of the property.
// descriptor (Object.defineProperty(){} ) The third argument is an object that describes the property.

  // getting property
// Object.defineProperty(user, "getname", {
//     get : function () {
//         return this.name;
//     }
// });
// console.log(user.getname);

// setting property  'object'  'prop'
// Object.defineProperty(user, "changeName", {  //descriptor
//     set : function (newName) {
//         this.name = newName;
//     }
// });

// console.log(user.name);

// // // changing the property value
// user.changeName = 'Vishal';
// console.log(user.name); // Sarah


// setting a name property using object.defineProperty()

// let user={
//   name:'Amit',
//   lastN:'kumar',
//   age:'24',
//   get new(){
//     return this.name;
//   }
// };
// Object.defineProperty(user,'new',{
//   get : function () {
//     return this.name;
// },
// // value:'Ravi',

// });

// console.log(user.new); // change the name of user property name.





// #prototype
// prototype is the concept where we can add property and method outside of the constructor function

// function Person(first, last, age, eye) {

//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }

//   var myFather = new Person("John", "Doe", 30, "blue");
// var myMother =new Person("Amit","kumar","Single",24);

// console.log(myFather);
// // console.log(myMother);

// // # Prototype constructor

// // adding property to constructor func tion
// Person.prototype.nationality="Indian";
// Person.prototype.country="China";// it make an prototype object and add the property and value in that object.

// prototype value of Person
// console.log(Person.prototype);
// console.log(myFather);
// console.log(myMother);

// inheriting the property from prototype
// console.log(myFather.nationality);

// # Add Methods to a Constructor Function Using Prototype

// adding a method to the constructor function
// greet is a method

// Person.prototype.greet = function() {
//   console.log('hello' + ' ' +  this.firstName);
// }

// myFather.greet(); // hello John

// # Prototype Inheritance

// let animal = {
//   eats: 'i am eating',
//   drink:'i am drinking',
// };

// let children={
//   plays:'i am smiliing',
//   eats:'i am eating'
// }
// let rabbit = {
//   jumps: 'i am jumping'
// };

// multiple inheritance is not possible
// Example:- if there are A, B and C objects now C inherit form the B and A, B and A hava a same property called eats
// now we have to print A property eats using refferal of C now C get confused to fetch A.eats and B.eats.
// rabbit.__proto__ = animal;
// // rabbit.__proto__=children;
// console.log(rabbit.eats);
// console.log(rabbit.drink);
// console.log(rabbit,children,animal);

// # Multilevel inheritance
// children.__proto__ = animal;
// rabbit.__proto__=children;
// console.log(rabbit.drink);


//# for-in loop
// rabbit.__proto__=children;

// children.__proto__=animal;
// for(var x in children){
//   console.log(children[x]);
// }

//# hasOwnProperty();

// let animal = {
//   eats: true
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal
// };

// for(let prop in rabbit) {
//   let isOwn = rabbit.hasOwnProperty(prop);

//   if (isOwn) {
//     console.log(`Our: ${prop}`); // Our: jumps
//   } else {
//     console.log(`Inherited: ${prop}`); // Inherited: eats
//   }
// }

// # F.prototype
// let animal = {
//   eats: true
// };

// function Rabbit(name) {
//   this.name = name;
// }

// Rabbit.prototype = animal;

// let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

// console.log(rabbit.eats );


