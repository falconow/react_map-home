import React from "react";
import Flat from "./Flat";

function Floor(props) {

    return(
        <div className="Floor">
            <p className="FloorNumber">{props.floor.floor_number}</p>  
            {props.floor.flatList.map((flat) => <Flat key={flat} flat={flat} /> )}                       
        </div>
    )
}

export default Floor