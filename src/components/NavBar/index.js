import React, { useContext } from 'react'
import './NavBar.css'
import { ApiContext } from '../../context/ApiContext'
import { Link } from 'react-router-dom'

const NavBar = ({ active }) => {
  const { getCategoryNews } = useContext(ApiContext)

  return (
    <nav className={`navbar-box ${active}`}>
      <Link to='/'>
        <span>Home</span>
      </Link>
      <Link to='/category' onClick={() => getCategoryNews('science')}>
        <span>Science</span>
      </Link>
      <Link to='/category' onClick={() => getCategoryNews('sports')}>
        <span>Sports</span>
      </Link>
      <Link to='/category' onClick={() => getCategoryNews('technology')}>
        <span>Technology</span>
      </Link>
    </nav>
  )
}

export default NavBar
