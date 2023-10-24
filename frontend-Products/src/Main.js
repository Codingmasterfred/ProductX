import CardF from "./card"
import { useState,useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';



function Main(props) {
  const electronics = props.LocalProductsArray.filter(arr => arr.Category === "electronics");
  const clothes =  props.LocalProductsArray.filter(arr => arr.Category === "clothes");
  const books = props.LocalProductsArray.filter(arr => arr.Category === "books");
  const games = props.LocalProductsArray.filter(arr => arr.Category === "games");




  const [show, setShow] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    // Retrieve the cart from localStorage when the component mounts
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      props.addToCart(storedCart);
    }
  }, []);

  function handleClose() {
    if(show){

      setShow(false);
    }

  }
  


  function handleShow() {
    if(show){

      setShow(true);
    }
  }




  
  function AddToCart() {
    const updatedCart = [...props.cart, selectedCard];
    props.addToCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save the updatedCart array to local storage
    console.log("Added to cart");
    handleClose();
  }



  // Divide electronics array into groups of eight objects
  const electronicsGroups = [];
  for (let i = 0; i < electronics.length; i += 8) {
    electronicsGroups.push(electronics.slice(i, i + 8));
  }
  
  
  
  return (
    <div style={{ width: '100%', }}>
      <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
        <h2 style={{ alignSelf: 'flex-start', marginLeft: '40px' }}>{electronics.length > 0 && "Electronics"}</h2>
        <div style={{ display: "flex", gap: "10px", display: "flex", overflowX: "auto"}}>

          {electronics.map((arr, index) => (
            <CardF
              className="Card"
              arr={arr}
              key={arr.key}
              index={index + 1}
              setShow={setShow}
              setSelectedCard={setSelectedCard}
            />
          ))}

        </div>
      </div>

      <div style={{ display: "flex", gap: "10px", display: "flex", flexDirection: "column" }}>
        <h2 style={{ alignSelf: "flex-start", marginLeft: '50px'  }}>{clothes.length > 0 && "Clothes"}</h2>
        <div style={{ display: "flex", gap: "10px", display: "flex", overflowX: "auto",height:"100%" }}>
          {clothes.map((arr, index) => (
            <CardF className="Card" arr={arr} key={arr.key} index={index + 1} setShow={setShow} setSelectedCard={setSelectedCard} />
          ))}
        </div>
      </div>

      <div style={{ display: "flex", gap: "10px", display: "flex", flexDirection: "column" }}>
        <h2 style={{ alignSelf: "flex-start", marginLeft: "50px" }}>{books.length > 0 && "Books"}</h2>
        <div style={{ display: "flex", gap: "10px", display: "flex", overflowX: "auto" }}>
          {books.map((arr, index) => (
            <CardF className="Card" arr={arr} key={arr.key} index={index + 1} setShow={setShow} setSelectedCard={setSelectedCard} />
          ))}
        </div>
      </div>

      <div style={{ display: "flex", gap: "10px", display: "flex", flexDirection: "column" }}>
        <h2 style={{ alignSelf: "flex-start", marginLeft: "50px" }}>{games.length > 0 && "Games"}</h2>
        <div style={{ display: "flex", gap: "10px", display: "flex", overflowX: "auto" }}>
          {games.map((arr, index) => (
            <CardF className="Card" arr={arr} key={arr.key} index={index + 1} setShow={setShow} setSelectedCard={setSelectedCard} />
          ))}
        </div>
      </div>
      {/* {------------------------------------------------------------------------------------------------------} */}
      {selectedCard && (
       
        <Modal size="xl"  show={show} onHide={handleClose}  style={{height:"95vh", width:"100vw", margin:"auto"}}>
          <Modal.Header closeButton>

            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ width:"100%", border:"1px solid black", display:"flex",justifyContent:"center"}}>
                  <div style={{height:"fit-content",width:"fit-content",display:"flex",flexDirection:"column", alignItems:"center" }}>
                   <div style={{display:"flex",width:"80%",margin:"10px", display:"flex",justifyContent:"space-around",   alignItems:"center"}}>
                    <img src={selectedCard.Image} style={{ width:"100%",height:"300px" , objectFit:"contain"}}></img>
                    <div style={{display:"flex",width:"40%", flexDirection:"column", height:"320px", textAlign:"center",justifyContent:"space-between",padding:"1px" }}>

                    <h1 style={{ fontSize: "20px",textAlign:"center" }}>{selectedCard.Title}</h1>
                    <h1>{`$${selectedCard.Price}.00`}</h1>
                    </div>
                    </div> 
            {typeof selectedCard.Description ==="string" && 
                
                  <Container fluid style={{textAlign:"center", width:"100%",}}>
                
                   
                      <p style={{width:"70%",margin:"auto"}}>{selectedCard.Description}</p>
                     
                      </Container>
                     
                       
                      }
                        </div>
            {/* {selectedCard.description} */}
          </Modal.Body>
          <Modal.Footer style={{position:"sticky",bottom:"0", backgroundColor:"white"}}>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={AddToCart} >
              Add To Cart
            </Button>
          </Modal.Footer>
        </Modal>
      )}


  
  


    </div>
  );
}

export default Main