import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css"
function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/login")
    localStorage.setItem("fullName", formData.fullName)
    localStorage.setItem("email", formData.email)
    localStorage.setItem("password", formData.password)
    alert("Form data saved to local storage")
  }

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState)
  }

  return (
    <div className="signup">
      <div className="signup-container">
        <h2 className="signup-heading">Sign Up</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="formgroup">
            <label>Full name:</label>
            <input  type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full name"
          
            />
          </div>
          <div className="formgroup">
            <label>E-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-mail"
           
            />
          </div>
          <div className="formgroup">
            <label>Password</label>
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="password-input"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={togglePasswordVisibility}
                aria-label="Toggle password visibility"
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
          </div>
          <button type="submit" className="signup-button">
            SIGN UP
          </button>
          <p className="login-link">
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignUp;
