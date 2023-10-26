import CardF from "../Card"
import React from "react"


function BookCards(props){
    return(
        <div style={{ display: "flex", gap: "10px", display: "flex", flexDirection: "column" }}>
        <h2 style={{ alignSelf: "flex-start", marginLeft: '50px'  }}>{props.books.length > 0 && "Books"}</h2>
        <div style={{ display: "flex", gap: "10px", display: "flex", overflowX: "auto",height:"100%" }}>
          {props.books.map((arr, index) => (
            <CardF  className="Card" arr={arr} key={arr._id} index={index + 1} setShow={props.setShow} setSelectedCard={props.setSelectedCard} />
          ))}
        </div>
      </div>
    )
}
export default BookCards