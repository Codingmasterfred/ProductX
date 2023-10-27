import CardF from "../Card"
import React from "react"


function ElectronicCards(props){
    return(
        <div style={{ display: "flex", gap: "10px", display: "flex", flexDirection: "column" }}>
        <h2 style={{ alignSelf: "flex-start", marginLeft: '50px'  }}>{props.electronics.length > 0 && "Electronics"}</h2>
        <div style={props.CategoryClicked?{display: "flex", gap: "10px", display: "flex",height:"100%",width:"100%",flexWrap:"wrap",justifyContent:"center" }:{ display: "flex", gap: "10px", display: "flex", overflowX: "auto",height:"100%" }}>
          {props.electronics.map((arr, index) => (
            <CardF className="Card" arr={arr} key={arr._id} index={index + 1} setShow={props.setShow} setSelectedCard={props.setSelectedCard} />
          ))}
        </div>
      </div>
    )
}
export default ElectronicCards