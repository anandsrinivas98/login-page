import user from '../assets/person.png'
import email from '../assets/email.png'
import password from '../assets/password.png'
import react from 'react'
import './signups.css'

function Register() {
  return (
  <div className='container'>
    <div className="header">
      <div className="text">Sign Up</div>
      <div className="underline"></div>
    </div>
    <div className="inputs">
      <div className="input">
        <img src={user} alt="USER NAME NOT FOUND" />
        <input type="text" placeholder="Username" />
      </div>
      <div className="input">
        <img src={email} alt="" />
        <input type="email" placeholder="Email" />
      </div>
      <div className="input">
        <img src={password} alt="PASSWORD" />
        <input type="password" placeholder="Password" />
      </div>
      </div>
      <div className="forget-password">
        Forget Password? <span>click here!!</span>
      </div>
      <div className="submit-container">
      <div className="submit">Sign Up</div>
      <div className="submit">Login</div>
      </div>
  </div>
  );
}

export default Register;
