// import React, { useState } from "react";
// import "./signUp.css";
// import Login from "./loginPage";
// import { Link, useNavigate } from "react-router-dom";

// const SignupPage = () => {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [profession, setProfession] = useState("");
//   const loginGate = useNavigate();

//   const handleSignup = (e) => {
//     e.preventDefault();
//     debugger;
//     const userData = {
//       name,
//       password,
//       email,
//       phone,
//       profession,
//     };
//     console.log("userData", userData);
//     // Store data in local storage
//     localStorage.setItem("userData", JSON.stringify(userData));

//     console.log("data submitted on local storage");
//     loginGate("/Login");

//     // Clear form fields after signup
//     setName("");
//     setPassword("");
//     setEmail("");
//     setPhone("");
//     setProfession("");
//   };

//   return (
//     <div className="main">
//       <h1>User Signup</h1>
//       <form onSubmit={handleSignup}>
//         <input
//           className="s1"
//           type="text"
//           id="name"
//           placeholder="Sign-up_name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <br />
//         <br />
//         <input
//           className="s1"
//           type="password"
//           id="password"
//           placeholder="signup_password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <br />
//         <br />
//         <input
//           className="s1"
//           type="email"
//           id="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <br />
//         <br />
//         <input
//           className="s1"
//           type="tel"
//           id="phone"
//           placeholder="Enter mobile_no"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           required
//         />
//         <br />
//         <br />
//         <select
//           className="s1"
//           id="profession"
//           value={profession}
//           placeholder="Proffession"
//           onChange={(e) => setProfession(e.target.value)}
//           required
//         >
//           <option className="s1" value="">
//             Proffession Select
//           </option>
//           <option value="Developer">Developer</option>
//           <option value="Designer">Designer</option>
//           <option value="Writer">Writer</option>
//         </select>
//         <br />
//         <br />
//         <button type="submit">Signup</button>{" "}
//         <Link to="/Login" style={{ color: "white", textDecoration: "none" }}>
//           {" "}
//           Login
//         </Link>{" "}
//       </form>
//     </div>
//   );
// };

// export default SignupPage;


import React, { useState } from 'react';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [profession, setProfession] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    // Store user data in local storage
    localStorage.setItem('name', name);
    localStorage.setItem('password', password);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('profession', profession);

    // Redirect to login page
    window.location.href = '/login';
  };

  return (
    <div>
      <h2>User Signup</h2>
      <form onSubmit={handleSignup}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required /><br/><br/>

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br/><br/>

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br/><br/>

        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required /><br/><br/>

        <label htmlFor="profession">Profession:</label>
        <select id="profession" value={profession} onChange={(e) => setProfession(e.target.value)} required>
          <option value="">Select Profession</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          {/* Add more options here */}
        </select><br/><br/>

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupPage;
