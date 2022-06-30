import React, { useState } from 'react'
import './Header.css'
import NavBar from '../NavBar'
import SearchBar from '../SearchBar'
import UserBar from '../UserBar'
import { Link } from 'react-router-dom'

const Header = () => {
  const [activeMenu, setactiveMenu] = useState('hidden')

  const handleClick = () => {
    activeMenu === 'hidden' ? setactiveMenu('active') : setactiveMenu('hidden')
  }

  return (
    <header className='header'>
      <div className='header-logo'>
        <Link to='/'>RPANews</Link>
      </div>
      <div className='header-box'>
        <div className='header-searchLogin'>
          <SearchBar />
          <UserBar />
        </div>
        <div className='header-navbar'>
          <button onClick={handleClick}>
            <i className='bi bi-list'></i>
          </button>
          <NavBar active={activeMenu} />
        </div>
      </div>
    </header>
  )
}

export default Header
