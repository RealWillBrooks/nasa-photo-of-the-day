import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Title from "./components/Title";
import Date from "./components/Date";
import Image from "./components/Image";

function App() {

  const [nasaData, setNasaData] = useState([]);
  console.log(nasaData);
  
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=vHQVbvkufEhu1CRrQoED2OBGmcinri8RlKdGb4U8`)
      .then(res => {
        console.log(res.data);
        setNasaData(res.data);
      })
      .then(console.log(nasaData))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
