// import React from 'react'
// import './CSS/LoginSignup.css'
// // import logo from '../Assets/logo.jpg'
// import logo from '../Components/Assets/logo.jpg';



// const LoginSignup = () => {
//   return (
//     <div className='loginsignup'>
//       <div className="loginsignup-container">
//         <h1>Sign Up</h1> <br></br>
      
//         <div className="logo-section">
//           <img src={logo} alt="Shopping Bag" />
//           <h4>VastraVogue</h4>
          
//         </div>
        
        
//         <div className="loginsignup-fields">
//           <input type="text" placeholder='Your name' />
//           <input type="email" placeholder='Email Address' />
//           <input type="password" placeholder='Password' />

//         </div>
//         <button>Continue</button>
//         <p className="loginsignup-login">Already have an account?
//           <span>Login Here</span>
//         </p>

//         <div className="loginsignup-agree">
//           <input type="checkbox" name=''  id='' />
//           <p>By continuing , I agree to the terms of use and privacy policy</p>
//         </div>
//       </div>
      
//     </div>
//   )
// }

// export default LoginSignup;

import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate and useLocation

const LoginSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    // On successful login, redirect the user back to the previous page or home
    const redirectTo = location.state?.from || '/'; // Default to '/' if no previous location exists
    navigate(redirectTo);
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginSignup;
