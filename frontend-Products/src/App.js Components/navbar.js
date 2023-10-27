import React, { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.css';
import PhoneNavbar from "./Navbar.js Components/PhoneNavbar";
import TabletNavbar from "./Navbar.js Components/TabletNavbar";
import SmallComputerNav from "./Navbar.js Components/SmallComputerNav";
import LargeComputerNav from "./Navbar.js Components/LargeComputerNav";
import "../App.css"


function NavBar1(props) {

  const [SearchItem, setSearchItem] = useState("")

  function SearchFunction(e) {
    e.preventDefault();
    props.setCategoryClicked(false)

    if (SearchItem.length > 0) {
      const searchTerm = SearchItem.toLowerCase();
      const newProductArray = props.Products.filter(searchItem =>
        searchItem.Title.toLowerCase().includes(searchTerm)
      );

      props.setLocalProductsArray(newProductArray);
      console.log("Search results:", newProductArray);
    } else {
      props.setLocalProductsArray(props.Products);
      console.log("Reset to original data:", props.Products);
    }
  }


  function filterCart(ItemToFilter) {
    let newCart = props.cart.filter(item => item._id !== ItemToFilter._id);

    // Update the local storage with the filtered cart
    localStorage.setItem("cart", JSON.stringify(newCart));

    // Update the component state with the filtered cart
    props.addToCart(newCart);

  }

  // filter base off what category you click in the navbar Category tab
  function FilterClickedCategory(category) {
    let ClickedCategory = props.Products.filter(product => product.Category === category)
    props.setLocalProductsArray(ClickedCategory)
    props.setCategoryClicked(true)

  }



  return (
    <div id="navbarContainer">
      {/* Navbar for phones */}
      {props.isForPhone &&
        <PhoneNavbar
          cart={props.cart}
          filterCart={filterCart}
          loginWithRedirect={props.loginWithRedirect}
          logout={props.logout}
          user={props.user}
          SearchFunction={SearchFunction}
          setSearchItem={setSearchItem}
          SearchItem={SearchItem}
          LocalProductsArray={props.LocalProductsArray}
          setLocalProductsArray={props.setLocalProductsArray}
          FilterClickedCategory={FilterClickedCategory}
        />
      }

      {/* navbar for small computer screens */}
      {props.isSmallComputerScreen && !props.isForPhone && !props.isSmallScreen &&
        <>
          <SmallComputerNav
            cart={props.cart}
            filterCart={filterCart}
            loginWithRedirect={props.loginWithRedirect}
            logout={props.logout}
            user={props.user}
            SearchFunction={SearchFunction}
            setSearchItem={setSearchItem}
            SearchItem={SearchItem}
            LocalProductsArray={props.LocalProductsArray}
            setLocalProductsArray={props.setLocalProductsArray}
            FilterClickedCategory={FilterClickedCategory}
          />
        </>}


      {/* navbar for tablet */}
      {props.isSmallScreen && !props.isForPhone ? (
        <>
          <TabletNavbar
            cart={props.cart}
            filterCart={filterCart}
            loginWithRedirect={props.loginWithRedirect}
            logout={props.logout}
            user={props.user}
            SearchFunction={SearchFunction}
            setSearchItem={setSearchItem}
            SearchItem={SearchItem}
            LocalProductsArray={props.LocalProductsArray}
            setLocalProductsArray={props.setLocalProductsArray}
            FilterClickedCategory={FilterClickedCategory}
          />
        </>
        // navbar for Large screens 
      ) : props.iaLargeComputerScreen && !props.isForPhone && !props.isSmallScreen && !props.isSmallComputerScreen && (
        <>
          <LargeComputerNav
            cart={props.cart}
            filterCart={filterCart}
            loginWithRedirect={props.loginWithRedirect}
            logout={props.logout}
            user={props.user}
            SearchFunction={SearchFunction}
            setSearchItem={setSearchItem}
            SearchItem={SearchItem}
            LocalProductsArray={props.LocalProductsArray}
            setLocalProductsArray={props.setLocalProductsArray}
            FilterClickedCategory={FilterClickedCategory}
          />
        </>
      )}
    </div>


  );
}

export default NavBar1;