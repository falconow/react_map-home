import React from "react";
import Floor from "./Floor";

function Entrance(props) {

    return(
        <div className="Entrance">
            {props.entrance.floorList
            .sort((o1, o2) => o1.floor_number > o2.floor_number ? -1:1)
            .map((floor) => <Floor floor={floor} key={floor.id} /> )}
            <h4 className="Entranceh4">Подъезд {props.entrance.entrance_number} </h4>                        
        </div>
    )
}

export default Entrance