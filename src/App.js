import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Title from "./src/components/Title";
import Date from "./src/components/Date";
import Media from "./src/components/Media";

function App() {
  const [nasaData, setNasaData] = useState([]);
  
  const fetchData = () => {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=vHQVbvkufEhu1CRrQoED2OBGmcinri8RlKdGb4U8$`)
    .then(res => {
          setNasaData(res.data)
    })
      .catch(err => console.log(err))
  }
  
  useEffect( () => {
      fetchData();
  }, []) 
console.log(nasaData)

  return (
    <div className="App">
      <Title nasaData={nasaData} />
      <Date nasaData={nasaData} />
      <Media nasaData={nasaData} />
      <Description nasaData={nasaData} />
    </div>
  );
}

export default App;
