import CardF from "../Card"
import React from "react"


function GamecCards(props){
    return(
        <div style={{ display: "flex", gap: "10px", display: "flex", flexDirection: "column" }}>
        <h2 style={{ alignSelf: "flex-start", marginLeft: '50px'  }}>{props.games.length > 0 && "Games"}</h2>
        <div style={{ display: "flex", gap: "10px", display: "flex", overflowX: "auto",height:"100%" }}>
          {props.games.map((arr, index) => (
            <CardF className="Card" arr={arr} key={arr._id} index={index + 1} setShow={props.setShow} setSelectedCard={props.setSelectedCard} />
            )
            )
            }
           { console.log(props.games,"look for key")}
        </div>
      </div>
    )
}
export default GamecCards