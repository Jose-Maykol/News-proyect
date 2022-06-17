import React from "react";
import './Login.css'

const Login = () => {
  return ( 
    <div className="login-container">
      <div className="image-container">
        <img src="/img/login.jpg" alt="" />
      </div>
      <div className=" form-container">
        <h3> Bienvenido a <span> NEWS </span></h3>
        <h1>INICIA SESION</h1>
        <form className="login-form" action="">
          <input 
            className="login-input" 
            type="email" name="" 
            id="login-email" 
            placeholder="Correo electronico"
          />
          <input 
            className="login-input" 
            type="password" name="" 
            id="login-password" 
            placeholder="Contraseña"
            autoComplete="on"
          />
          <a id="retrieve" href="/">¿Te olvidastes tu contraseña?</a>
          <button type="submit">Ingresar</button>
          <p id="create"> ¿Aún no tienes cuenta?<a href="/"> Create una cuenta aqui. </a></p>
        </form>
      </div>
    </div>
   );
}
 
export default Login;