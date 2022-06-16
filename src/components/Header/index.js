import React from "react";
import './Header.css'
import NavBar from "../NavBar";
import SearchBar from "../SearchBar";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        NEWS
      </div>
      <div className="header-box">
        <div className="header-searchLogin">
          <SearchBar/>
          <div className="header-login">
            <a href="/">Iniciar sesión</a>
          </div>
        </div>
        <NavBar/>
      </div>
    </header>
  );
}

export default Header;