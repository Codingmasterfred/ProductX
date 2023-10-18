import CardF from "./card"
import Data from "./data.json"
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Container from 'react-bootstrap/Container';



function Main(props) {
  const electronics = Data.filter(arr => arr.category === "electronics");
  const clothes = Data.filter(arr => arr.category === "clothes");
  const books = Data.filter(arr => arr.category === "books");
  const games = Data.filter(arr => arr.category === "games");

  const [show, setShow] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [enddisplay, setEnddisplay] = useState(3)
  const [startDisplay, setStartDisplay] = useState(0)

  function handleClose() {
    setShow(false);
  }
  
  function AddToCart() {
    props.addToCart([...props.cart, selectedCard])
    console.log("Added to cart")
  }



  // Divide electronics array into groups of eight objects
  const electronicsGroups = [];
  for (let i = 0; i < electronics.length; i += 8) {
    electronicsGroups.push(electronics.slice(i, i + 8));
  }
  
  // Function to handle next button click
  const handleNextClick = () => {

    setStartDisplay(startDisplay + 3)
    setEnddisplay(enddisplay + 3)
  };

  // Function to handle previous button click
  const handlePrevClick = () => {
    //  setVisibleIndex(visibleIndex - 1);
    setStartDisplay(startDisplay - 3)
    setEnddisplay(enddisplay - 3)
  };
  



  let GroupOfElectronics = electronics.slice(startDisplay, enddisplay)
  
  return (
    <div style={{ width: '100%', }}>
      <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
        <h2 style={{ alignSelf: 'flex-start', marginLeft: '50px' }}>Electronics</h2>
        <div style={{ display: 'flex', gap: '10px', width: "100%", justifyContent: "center" }}>
          {/* Arrow button to show previous content */}

          {/* Content to be displayed */}


          {/* Iterate over each group in electronicsGroups */}
          {startDisplay == 0 ? <></> : <button style={{ alignSelf: 'center' }} onClick={handlePrevClick}>
            <BsChevronLeft />
          </button>}
          {GroupOfElectronics.map((arr, index) => (
            <CardF
              className="Card"
              arr={arr}
              key={arr.key}
              index={index + 1}
              setShow={setShow}
              setSelectedCard={setSelectedCard}
            />
          ))}


          {/* Arrow button to show next content */}

          {startDisplay >= electronics.length - 3 ? <></> : <button style={{ alignSelf: 'center' }} onClick={handleNextClick}>
            <BsChevronRight />
          </button>}

        </div>
      </div>

      <div style={{ display: "flex", gap: "10px", display: "flex", flexDirection: "column" }}>
        <h2 style={{ alignSelf: "flex-start", marginLeft: "50px" }}>Clothes</h2>
        <div style={{ display: "flex", gap: "10px", display: "flex", }}>
          {clothes.map((arr, index) => (
            <CardF className="Card" arr={arr} key={arr.key} index={index + 1} setShow={setShow} setSelectedCard={setSelectedCard} />
          ))}
        </div>
      </div>

      <div style={{ display: "flex", gap: "10px", display: "flex", flexDirection: "column" }}>
        <h2 style={{ alignSelf: "flex-start", marginLeft: "50px" }}>books</h2>
        <div style={{ display: "flex", gap: "10px", display: "flex", overflowX: "auto" }}>
          {books.map((arr, index) => (
            <CardF className="Card" arr={arr} key={arr.key} index={index + 1} setShow={setShow} setSelectedCard={setSelectedCard} />
          ))}
        </div>
      </div>

      <div style={{ display: "flex", gap: "10px", display: "flex", flexDirection: "column" }}>
        <h2 style={{ alignSelf: "flex-start", marginLeft: "50px" }}>Games</h2>
        <div style={{ display: "flex", gap: "10px", display: "flex", overflowX: "auto" }}>
          {games.map((arr, index) => (
            <CardF className="Card" arr={arr} key={arr.key} index={index + 1} setShow={setShow} setSelectedCard={setSelectedCard} />
          ))}
        </div>
      </div>
      {/* {------------------------------------------------------------------------------------------------------} */}
      {selectedCard && (
       
        <Modal size='xl' show={show} onHide={handleClose}  style={{height:"100%"}}>
          <Modal.Header closeButton>

            <Modal.Title style={{ fontSize: "20px",textAlign:"center" }}>{selectedCard.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ width:"100%", border:"1px solid black", display:"flex",justifyContent:"center"}}>
                  <div style={{height:"fit-content",width:"fit-content",display:"flex",flexDirection:"column", alignItems:"center"}}>
                   <div style={{display:"flex",width:"100%",margin:"10px"}}>
                    <img src={selectedCard.image} style={{ width: "500px" }}></img>
                    <h1>${selectedCard.price}</h1>
                    </div> 
            {typeof selectedCard.description ==="string" && 
                  <div style={{display:"flex",justifyContent:"space-between"}}>
                  <Container fluid style={{border:"5px solid blue"}}>
                
                    {selectedCard.description.split(",").slice(0,Math.floor(selectedCard.description.split(",").length/2)).map((description, index) => (
                      <li style={{width:"400px"}} key={index}>{description}</li>
                      ))} 
                      </Container>
                      <Container fluid style={{border:"5px solid red"}}>
                      {selectedCard.description.split(",").slice(Math.floor(selectedCard.description.split(",").length/2)).map((description, index) => (
                        <li style={{width:"400px"}} key={index}>{description}</li>
                        ))} 
                        </Container>
                        </div>
                      }
                        </div>
            {/* {selectedCard.description} */}
          </Modal.Body>
          <Modal.Footer>
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