// How call stack work.
// Example:-
// Step 1:- console.log("A");
// Step 2:- function third(){console.log("B")};
// Step 3:-function second(){third()};
// Step 4:-function first(){second()};
// Step 5:-first();


// Step 6:-function sita(){console.log("C");};
// Step 7:-function ram(){sita()};
// Step 8:-function ravan(){ram()};
// Step 9:-ravan();


// In this Step-1 will call first then it will go step-5 and then 4,3,2 then print B after all execution has complete it return back, it return step 2,3,4 and then it will go to step-9 abd repeate like first function and callStack become empty.

// how it will work 
// we have 
// 1. call Stack.
// 2. Web Api.
// 3. Callback Queue.

//We know that javascript execute program line by line, to sabse phele console.log("B") execute hoga and callstack main jayega, jaise hi  console.log("B") ka kaam khatam hoga then setTimeout call hoga and miove kar jayega Web Api mian and wait karega 3 second. jab tak console.log("C") call stack mian call hokar aa jayega and after 3 second setTimeout callback Queue chala jayega or callback Queue check karega callstack empty hai ya nahi agar empty hai to setTimeout ko call kar dega or A print ho jaye. and then callstack empty ho jayega.

// =====#setTimeout
// Execute a specified block of code once after a specified time has elapsed.

// it give us two parameter one is function name and another is time.
// setTimeout(function, milliseconds)

// console.log("B");
// setTimeout(function(){console.log("A");},3000);
// console.log("C");

// Example: setTimeout(()=>setInterval(()=>{console.log("A")},3000),5000) // It will take 8 second total(first it call setTimeout and then it move setInterval and then after 3 second A will print repeatly).

// =======#clearTimeout
// Finally, if a timeout has been created, you can cancel it before the specified time has elapsed by calling clearTimeout(), passing it the identifier of the setTimeout() call as a parameter. So to cancel our above timeout, you'd do this:

// Example:- 

// function sayHi(who) {
//   alert(`Hello ${who}!`);
// }
// let myGreeting = setTimeout(sayHi, 2000, 'Mr. Universe');
// clearTimeout(myGreeting);

// =======#setInterval()
//Ans Execute a specified block of code repeatedly with a fixed time delay between each call.

// =======#Clearing intervals
// If we want to stop the SetInterval execution then clearInterval is use
// clearInterval(myGreeting);


// ======#requestAnimationFrame()

// it is a specialized enqueueing function created for running animations efficiently in the browser. It runs a specified block of code before the browser next repaints the display, allowing the execution to be paired with the device's display frame rate.

// =======#Fetch API








// // // import React,{useState} from "react";
// // // import "./Specialoffer.css";
// // import Card from "./Card";

// // // let Specialoffer = () => {
// // //   const [widgets, setWidget] = useState({
// // //   "results": [{
// // //     "title": "Moisturiser",
// // //     "mrp": "$7.00",
// // //     "discounted_price": "$6.00",
// // //     "image": "images/of16.png",
// // //     "quantity": 0,
// // //     "selectedQuantity": 0,
// // // }, {
// // //     "title": "Lady Finger(250 g)",
// // //     "mrp": "$8.00",
// // //     "discounted_price": "$6.00",
// // //     "image": "images/of17.png",
// // //     "quantity": 2,
// // // }, {
// // //     "title": "Ribbon(1 pc)",
// // //     "mrp": "$10.00",
// // //     "discounted_price": "$7.00",
// // //     "image": "images/of18.png",
// // //     "quantity": 2,
// // // }, {
// // //     "title": "Grapes(500 g)",
// // //     "mrp": "$11.00",
// // //     "discounted_price": "$6.00",
// // //     "image": "images/of19.png",
// // //     "quantity": 2
// // // }, {
// // //     "title": "Clips(1 pack)",
// // //     "mrp": "$12.00",
// // //     "discounted_price": "$6.00",
// // //     "image": "images/of20.png",
// // //     "quantity": 4
// // // }, {
// // //     "title": "Conditioner(250 g)",
// // //     "mrp": "$18.00",
// // //     "discounted_price": "$16.00",
// // //     "image": "images/of21.png",
// // //     "quantity": 5
// // // }, {
// // //     "title": "Cleaner(250 kg)",
// // //     "mrp": "$17.00",
// // //     "discounted_price": "$16.00",
// // //     "image": "images/of22.png",
// // //     "quantity": 6
// // // }, {
// // //     "title": "Gel(150 g)",
// // //     "mrp": "$14.00",
// // //     "discounted_price": "$10.00",
// // //     "image": "images/of22.png",
// // //     "quantity": 0
// // // }],
// // // "moreAvailable": true,
// // // "demand": "High Demand",
// // // });

// // // const loadMore = () => {
// // // const newWidgets = {
// // //   results: [{
// // //     "title": "New Clips(1 pack)",
// // //     "mrp": "$12.00",
// // //     "discounted_price": "$6.00",
// // //     "image": "images/of20.png",
// // //     "quantity": 4
// // // }, {
// // //     "title": "New Conditioner(250 g)",
// // //     "mrp": "$18.00",
// // //     "discounted_price": "$16.00",
// // //     "image": "images/of21.png",
// // //     "quantity": 5
// // // }, {
// // //     "title": "New Cleaner(250 kg)",
// // //     "mrp": "$17.00",
// // //     "discounted_price": "$16.00",
// // //     "image": "images/of22.png",
// // //     "quantity": 6
// // // }, {
// // //     "title": "New Gel(150 g)",
// // //     "mrp": "$14.00",
// // //     "discounted_price": "$10.00",
// // //     "image": "images/of22.png",
// // //     "quantity": 0
// // // }],
// // // "moreAvailable": false,
// // // };
// // // setWidget(oldState => {
// // // return {
// // //   ...oldState,
// // //   results: [...oldState.results, ...newWidgets.results],
// // //   moreAvailable: newWidgets.moreAvailable,
// // // }
// // // });
// // // }

// const renderItems = (items) => {
//   return (
//     <>
//       <div className='text-center row p-4'>Demand: {widgets.demand}</div>
//       {
//         items.map((item) => {
//           return (
//             <Card
//               image={item.image}
//               mrp={item.mrp}
//               discountedPrice={item.discounted_price}
//               title={item.title}
//               quantity={item.quantity}
//             />
//           )
//         })
//       }
//       <div className='text-center'>
//         {
//           widgets.moreAvailable ? (
//             <span onClick={loadMore}>Load more</span>
//           ) : null
//         }
//       </div>
//     </>
//   )
// };

// // //   return (
// // //     <>
// // //       <div class="container ">
// // //         <div class="speci">
// // //           <h3>Special Offers</h3>
// // //           <div class="ser-t">
// // //             <b></b>
// // //             <span>
// // //               <i></i>
// // //             </span>
// // //             <b class="line"></b>
// // //           </div>
// // //         </div>
// // //         <div class="row cen-row">
// // //         {renderItems(widgets.results)};
// // //       </div>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default Specialoffer;

// // import React,{useState} from "react";

// import React, { useState } from "react";
// import "./Specialoffer.css";
// const Heading = () => {
//   return (
//     <div class="spec ">
//       <h3>Special Offers</h3>
//       <div class="ser-t">
//         <b></b>
//         <span>
//           <i></i>
//         </span>
//         <b class="line"></b>
//       </div>
//     </div>
//   );
// };

// const ItemWidget = (props) => {
//   const { title, image, mrp, discountedPrice, rating, quantity } = props;
//   return (
//     <div class="col-md-3 pro-1">
//       <div class="col-m">
//         {/* <a
//           href="#"
//           data-toggle="modal"
//           data-target="#myModal18"
//           class="offer-img"
//         > */}
//           <img src={image} class="img-responsive" alt="" />
//         {/* </a> */}
//         <div class="mid-1">
//           <div class="women">
//             <h6>
//               <a href="single.html"> {title}</a>
//             </h6>
//           </div>
//           <div class="mid-2">
//             <p>
//               <label>{mrp}</label>
//               <em class="item_price">{discountedPrice}</em>
//             </p>
//             <div class="block">
//               <div class="starbox small ghosting"> {rating}</div>
//             </div>
//             <div class="clearfix"></div>
//           </div>
//           <div class="add">
//             <button
//               class={`btn my-cart-btn my-cart-b ${
//                 quantity === 0 ? "disabled" : ""
//               }`}
//               data-id="1"
//               data-name="product 1"
//               data-summary="summary 1"
//               data-price="4.50"
//               data-quantity="1"
//               data-image="images/of17.png"
//             >
//               {quantity === 0 ? "Out of stock" : "Add to Cart"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const SpecialOffers = () => {
//   const [widgets, setWidget] = useState({
//     results: [
//       {
//         title: "Moisturiser",
//         mrp: "$7.00",
//         discounted_price: "$6.00",
//         image: "images/of16.png",
//         quantity: 0,
//         selectedQuantity: 0,
//       },
//       {
//         title: "Lady Finger(250 g)",
//         mrp: "$8.00",
//         discounted_price: "$6.00",
//         image: "images/of17.png",
//         quantity: 2,
//       },
//       {
//         title: "Ribbon(1 pc)",
//         mrp: "$10.00",
//         discounted_price: "$7.00",
//         image: "images/of18.png",
//         quantity: 2,
//       },
//       {
//         title: "Grapes(500 g)",
//         mrp: "$11.00",
//         discounted_price: "$6.00",
//         image: "images/of19.png",
//         quantity: 2,
//       },
//       {
//         title: "Clips(1 pack)",
//         mrp: "$12.00",
//         discounted_price: "$6.00",
//         image: "images/of20.png",
//         quantity: 4,
//       },
//       {
//         title: "Conditioner(250 g)",
//         mrp: "$18.00",
//         discounted_price: "$16.00",
//         image: "images/of21.png",
//         quantity: 5,
//       },
//       {
//         title: "Cleaner(250 kg)",
//         mrp: "$17.00",
//         discounted_price: "$16.00",
//         image: "images/of22.png",
//         quantity: 6,
//       },
//       {
//         title: "Gel(150 g)",
//         mrp: "$14.00",
//         discounted_price: "$10.00",
//         image: "images/of22.png",
//         quantity: 0,
//       },
//     ],
//     moreAvailable: true,
//     demand: "High Demand",
//   });

//   const loadMore = () => {
//     const newWidgets = {
//       results: [
//         {
//           title: "New Clips(1 pack)",
//           mrp: "$12.00",
//           discounted_price: "$6.00",
//           image: "images/of20.png",
//           quantity: 4,
//         },
//         {
//           title: "New Conditioner(250 g)",
//           mrp: "$18.00",
//           discounted_price: "$16.00",
//           image: "images/of21.png",
//           quantity: 5,
//         },
//         {
//           title: "New Cleaner(250 kg)",
//           mrp: "$17.00",
//           discounted_price: "$16.00",
//           image: "images/of22.png",
//           quantity: 6,
//         },
//         {
//           title: "New Gel(150 g)",
//           mrp: "$14.00",
//           discounted_price: "$10.00",
//           image: "images/of22.png",
//           quantity: 0,
//         },
//       ],
//       moreAvailable: false,
//     };
//     setWidget((oldState) => {
//       return {
//         ...oldState,
//         results: [...oldState.results, ...newWidgets.results],
//         moreAvailable: newWidgets.moreAvailable,
//       };
//     });
//   };

//   const renderItems = (items) => {
//     return (
//       <>
//         <div className="text-center row p-4">Demand: {widgets.demand}</div>
//         { 
//             items.map((item) => {
//                 return (
//                 <ItemWidget
//                 image={item.image}
//                 mrp={item.mrp}
//                 discountedPrice={item.discounted_price}
//                 title={item.title}
//                 quantity={item.quantity}
//               />
//             )})
//         }
//         <div className="text-center">
//           {widgets.moreAvailable ? (
//             <span onClick={loadMore}>Load more</span>
//           ) : null}
//         </div>
//       </>
//     );
//   };
// //   const loading = (items2) => {
// //     items2.map((item) => {
// //       return (
// //         <ItemWidget
// //           image={item.image}
// //           mrp={item.mrp}
// //           discountedPrice={item.discounted_price}
// //           title={item.title}
// //           quantity={item.quantity}
// //         />
// //       );
// //     });
// //   };
//   return (
//     <div>
//       <div class="product">
//         <div class="container">
//           <Heading />
//           <div class="con-w3l">
//            { renderItems(widgets.results)}
//               {/* <Card/>
//               <Card/>
//               <Card/>
//               <Card/>
//               <Card/>
//               <Card/>
//               <Card/>
//               <Card/> */}
//             <div class="clearfix"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SpecialOffers;


