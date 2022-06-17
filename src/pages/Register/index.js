import React, { useState } from "react";
import { auth } from "../../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import './Register.css'

const Register = () => {

  const [errorCreateAccount, setErrorCreateAccount] = useState(false);
  const [registerData, setRegisterData] = useState({
    email: '',
    password: '',
    confirmPassword:'',
  });

  const {email, password, confirmPassword} = registerData;

  const [errorData, setErrorData] = useState( {
    emailError: '',
    passwordError: ''
  });

  const {emailError, passwordError} = errorData;


  const handleChange = e => {
    setRegisterData(
      {
        ...registerData,
        [e.target.name]: e.target.value
      }
    )
  }

  //falta comprobar que las dos contrasenas sean iguales

  const handleSubmit = e => {
    e.preventDefault();
    validateData();
    if (Object.keys(errorData).length === 0 || (emailError.length === 0 && passwordError.length=== 0)) {
      console.log('Registrando ...');
      createUserWithEmailAndPassword(auth, email, password)
        .then( res => {
          console.log(res.user);
          setRegisterData({
            email: '',
            password: '',
            confirmPassword: '',
          }); 
          setErrorCreateAccount(false);
        })
        .catch( e => {
          console.warn(e.message); 
          setErrorCreateAccount(true)
        })
    } else {
      console.log('Datos invalidos ...');
      setErrorCreateAccount(false)
    }
  }

  const validateData = () => {
    const error = {};
    const regexEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/i;
    if (!email) {
      error.emailError = "Correo es requerido";
    } else if (!regexEmail.test(email)) {
      error.emailError = "Correo no valido";
    }
    if (!password || !confirmPassword) { 
      error.passwordError = "Contraseña es requerida";
    }
    if (password.length <= 6 && confirmPassword.length <=6) {
      error.passwordError = "La contraseña debe tener mas de 6 digitos";
    }
    if (password !== confirmPassword) {
      error.passwordError = "Las contraseñas no coinciden";
    }
    setErrorData(error);
  }

  return ( 
    <div className="register-container">
      <div className="image-container">
        <img src="/img/login.jpg" alt="" />
      </div>
      <div className=" form-container">
        <h3> Bienvenido a <span> NEWS </span></h3>
        <h1>REGISTRATE</h1>
        { errorCreateAccount === true 
          ? 
            <div className="register-alert"> El correo ya esta registrado !!! </div> 
          :  null
        }
        <form className="register-form" onSubmit={handleSubmit}>
          <input 
            className="register-input" 
            type="email" 
            name="email" 
            id="register-email" 
            placeholder="Correo electronico"
            onChange={handleChange}
            value={email}
          />
          <p className="register-error" >{emailError}</p>
          <input 
            className="register-input" 
            type="password" 
            name="password" 
            id="register-password" 
            placeholder="Contraseña"
            autoComplete="on"
            onChange={handleChange}
            value={password}
          />
          <p className="register-error">{passwordError}</p>
          <input 
            className="register-input" 
            type="password" 
            name="confirmPassword" 
            id="register-confirmPassword" 
            placeholder="Contraseña"
            autoComplete="on"
            onChange={handleChange}
            value= {confirmPassword}
          />
          <p className="register-error">{passwordError}</p>
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
}
 
export default Register;