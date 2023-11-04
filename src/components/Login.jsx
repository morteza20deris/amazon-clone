import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import amazonLogo from "../Assets/amazon-logo-black.png";
import { auth } from '../Services/firebase';
import "./Login.css";
function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const formSubmitHandler = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(()=>navigate('/'))
            .catch(err=>alert(err.code.replace("-"," ").replace("auth/","")))
    }

    const registerButtonHandler = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(()=>navigate('/'))
            .catch(err=>alert(err.code.replaceAll("-"," ").replace("auth/","")))
    }
  return (
      <div className='login'>
          <Link to="/"><img className='login__logo' src={amazonLogo} alt="amazon logo" /></Link>
          <div className="login__container">
              <h1>Sign In</h1>
              <form className='login__form' action="submit" onSubmit={formSubmitHandler} >
                  <h5>Email</h5>
                  <input id='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} type="email" />
                  {email ==='' && <p>Email is Required</p>}
                  <h5>Password</h5>
                  <input id='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} type="password" />
                  {password === '' && <p>Password is Required</p>}
                  {password.length <8 && <p>Password must be at least 8 characters long</p>}
                  <button type='submit' className='login__signInButton'>Sign In</button>
              </form>
              <button onClick={registerButtonHandler} className='login__registerButton'>Create Account</button>
          </div>
    </div>
  )
}

export default Login