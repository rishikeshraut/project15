// import React from "react";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Myselg from "./myselg";

// function Home() {
//   const [data, setData] = useState();
//   const [isHide, setIsHide] = useState(true);

//   const naviGate = useNavigate();
//   const getData = async () => {
//     // const api = await axios.post("https://hoblist.com/amovieListpi/");
//     // setData(api.data.response);
//     // console.log(api.data);
//     // naviGate("https://hoblist.com/amovieListpi/");
//     //window.location.href = "https://hoblist.com/amovieListpi/";
//   };
//   useEffect(() => {
//     getData();
//   }, []);

//   // var details = {
//   //   Company: "Greeks",
//   //   Address: "Bhopal",
//   //   Phone: "7272839",
//   //   Email: "123456",
//   // };

//   // const getCompanyDetails = () => {
//   //   setIsHide(false);
//   // };
//   return (
//     <div>
//       <h1>
//         Get api call:
//         <button onClick={Myselg}>Company Details</button>
//       </h1>
//       {/* <div hidden={isHide}>
//         Show company details here:Company{details.Company},Address:
//         {details.Address}
//         ,Phone:{details.Phone},Email:{details.Email}
//       </div> */}
//     </div>
//   );
// }

// export default Home;

// import React, { useState } from "react";
// import Myselg from "./myselg";

// function ParentComponent() {
//   const [showMyselg, setShowMyselg] = useState(false);

//   const handleButtonClick = () => {
//     setShowMyselg(true);
//   };

//   return (
//     <div>
//       <button onClick={handleButtonClick}>Get Data</button>
//       {showMyselg && <Myselg />}
//     </div>
//   );
// }

// export default ParentComponent;

import React from "react";

function home() {
  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
}

export default home;
