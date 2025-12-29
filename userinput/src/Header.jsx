import React from 'react'
import logo from "./assets/image.png";
import "./header.css";
function Header() {
  return (
    <header className="header">
        <img src={logo} alt="Logo" />
        <a> Home</a>
    </header>
  )
}

export default Header
