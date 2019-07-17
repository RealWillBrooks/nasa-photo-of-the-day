import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";


function App() {

  const [nasaData, setNasaData] = useState([]);
  console.log(nasaData);
  
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=vHQVbvkufEhu1CRrQoED2OBGmcinri8RlKdGb4U8`)
      .then(res => {
        console.log(res.data);
        setNasaData(res.data.hdurl);
      })
      .then(console.log(nasaData))
      .catch(err => console.log(err));
  }, [nasaData]);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
        <img src={`${nasaData}`} alt="NASA" width="500px"/>
      </p>
    </div>
  );
}

export default App;
