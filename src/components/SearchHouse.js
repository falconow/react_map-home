import React, { useEffect, useState } from "react";
import axios from "axios";
import House from "./House";

function SearchHouse(props) {
    const[street, setStreet] = useState("")
    const[home, setHome] = useState("")
    const[houseInfo, setHouseInfo] = useState(null)

    useEffect(() => {},[setHouseInfo])

    function onSearchHome() {
        const apiUrl = `http://test.ru:8088/test/home?street=${street}&home=${home}`;
        axios
        .get(apiUrl).then((resp) => {
            console.log(resp)
          setHouseInfo(resp.data)
          console.log(resp.data)  
        })
        .catch((e) => console.log(e))
    }


    return (
        <div className="SearchHouse">
            <h3>Поиск дома</h3>
            <form>
                <input placeholder="Улица" value={street} onChange={(e) => setStreet(e.target.value)}/>
                <input placeholder="Дом" value={home} onChange={(e) => setHome(e.target.value)}/>            
                <button type="button" onClick={() => onSearchHome(street, home)}>Найти</button>
                <button type="button" onClick={() => setHouseInfo(null)}>Очистить</button>
            </form>

            {(houseInfo != null) && <House house={houseInfo}/> }
        </div>
        
        )
}



export default SearchHouse