import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../Assets/logo.png";
import useIsOnline from "../hooks/useIsOnline";


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isOnline = useIsOnline();
  const cartItems = useSelector((store) => store.cart.items);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`relative border-2 border-b-cyan-700 bg-emerald-100 text-black px-4 py-2 ${
        !isOnline ? "pointer-events-none" : ""
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <div className="flex items-center">
            <img className="w-12" alt="Logo" src={Logo}></img>
            <span className="ml-2 font-bold text-rose-800 text-2xl">SnackDash</span>
          </div>
        </Link>
        <h1 className={`text-xl font-semibold text-black text-center flex-grow hidden md:block ${
          isMobileMenuOpen ? "hidden" : "block"
        }`}>
          Hey there! Order your favorite food now.
        </h1>
        <nav className={`flex items-center ${isMobileMenuOpen ? "hidden" : "flex"}`}>
          <div className="md:hidden">
            <button
              type="button"
              className="text-black"
              onClick={toggleMobileMenu}
            >
              <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"} fa-2x`}></i>
            </button>
          </div>
          <ul className={`flex-col md:flex-row space-x-0 md:space-x-8 text-lg hidden md:flex`}>
            <li className="font-sans">
              <Link to="/about-us">
                <span className="ml-2 font-semibold">About Us</span>
              </Link>
            </li>
            <li className="font-sans">
              <Link to="/cart">
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="ml-2 font-semibold">Cart ({cartItems?.length})</span>
              </Link>
            </li>
            <li className="font-sans">
              <Link to="/sign-in">
                <span className="ml-2 font-semibold">Sign In</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-10 flex justify-end p-4">
          <div className="bg-white p-4 rounded-lg space-y-4 text-lg w-48">
            <button
              type="button"
              className="text-black ml-auto"
              onClick={toggleMobileMenu}
            >
              <i className="fas fa-times fa-2x"></i>
            </button>
            <ul className="space-y-4">
              <li className="font-sans">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="font-semibold">Home</span>
                </Link>
              </li>
              <li className="font-sans">
                <Link to="/about-us" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="font-semibold">About Us</span>
                </Link>
              </li>
              <li className="font-sans">
                <Link to="/cart" onClick={() => setIsMobileMenuOpen(false)}>
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span className="ml-2 font-semibold">Cart ({cartItems?.length})</span>
                </Link>
              </li>
              <li className="font-sans">
                <Link to="/sign-in" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="font-semibold">Sign In</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
