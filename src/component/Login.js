
// import React, { useState } from 'react';
// import './Login.css'
// <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>


// const LoginForm = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState('');



//   const handleLogin = (e) => {
//     e.preventDefault();
//     onLogin({ username, password });
//   };
//   const handleSignup = (e) => {
//     e.preventDefault();
//     console.log('Handling signup click');
//     window.location.href = './SignUpForm'; 
//   };
  
//   return (
//     <div className="login-box">
//       <form onSubmit={handleLogin}>
//         <h3>Login Form</h3>
//         <label>
//           Username:
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </label>
//         <label>
//           Password:
//           <div className="password-input">
//             <input
//               type={showPassword ? 'text' : 'password'}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <i
//               onClick={() => setShowPassword(!showPassword)}
//               className={`eye-icon ${showPassword ? 'visible' : ''}`}
//             >
//               👁️
//             </i>
//           </div>
//         </label>
//         <div className='btn'>
//         <button type="submit">Login</button>
//         <button onClick={handleSignup} type="button">Sign up</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;
import React, { useState } from 'react';
import './Login.css';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin({ username, password });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      alert('Password and confirm password do not match');
      return;
    }

    // Handle signup logic here if needed
    console.log('Signing up with:', { username, email, password });
  };

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="login-box">
      {isSignUp ? (
        <form onSubmit={handleSignup}>
          <h3>Sign Up Form</h3>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
         
          <label>
            Password:
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i
                onClick={() => setShowPassword(!showPassword)}
                className={`eye-icon ${showPassword ? 'visible' : ''}`}
              >
                👁️
              </i>
            </div>
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Confirm Password:
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          <div className='btn'>
            <button type="submit">Sign up</button>
            <button onClick={toggleSignUp} type="button">Back to Login</button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleLogin}>
          <h3>Login Form</h3>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Password:
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i
                onClick={() => setShowPassword(!showPassword)}
                className={`eye-icon ${showPassword ? 'visible' : ''}`}
              >
                👁️
              </i>
            </div>
          </label>
          <div className='btn'>
            <button type="submit">Login</button>
            <button onClick={toggleSignUp} type="button">Sign up</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default LoginForm;




