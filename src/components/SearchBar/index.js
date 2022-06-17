import React, { useContext } from "react";
import './SearchBar.css'
import { ApiContext } from '../../context';
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {

  const { Current, setLimitCurrent } = useContext(ApiContext);
  let navigate = useNavigate();

  const getLimitNews = (e) => {
    if (e.keyCode === 13) {
      let filter = Current.filter(ele => ele.title.includes(e.target.value));
      setLimitCurrent(filter)
      navigate("/search", { replace: true })
      e.target.value = "";
    }
  }
  return (
    <div className="search">
      <button className="search-icon"><i className="bi-search"></i></button>
      <input type="text" name="search" id="search" placeholder="Buscar noticia" onKeyDown={getLimitNews} />
    </div>
  );
}

export default SearchBar;