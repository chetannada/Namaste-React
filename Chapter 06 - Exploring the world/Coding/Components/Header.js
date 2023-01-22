import { useState } from "react";
import FoodFireLogo from "../Images/Food Fire Logo.png";

// Title component for display logo
const Title = () => (
  <a href="/">
    <img className="logo" src={FoodFireLogo} alt="Food Fire Logo" />
  </a>
);

// if user LoggedIn return true otherwise false

// Header component for header section: Logo, Nav Items
const Header = () => {
  // use useState for user logged in or logged out
  const [isLoggedin, setIsLoggedin] = useState(true);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <li>
            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button onClick={() => setIsLoggedin(false)}>Logout</button>
            ) : (
              <button onClick={() => setIsLoggedin(true)}>Login</button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
