import "./Login.css";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className='login-wrapper'>
        <div className="login-wrapper-logo">
          <Link to="/"><img src="energyHQ Logo.png" alt="" width="200rem" /></Link>
          <h1>Welcome to energyHQ!</h1>
          <p>Please enter your credentials</p>
        </div>
        <div className="login-body">
          <h1>Log In</h1>
          <form className='login-form'>

            <input
              type="email"
              id='email'
              name="email"
              placeholder="Email"
              required
            />
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                id='password'
                name="password"
                placeholder="Password"
                required
              />
              <span className="password-visibility-toggle" onClick={handleShowPassword}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>

            <button type="submit">Log In</button>
          </form>
        </div>
      </div>
    </>

  );
}

export default Login;