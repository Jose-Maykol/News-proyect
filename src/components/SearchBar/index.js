import React from "react";
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className="search">
      <button className="search-icon"><i class="bi-search"></i></button>
      <input type="text" name="search" id="search" placeholder=" Buscar noticia"/>
    </div>
  );
}
 
export default SearchBar;