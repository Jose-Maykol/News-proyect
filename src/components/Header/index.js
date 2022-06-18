import React from "react";
import './Header.css'
import NavBar from "../NavBar";
import SearchBar from "../SearchBar";
import UserBar from "../UserBar";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        NEWS
      </div>
      <div className="header-box">
        <div className="header-searchLogin">
          <SearchBar />
          <UserBar />
        </div>
        <NavBar />
      </div>
    </header>
  );
}

export default Header;