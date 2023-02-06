import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navLogo">
        <img src="public/assets/DeVx.svg" alt="" />
      </div>

      <div className="navOptions">
        <Link to="/">community</Link>
        <Link to="/">About</Link>
        <Link to="/">Events</Link>
        <a href="#faqs">Faqs</a>
      </div>

      <div className="navAuth">
        <Link to="/sign-in">Login</Link>
        <button className="startFree">Start Free</button>
      </div>
    </div>
  );
};

export default Navbar;
