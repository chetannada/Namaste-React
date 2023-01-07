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
import React from 'react';
import ReactDOM from 'react-dom/client';

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
const heading = React.createElement(
  "div",
  {
    className: "header",
    key: "header",
  },
  [React.createElement(
    "div",
    {
      key: "Title",
    },
  "Title"), React.createElement(
    "ul",
    {
      key: "ul",
    },
  [React.createElement(
    "li",
    {
      key: "Home",
    },
  "Home"),React.createElement(
    "li",
    {
      key: "About Us",
    },
  "About Us")])]
)

  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(heading);
  