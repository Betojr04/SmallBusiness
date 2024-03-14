import React, { useState } from "react";
import "../styles/nav.css";
import logo from "../assets/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";

export const Nav = () => {
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className="nav-section">
      <img className="svg" src={logo} alt="logo" />
      <div className="menu-icon">
        <GiHamburgerMenu onClick={openMenu} />
      </div>

      <div className="nav-items">
        {menu && (
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Cart</a>
            </li>
            <li>
              <a href="/">Checkout</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/create-account">Create Account</a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};
