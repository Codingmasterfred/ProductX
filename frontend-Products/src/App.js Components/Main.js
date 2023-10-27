import CardF from "./Main.js Components/Card"
import { useState,useEffect } from "react";
import ProductsModal from "./Main.js Components/Modal"
import ElectronicCards from "./Main.js Components/CardCategories/Electronics";
import BookCards from "./Main.js Components/CardCategories/Books";
import GameCards from './Main.js Components/CardCategories/Games'
import ClothesCards from "./Main.js Components/CardCategories/Clothes";





function Main(props) {
  // seperated products in groups based off their category

  const electronics = props.LocalProductsArray.filter(arr => arr.Category === "electronics");
  const clothes =  props.LocalProductsArray.filter(arr => arr.Category === "clothes");
  const books = props.LocalProductsArray.filter(arr => arr.Category === "books");
  const games = props.LocalProductsArray.filter(arr => arr.Category === "games");

  const [show, setShow] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  // getting item that has been search out of local storage and adding it back into the cart  

  useEffect(() => {
    // Retrieve the cart from localStorage when the component mounts
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      props.addToCart(storedCart);
    }
  }, []);

  // handleClosing the modal

  function handleClose() {
    if(show){

      setShow(false);
    }

  }
  

  // adding the selected card in which you click on into localstorage  : 
  // you can find the onClick in the card components,which are inside of the different categories of cards 
  function AddToCart() {
    const updatedCart = [...props.cart, selectedCard];
    props.addToCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save the updatedCart array to local storage
    console.log("Added to cart");
    handleClose();
  }


  
  
  
  return (
    <div id="mainContainer" style={{ width: '100%', }}>
      <ElectronicCards electronics={electronics} setSelectedCard={setSelectedCard} setShow={setShow} CategoryClicked={props.CategoryClicked}/>

      <BookCards books={books} setSelectedCard={setSelectedCard} setShow={setShow} CategoryClicked={props.CategoryClicked}/>

      <ClothesCards clothes={clothes} setSelectedCard={setSelectedCard} setShow={setShow} CategoryClicked={props.CategoryClicked}/>

      <GameCards games={games} setSelectedCard={setSelectedCard} setShow={setShow} CategoryClicked={props.CategoryClicked}/>

      
      {selectedCard && (
        // when a card is selected the product modal shows
       
       <ProductsModal show={show} handleClose={handleClose} electronics={electronics} selectedCard={selectedCard} AddToCart={AddToCart}  />
      )}

    </div>
  );
}

export default Main