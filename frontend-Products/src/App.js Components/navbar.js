import React, { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.css';
import PhoneNavbar from "./Navbar.js Components/PhoneNavbar";
import TabletNavbar from "./Navbar.js Components/TabletNavbar";
import SmallComputerNav from "./Navbar.js Components/SmallComputerNav";
import LargeComputerNav from "./Navbar.js Components/LargeComputerNav";


function NavBar1(props) {

  const [SearchItem, setSearchItem] = useState("")


  function SearchFunction(e) {
    e.preventDefault()
    console.log(SearchItem.length > 0, "true or false")
    if (SearchItem.length > 0) {
      console.log("Passed")

      let NewProductArray = props.LocalProductsArray.filter(searchItem => searchItem.Title.includes(SearchItem))
      if (NewProductArray === props.LocalProductsArray) {
        console.log("keep the search the same")
      } else {
        props.setLocalProductsArray(NewProductArray)
        console.log(props.LocalProductsArray, "reset")

      }

    } else {
      console.log("Failed")
      props.setLocalProductsArray(props.Products)
    }
    console.log(props.Products, "Products")
  }



  function filterCart(ItemToFilter) {
    let newCart = props.cart.filter(item => item._id !== ItemToFilter._id);

    // Update the local storage with the filtered cart
    localStorage.setItem("cart", JSON.stringify(newCart));

    // Update the component state with the filtered cart
    props.addToCart(newCart);

  }



  return (
    <>
    {/* Navbar for phones */}
      {props.isForPhone &&
        <PhoneNavbar cart={props.cart} filterCart={filterCart} Redirect={props.Redirect} user={props.user} SearchFunction={SearchFunction} setSearchItem={setSearchItem} SearchItem={SearchItem} />
      }

{/* navbar for small computer screens */}
      {props.isSmallComputerScreen && !props.isForPhone && !props.isSmallScreen &&
        <>
          <SmallComputerNav cart={props.cart} filterCart={filterCart} Redirect={props.Redirect} user={props.user} SearchFunction={SearchFunction} setSearchItem={setSearchItem} SearchItem={SearchItem} />
        </>}


{/* navbar for tablet */}
      {props.isSmallScreen && !props.isForPhone ? (
        <>
          <TabletNavbar cart={props.cart} filterCart={filterCart} Redirect={props.Redirect} user={props.user} SearchFunction={SearchFunction} setSearchItem={setSearchItem} SearchItem={SearchItem} />
        </>
        // navbar for Large screens 
      ) : props.iaLargeComputerScreen && !props.isForPhone && !props.isSmallScreen && !props.isSmallComputerScreen && (
        <>
          <LargeComputerNav cart={props.cart} filterCart={filterCart} Redirect={props.Redirect} user={props.user} SearchFunction={SearchFunction} setSearchItem={setSearchItem} SearchItem={SearchItem} />
        </>
      )}
    </>


  );
}

export default NavBar1;