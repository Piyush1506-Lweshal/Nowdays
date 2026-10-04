import React from "react";
import "./navbar.css";
import Nowdays from "../../assets/images/Nowdays logo.png";

const Navbar = () => {
  return (
    <>
      <div className="bar">
        <div className="nav-bar">
          <div className="logo">
            <img
              src={Nowdays}
              alt="Web-image"
              height={"60px"}
              width={"60px"}
            />
          </div>
          <div className="nav-links">
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Travel Guide</li>
              <li>Notes</li>
              <li>Destination Plan</li>
              <li>Next Plan</li>
              <li>Memories</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
