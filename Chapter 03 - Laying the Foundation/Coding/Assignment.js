// ## Namaste React Course by Akshay Saini
// # Chapter 03 - Laying the Foundation

import React from "react";
import ReactDOM from "react-dom/client";

// Q: Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")
// const header = React.createElement(
//   "div",
//   {
//     className: "Title",
//     key: "title",
//   },
//   [
//     React.createElement(
//       "h1",
//       {
//         key: "h1",
//       },
//       "This is h1 Tag"
//     ),
//     React.createElement(
//         "h2",
//         {
//           key: "h2",
//         },
//         "This is h2 Tag"
//       ),
//       React.createElement(
//         "h3",
//         {
//           key: "h3",
//         },
//         "This is h3 Tag"
//       )
//   ]
// );

// Q: Create the same element using JSX
const header = (
  <div className="Title" key="title">
    <h1 key="h1">This is h1 tag</h1>
    <h2 key="h2">This is h2 tag</h2>
    <h3 key="h3">This is h3 tag</h3>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);
