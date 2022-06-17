import React from "react";
import './Header.css'
import NavBar from "../NavBar";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        NEWS
      </div>
      <div className="header-box">
        <div className="header-searchLogin">
          <SearchBar />
          <div className="header-login">
            <Link to="/login">
              <span >Iniciar sesión</span>
            </Link>
          </div>
        </div>
        <NavBar />
      </div>
    </header>
  );
}

export default Header;