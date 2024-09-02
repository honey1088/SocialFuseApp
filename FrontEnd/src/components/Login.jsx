
import React, { useContext } from 'react'
import { AuthenticationContext } from '../context/AuthenticationContext';

const Login = ({setIsLoginBox}) => {

  const {setEmail, setPassword, login} = useContext(AuthenticationContext);

  const handleLogin = async (e) =>{
    e.preventDefault();
    await login();
  }

  return (
    <form className="authForm">
        <div className="form-floating mb-3 authFormInputs">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="floatingInput">Email address</label>
        </div>
            <div className="form-floating mb-3 authFormInputs">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /> 
            <label htmlFor="floatingPassword">Password</label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleLogin}>Sign in</button>

        <p>Don't have an account? <span onClick={()=> setIsLoginBox(false)}>SignUp</span></p>
    </form>
  )
}

export default Login
