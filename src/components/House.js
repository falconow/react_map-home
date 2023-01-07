import React from "react";
import Entrance from "./Entrance";

function House(props) {

    return(

        <div className="House">
            <h3>Домовая карта: {props.house.street} {props.house.home}</h3>
            {props.house.entrancesList
                .sort((o1, o2) => o1.entrance_number > o2.entrance_number ? 1: -1)
                .map((entrance) => <Entrance entrance={entrance} key={entrance.id}/> )
            }
            
            <div>
                <p>Управляющая компания: ООО Альянс-Жилком, телефон: 77-99-99</p>
                <p>Оборудование: 5 под. подвал</p>
            </div>
            
        </div>
    )
}

export default House