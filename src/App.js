import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Title from './Title';
import Date from './Date';
import Media from './Media';
import Description from './Description';

function App() {
  const [NasaData, setNasaData] = useState({});
  
  const fetchData = () => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(res => {
          setNasaData(res.data)
    })
      .catch(err => console.log(err))
  }
  
  useEffect( () => {
      fetchData();
  }, []) 
console.log(NasaData)

  return (
    <div className="App">
      <Title NasaData={NasaData} />
      <Date NasaData={NasaData} />
      <Media NasaData={NasaData} />
      <Description NasaData={NasaData} />
    </div>
  );
}

export default App;
