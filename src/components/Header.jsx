import React from "react";
import logo from "/images/troll-face.png";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="troll-face" className="logo-img" />
        <div className="logo-text">Meme Generator</div>
      </div>
      <div className="about">React Course - Project 3</div>
    </header>
  );
}

export default Header;
