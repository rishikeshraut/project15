import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./components/signup";
import LoginPage from "./components/loginPage";
import Home from "./components/home";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   NavLink,
//   Routes,
// } from "react-router-dom";
// import SignupPage from "./components/signup";
// import LoginPage from "./components/loginPage";
// import MovieListPage from "./components/MovieListPage";
// import CompanyInfo from "./components/CompanyInfo";

// const App = () => {
//   return (
//     <Router>
//       <nav>
//         <ul>
//           <li>
//             <NavLink exact to="/">
//               Signup
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/login">Login</NavLink>
//           </li>
//           <li>
//             <NavLink to="/company-info">Company Info</NavLink>
//           </li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route exact path="/" component={SignupPage} />
//         <Route path="/login" component={LoginPage} />
//         <Route path="/movieList" component={MovieListPage} />
        
//       </Routes>
//       <Route path="/company-info" component={CompanyInfo} />
//     </Router>
//   );
// };

// export default App;
