import React from "react";

function House(props) {

    return(

        <div className="House">
            <h3>Домовая карта: {props.house.street} {props.house.home}</h3>
            {props.house.entrancesList.map((entrance) => <p key={entrance.id}> Подъезд {entrance.entrance_number}</p>)}
        </div>
    )
}

export default House