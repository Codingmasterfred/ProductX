import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



function ProductsModal (props){
    return(
        <Modal size="l"  show={props.show} onHide={props.handleClose}  style={{height:"95vh", width:"100vw", margin:"auto"}}>
        <Modal.Header closeButton>

          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ width:"100%", display:"flex",justifyContent:"center"}}>
                <div style={{height:"fit-content",width:"100%",display:"flex",flexDirection:"column", alignItems:"center",overflowY:"auto" }}>
                 <div style={{height:"500px",maxHeight:"fit-content",display:"flex",width:"90%",margin:"10px",justifyContent:"space-around", alignItems:"center",flexDirection:"column"}}>
                  <img src={props.selectedCard.Image} style={{height:"fit-content",width:"100%",maxHeight:"300px" , objectFit:"contain"}}></img>
                  <div style={{display:"flex",width:"100%", flexDirection:"column", height:"fit-content", textAlign:"center",justifyContent:"space-between",padding:"1px"}}>

                  <h1 style={{ fontSize:"18px",width:"100%", textOverflow: "ellipsis" , objectFit:"contain",wordBreak:"none"}}>{props.selectedCard.Title}</h1>
                  <h1>{`$${props.selectedCard.Price}.00`}</h1>
                  </div>__
          {typeof props.selectedCard.Description ==="string" && 
              
                    <p style={{width:"100%",  }}>{props.selectedCard.Description}</p>
                 
                   
                  
                   
                     
                    }
                  </div> 
                      </div>
          {/* {selectedCard.description} */}
        </Modal.Body>
        <Modal.Footer style={{position:"sticky",bottom:"0", backgroundColor:"white"}}>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.AddToCart} >
            Add To Cart
          </Button>
        </Modal.Footer>
      </Modal>
    )
}
export default ProductsModal