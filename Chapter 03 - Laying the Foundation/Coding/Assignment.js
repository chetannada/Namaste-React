// ## Namaste React Course by Akshay Saini
// # Chapter 03 - Laying the Foundation

import React from "react";
import ReactDOM from "react-dom/client";
import "./Assignment.css";
import logo from "./logo.png";
import userIcon from "./user icon.png";
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
// const header = (
//   <div className="Title" key="title">
//     <h1 key="h1">This is h1 tag</h1>
//     <h2 key="h2">This is h2 tag</h2>
//     <h3 key="h3">This is h3 tag</h3>
//   </div>
// );

// Q: Create a functional component of the same with JSX
// const Header = () => {
//   return (
//     <div className="Title" key="title">
//       <h1 key="h1">This is h1 tag</h1>
//       <h2 key="h2">This is h2 tag</h2>
//       <h3 key="h3">This is h3 tag</h3>
//     </div>
//   );
// };

// Q: Pass attribute into the tag in JSX
// const Header = () => {
//   return (
//     <div className="Title" key="title">
//       <h1 style={{color:"blue"}} key="h1">This is h1 tag</h1>
//       <h2 style={{color:"palevioletred"}} key="h2">This is h2 tag</h2>
//       <h3 style={{color:"green"}} key="h3">This is h3 tag</h3>
//     </div>
//   );
// };

// Composition of Component (Add a component inside another)
// const AnotherComponent = function(){
//     return <h2> This is Another Component</h2>
// }

// const Header = () => {
//   return (
//     <div className="Title" key="title">
//       <h1 style={{color:"blue"}} key="h1">This is h1 tag</h1>
//       <h2 style={{color:"palevioletred"}} key="h2">This is h2 tag</h2>
//       <AnotherComponent/>
//       <h3 style={{color:"green"}} key="h3">This is h3 tag</h3>
//     </div>
//   );
// };

// `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.

// const element = <h1>This is React Element</h1>; // This is React element or {TitleComponent}

// const TitleElement = () => {
//   return <h2 style={{ color: "red" }}>This Title Element</h2>;
// }; // This is Title Component

// const Header = () => {
//   return (
//     <div className="Title" key="title">
//       {/* This is {TitleComponent} */}
//       {element}
//       <h1 style={{ color: "blue" }} key="h1">
//         This is h1 tag
//       </h1>
//       {/* This is {<TitleComponent/>} */}
//       <TitleElement/>
//       <h2 style={{ color: "palevioletred" }} key="h2">
//         This is h2 tag
//       </h2>
//       {/* This is {<TitleComponent></TitleComponent>}*/}
//       <TitleElement></TitleElement>
//       <h3 style={{ color: "green" }} key="h3">
//         This is h3 tag
//       </h3>
//     </div>
//   );
// };

/*
Q: Create a Header Component from scratch using Functional Component with JSX
- Add a Logo on Left
- Add a search bar in middle
- Add User icon on right
- Add CSS to make it look nice
*/

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="left">
          <img src={logo} alt="Logo" />
        </div>
        <div className="center">
          <input
            className="input"
            type="text"
            placeholder="Search anything you want..."
          />
          <button type="submit">
            <i class="fa fa-search"></i>
          </button>
        </div>
        <div className="right">
          <img src={userIcon} alt="User Icon" />
        </div>
      </header>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />); // we can also write like this for functional component root.render(Header())
