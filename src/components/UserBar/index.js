import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { SuscriptionContext } from '../../context/SuscriptionContext'
import { signOut } from 'firebase/auth'
import { auth } from '../../services/firebase'
import './UserBar.css'

const UserBar = () => {
  
  const { bool } = useContext(SuscriptionContext)
  const { currentUser } = useContext(AuthContext)

  const handleClick = () => {
    signOut(auth)
      .then(() => {
        console.log('Usuario se deconecto ...')
      })
      .catch((e) => console.log(e.message))
  }

  return (
    <div className='header-login'>
      {currentUser ? (
        <div className='content-user'>
          <p className='current-user'> {currentUser.email}</p>
          <button className='user-logout' onClick={handleClick}>
            <i className='bi bi-arrow-bar-right'></i>
          </button>
          { bool ? (
            <Link to='/save'>
              <i className='bi bi-bookmark'></i>
            </Link>
          ): (
            <Link to='/subcribe'>
            <span>Suscribirse</span>
          </Link>
          )}
        </div>
      ) : (
        <div className='content-user'>
          <Link to='/login'>
            <span>Iniciar sesión</span>
          </Link>
          {
             bool ? null
             : (
              <Link to='/login'>
                <span>Suscribirse</span>
              </Link>
             )
          }

        </div>
      )}
    </div>
  )
}

export default UserBar
