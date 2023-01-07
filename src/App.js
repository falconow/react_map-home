import React, { useEffect, useState } from "react";
import axios from "axios";
import House from './components/House'
import SearchHouse from "./components/SearchHouse";


export default function App() {
  
  const [houseInfo, setHouseInfo] = useState(null);
  const [showSearchForm, setShowSearchFrom] = useState(false)
  useEffect(() => {  

  }, [])

 
  return (
    <div className="App">
      <button onClick={() => setShowSearchFrom(!showSearchForm)}>Найти домовую карту </button>
      <button>Создать домовую карту </button>

      <div>
        {showSearchForm && <SearchHouse />} 
      </div>
    </div>

  );
}


