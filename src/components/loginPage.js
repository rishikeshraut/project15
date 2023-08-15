import React, { useState } from "react";
import "./loginPage.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const naviGate = useNavigate();

  const handleLogin = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData && userData.name === name && userData.password === password) {
      // Successful login
      setErrorMessage("login succesfully");
      naviGate("/home");

      // Move to the next screen or do any other action
    } else {
      // Invalid credentials
      setErrorMessage("Invalid Credentials");
    }
  };

  return (
    <div className="tas">
      <h2>Login</h2>
      <input
        className="tas1"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="tas1"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Log In</button>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Login;

// import React, { useState } from 'react';

// const LoginPage = () => {
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Retrieve user data from local storage
//     const storedName = localStorage.getItem('name');
//     const storedPassword = localStorage.getItem('password');

//     if (name === storedName && password === storedPassword) {
//       // Redirect to movie list page
//       window.location.href = '/movieList';
//     } else {
//       setErrorMessage('Invalid Credentials');
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required /><br/><br/>

//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br/><br/>

//         <button type="submit">Login</button>
//       </form>
//       {errorMessage && <p>{errorMessage}</p>}
//     </div>
//   );
// };

// export default LoginPage;
