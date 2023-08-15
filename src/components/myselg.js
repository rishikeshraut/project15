import React, { useEffect } from "react";

function Myselg() {
  useEffect(() => {
    // Get data from local storage
    const storedData = localStorage.getItem("userData");
    console.log()

    // Do something with the retrieved data
    console.log(storedData);
  }, []);

  return <h1>Retrieve data from local storage</h1>;
}

export default Myselg;
