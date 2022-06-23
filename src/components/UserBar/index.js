import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { signOut} from "firebase/auth";
import { auth } from "../../services/firebase";
import './UserBar.css'

const UserBar = () => {

  const {currentUser} = useContext(AuthContext);

  console.log(currentUser);

  const handleClick = () => {
    signOut(auth).then(
      () => {
        console.log( 'Usuario se deconecto ...' );
      }
    ).catch( e => console.log(e.message))
  }

  return (
    <div className="header-login">
    { 
      currentUser
      ? (
        <div className="content-user">
          <p className="current-user"> {currentUser.email}</p>
          <button className="user-logout" onClick={handleClick}>
            Cerrar sesión
          </button>
        </div>
      )
      : (
        <Link to="/login">
        <span >Iniciar sesión</span>
        </Link>
      )
    }
    </div>
  );
}
 

export default UserBar;