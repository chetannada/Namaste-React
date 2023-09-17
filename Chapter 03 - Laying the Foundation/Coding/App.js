// ## Namaste React Course by Akshay Saini
// # Chapter 03 - Laying the Foundation

/*
 * This are the feature of Parcel
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev abd Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking
 *
 *
 * Transitive Dependencies
 */

// imported react and reactdom from nodemodule folder
// import {React, createElement as ce} from 'react';
import React from "react";
import ReactDOM from "react-dom/client";

// Create Header element like navbar using createElement
/*
 * 
<div class="header">
<h1>Title</h1>
<ul>
<li>Home</li>
<li>About Us</li>
</ul>
 * 
 * 
 */
// createElement as ce
// const heading = ce(
//   "div",
//   {
//     className: "header",
//     key: "header",
//   },
//   [ce(
//     "h1",
//     {
//       key: "Title",
//     },
//   "Title"), ce(
//     "ul",
//     {
//       key: "ul",
//     },
//   [ce(
//     "li",
//     {
//       key: "Home",
//     },
//   "Home"),ce(
//     "li",
//     {
//       key: "About Us",
//     },
//   "About Us")])]
// )

// create header element using JSX
// JSX produces React.createElement by use of babel
// babel produces React.createElement from JSX 
// JSX => React.createElement produces an Object => Object is converted in to HTML  => HTML (DOM) (React converted to HTML and put it into in our DOM )(babel does all the conversion)

// JSX is HTML like code inside Javascript (not HTML inside Javascrpt )
// (looks link HTML not HTML )
// babel is compiler of next generation javascript (jsx)

// advantages of JSX 
// 1. Readability
// 2. less code
// 3. no repetition
// 4. maintainability
// 5. developer friendly

const heading = (
  <h1 id="h1" key="h1">
    This is JSX
  </h1>
);

// React Component
// Functional component - new way of writing component
// Class component - old way of writing component

// Title component is functional component
// name of component starts wit capital letter - it's not mandatory 

const Title = () => {
   (
    <h1 id="title" key="title">
      Namaste React
    </h1>
  );
};

// Header component is functional component
const HeaderComponent = function () {
  return (
    <div>
      <Title /> {/* we can also use <Title()> only calling this function */} {/* in case of function */}
      {heading}  {/* only this if it is a variable */}
      {/* we can also use <Title></Title> */}
      {console.log("any JS CODE")}
      {1+2}
      <h1>Namaste React Functional component</h1>
      <h2>This is h2 tag</h2>
    </div>
  );
};
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<HeaderComponent />); // when we render functional component

root.render(heading); // when we render our react element 