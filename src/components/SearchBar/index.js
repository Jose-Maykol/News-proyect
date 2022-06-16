import React, { useContext } from "react";
import './SearchBar.css'
import { ApiContext } from '../../context';

const SearchBar = () => {

  const { Current, setLimitCurrent } = useContext(ApiContext);

  const getLimitNews = (e) => {
    let filter = Current.filter(ele => ele.title.includes(e.target.value))
    if (e.target.value.length === 0) {
      setLimitCurrent(null)
    } else {
      setLimitCurrent(filter)
    }
  }

  return (
    <div className="search">
      <button className="search-icon"><i className="bi-search"></i></button>
      <input type="text" name="search" id="search" placeholder="Buscar noticia" onChange={getLimitNews} />
    </div>
  );
}

export default SearchBar;