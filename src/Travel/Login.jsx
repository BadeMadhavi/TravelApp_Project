import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css"
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault()
    localStorage.setItem('email', email)
    localStorage.setItem('password', password)
    alert("data save into localstorage")
    navigate('/triplist')
  }

  const handlePassword = () => {
    navigate('/forgotpassword')
  };

  return (
    <div className="login-container">
      <h2 className="login-header">Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label className="form-label">E-mail:</label>
          <input
            type="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Write your email or phone"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <p className="forgot" onClick={handlePassword}>
          Forgot password?
        </p>
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
      <p className="signup-text">   Don't have an account?
     <span  className="signup-btn" onClick={() => navigate('/login')}> Sign Up </span>
      </p>
      </div>

  )
}

export default Login;
