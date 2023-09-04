// in HTML File
// in this react DOM tree Looks like this
// <div id="container">
//   <h1 id="title"  style: {
    //   background: "red",
    // },
    // className: "title",>heading</h1>
//   <h1 id="title">heading1</h1>
// </div>

// using javascript to HTML DOM manipulation
// Manipulate the HTML DOM using Javscript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);


// Manipulate the HTML DOM using React
// Create nested React Elements
// it create a html element in browser and data "heading"

const heading = React.createElement(
  "h1",
  {
    id: "title",  // inside h1 tag 
    style: {
      background: "red",
    },
    className: "title",
  },
  "heading"
);

const heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "heading1"
);
// create a div element with id container and append heading,heading1 inside it
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading1]
);




// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(container);

// if there is already written in html file then react.render will overwrite that id element with react element