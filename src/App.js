import React, { useEffect, useState } from "react";
import axios from "axios";
import House from './components/House'
import './App.css';

export default function App() {
  
  const apiUrl = 'http://test.ru:8088/test/home';
  const [houseInfo, setHouseInfo] = useState(null);
  useEffect(() => {  
    axios
    .get(apiUrl).then((resp) => {
      setHouseInfo(resp.data)  
    })
    .catch((e) => console.log(e))
  }, [])

  if (!houseInfo) {
    return null
  }
 
  return (
    <div>
      <House house={houseInfo}/>
    </div>
  );
}


