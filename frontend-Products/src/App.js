import React from "react"
import './App.css';
import NavBar1 from "./App.js Components/navbar";
import { useAuth0 } from "@auth0/auth0-react"
import Main from "./App.js Components/Main"
import { useState, useEffect } from "react";
import axios from "axios"
import { useMediaQuery } from 'react-responsive';
import FormForLargeComputer from "./App.js Components/AdminForms/LargeComputers";
import FormForTablet from "./App.js Components/AdminForms/Tablet";
import FormForSmallComputer from "./App.js Components/AdminForms/SmallComputers";
import FormForPhone from "./App.js Components/AdminForms/Phone";
import OffCanvas from "./App.js Components/OffCanvas";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";





function App() {
  // Auth0 built in functions and variables
  const {
    loginWithPopup,
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    getAccessTokenSilenty
  } = useAuth0()
  
  // Are the two arrays with all data from the get method the reason i have two is so i wont have any problem reseting the LocalProductsArray when needed 
  const [LocalProductsArray, setLocalProductsArray] = useState([])
  const [Products, setProducts] = useState([])

  // is the checkout cart 
  const [cart, addToCart] = useState([])

  // Shows admin form when needed 
  const [showForm, setShowForm] = useState(false)

  // properties of each object 
  const [Title, setTitle] = useState("")
  const [Description, setDescription] = useState("")
  const [Price, setPrice] = useState("")
  const [Image, setImageUrl] = useState("")
  const [Category, setCategory] = useState("")

  // is the id of the click card to assist with HTTP requests
  const [selectedProduct, setSelectedProduct] = useState("")

  // shows the for inside of the offcanvas when the Admin wants to update a item
  const [showCanvas, setShowCanvas] = useState(false);

  // shows the canvas properties from the currentcanvasitem
  const [CurrentCanvasItem, setCurrentCanvasItem] = useState({})
  // the properties
  const [CanvasTitle, setCanvasTitle] = useState("")
  const [CanvasDescription, setCanvasDescription] = useState("")
  const [CanvasPrice, setCanvasPrice] = useState(0)
  const [CanvasImage, setCanvasImage] = useState("")

  // the pixels break point for different devices
  const isForPhone = useMediaQuery({ maxWidth: 418 }); // Adjust the breakpoint as needed
  const isSmallScreen = useMediaQuery({ maxWidth: 727, }); // Adjust the breakpoint as needed
  const isForAdminSmallScreen = useMediaQuery({ maxWidth: 874 })
  const isSmallComputerScreen = useMediaQuery({ maxWidth: 992, }); // Adjust the breakpoint as needed
  const isForAdminMediumScreen = useMediaQuery({ maxWidth: 1277 })
  const iaLargeComputerScreen = useMediaQuery({ maxWidth: 1920 }); // Adjust the breakpoint as needed

// to help change the styling of the page to fit on one category when the category button is clicked in the navbar
  const[CategoryClicked,setCategoryClicked] = useState(false)

  // Get request to recieve all data from backend 
  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get("https://productbackend-5lj2.onrender.com/products");
        // console.log(response.data);
        setLocalProductsArray(response.data);
        setProducts(response.data);
        // console.log(LocalProductsArray, "Array");
      } catch (error) {
        console.error(error);
      }
    }

    getProducts();
  }, []);

//  updates the selected for input with what you select 

  function Selected(event) {
    setSelectedProduct(event.target.value)

  }

// updates the CurrentCavasItem variable to the item selected

  function ShowCanvasForm(event) {
    event.preventDefault();
    Products.find(item => {
      if (item._id === selectedProduct) {
        return (
          setCurrentCanvasItem(item)
        )
      }
      console.log(CurrentCanvasItem, "item")
    })
    handleShowCanvas();
  }

  // initialize the form within the canvas, thats use to update product, that have a preset value of the item you select to update  

  console.log(CurrentCanvasItem,"ClickedItem");
  useEffect(() => {
    setCanvasTitle(CurrentCanvasItem.Title)
    setCanvasDescription(CurrentCanvasItem.Description)
    setCanvasImage(CurrentCanvasItem.Image)
    setCanvasPrice(CurrentCanvasItem.Price)
  }, [CurrentCanvasItem]);




// The Delete function For the Admin form

  function Delete(event) {
    event.preventDefault()
    async function DeleteProduct() {
      try {
        let deletedItem = await axios.delete(`https://productbackend-5lj2.onrender.com/products/${selectedProduct}`)
        let updatedLocalProductsArray = LocalProductsArray.filter(item => item._id !== selectedProduct);
        setLocalProductsArray(updatedLocalProductsArray)
        console.log("deletedItem", deletedItem.data)
      } catch (error) {
        console.error(error)
      }
    }
    DeleteProduct()
  }

  // the Put/Update Function for the Admin form

  function Update(event) {
    event.preventDefault()
    async function Updateproduct() {
      try {
        var UpdateThisItem = await axios.put(`https://productbackend-5lj2.onrender.com/products/${CurrentCanvasItem._id}`, {
          Title: CanvasTitle,
          Description: CanvasDescription,
          Image: CanvasImage,
          Category: CurrentCanvasItem.Category,
          Price: CanvasPrice

        })
        console.log(UpdateThisItem)
      } catch (error) {
        console.error(error)
      }
      let ObjectFound = LocalProductsArray.find(CurrentItem => CurrentItem._id === CurrentCanvasItem._id)
      ObjectFound.Title = CanvasTitle
      ObjectFound.Description = CanvasDescription
      ObjectFound.Image = CanvasImage
      ObjectFound.Price = CanvasPrice
      handleCloseCanvas()
    }
    Updateproduct()
  }

  // Displaying the Admin Form

  function onclick() {
    if (!showForm) {

      setShowForm(true)
    } else {
      setShowForm(false)
    }
  }

  // Opening and closing the OffCanvas bootstrap element

  function handleCloseCanvas() {

    setShowCanvas(false)

  } function handleShowCanvas() {

    setShowCanvas(true)

  }

  // Collecting User Input from Admin Form

  function onchangeTitle(event) {
    setTitle(event.target.value)
  }

  function onchangeDescription(event) {
    setDescription(event.target.value)
  }
  function onchangePrice(event) {
    setPrice(event.target.value)
  }
  function onchangeCategory(event) {
    setCategory(event.target.value)
  }
  function onchangeImageUrl(event) {
    setImageUrl(event.target.value)
  }
  function Submit(event) {
    event.preventDefault()
    async function AddData() {

            // Post Routes :add to the database
      try {
        var added = await axios.post("https://productbackend-5lj2.onrender.com/products", {
          Title,
          Description,
          Image,
          Category,
          Price

        }
        
        )
        console.log(added,"added")
        const newProduct = added.data;
        const updatedLocalProductsArray = [...LocalProductsArray, newProduct];
        setLocalProductsArray(updatedLocalProductsArray);
  
        console.log(added)
      } catch (error) {
        console.error(error)
      }
    }
    AddData()
  }

  //----------------------------------------------------LableStyles

   // for the large Screen sizes
  const labelStyle = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    margin: '10px',
  };

  // for all other screen sizes

  const labelStyleForMediumAdmin = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    margin: '10px',
    minWidth: "20%"
  };


  //-------------------------------------------------Buttonstyles
  // for all screen sizes : its the Update and delete button
  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '5px',
    backgroundColor: '#007bff', // Blue color
    color: 'white',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    margin: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s',
  };

  // for the small computer

  const buttonStyleForMediumAdmin = {
    padding: '10px 20px',
    borderRadius: '5px',
    backgroundColor: '#007bff', // Blue color
    color: 'white',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    margin: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s',
    width: "30%"
  };

  // for tablet and phone

  const buttonStyleForSamllAdmin = {
    padding: '10px 20px',
    borderRadius: '5px',
    backgroundColor: '#007bff', // Blue color
    color: 'white',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    margin: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s',
    minWidth: "210px"
  };

  //------------------------------------------------SelectonStyles

// for all devices except for a phone 

  const selectionStyle = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    margin: '10px',
    maxWidth: "60%"
  };

  // for a phone

  const selectionStyleForSmallerDevices = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    margin: '10px',
    width: "100%"
  };

  return (
    <div id="AppContainer">
      <NavBar1
      setCategoryClicked={setCategoryClicked}
        LocalProductsArray={LocalProductsArray}
        setLocalProductsArray={setLocalProductsArray}
        setProducts={setProducts}
        Products={Products}
        isForPhone={isForPhone}
        isSmallScreen={isSmallScreen}
        isSmallComputerScreen={isSmallComputerScreen}
        iaLargeComputerScreen={iaLargeComputerScreen}
        loginWithPopup={loginWithPopup}
        loginWithRedirect={loginWithRedirect}
        logout={logout}
        user={user}
        isAuthenticated={isAuthenticated}
        getAccessTokenSilenty={getAccessTokenSilenty}
        addToCart={addToCart}
        cart={cart} />
      <div className="App">
        <div>
          {/* when a user logs in  */}
          <h1>{user ? `Welcome ${user.given_name ? user.given_name : user.name}` : <></>}</h1> {user && user.email === "fredrickg777@gmail.com" ? <button onClick={onclick} style={buttonStyle}>Admin</button> : <></>}</div>
        {showForm &&
          <div
            style={{
              border: "1px solid black",
              height: "fit-content",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              backgroundColor: "grey",
              width: "99%",
              margin: "auto"
            }}>
              {/* -------------Admin Form for Large Screensizes */}
            {iaLargeComputerScreen && !isForAdminMediumScreen && !isSmallComputerScreen && !isSmallScreen && !isForPhone &&
              <FormForLargeComputer
                onchangeTitle={onchangeTitle}
                onchangeDescription={onchangeDescription}
                onchangePrice={onchangePrice}
                onchangeCategory={onchangeCategory}
                onchangeImageUrl={onchangeImageUrl}
                Submit={Submit}
                Selected={Selected}
                selectionStyle={selectionStyle}
                setSelectedProduct={setSelectedProduct}
                Delete={Delete}
                buttonStyle={buttonStyle}
                ShowCanvasForm={ShowCanvasForm}
                labelStyle={labelStyle}
                LocalProductsArray={LocalProductsArray}
              />
            }
            {/* Admin Form for smaller screen sizes such as a small laptap */}

            {isForAdminMediumScreen && !isForAdminSmallScreen && !isSmallScreen && !isForPhone &&
              <FormForSmallComputer
                onchangeTitle={onchangeTitle}
                onchangeDescription={onchangeDescription}
                onchangePrice={onchangePrice}
                onchangeCategory={onchangeCategory}
                onchangeImageUrl={onchangeImageUrl}
                Submit={Submit}
                Selected={Selected}
                selectionStyle={selectionStyle}
                setSelectedProduct={setSelectedProduct}
                Delete={Delete}
                buttonStyle={buttonStyle} 
                ShowCanvasForm={ShowCanvasForm}
                labelStyleForMediumAdmin={labelStyleForMediumAdmin}
                LocalProductsArray={LocalProductsArray}
                buttonStyleForMediumAdmin={buttonStyleForMediumAdmin}
              />
            }

            {/* Admin form for tablet screensizes */}
            {isForAdminSmallScreen && !isSmallScreen && !isForPhone &&
              <FormForTablet
                onchangeTitle={onchangeTitle}
                onchangeDescription={onchangeDescription}
                onchangePrice={onchangePrice}
                onchangeCategory={onchangeCategory}
                onchangeImageUrl={onchangeImageUrl}
                Submit={Submit}
                Selected={Selected}
                selectionStyle={selectionStyle}
                setSelectedProduct={setSelectedProduct}
                Delete={Delete}
                buttonStyle={buttonStyle}
                ShowCanvasForm={ShowCanvasForm}
                labelStyleForMediumAdmin={labelStyleForMediumAdmin}
                LocalProductsArray={LocalProductsArray}
                buttonStyleForSamllAdmin={buttonStyleForSamllAdmin}
              />
            }
            {/* Admin from for phone screensizes */}
            {isSmallScreen &&
              <FormForPhone
                onchangeTitle={onchangeTitle}
                onchangeDescription={onchangeDescription}
                onchangePrice={onchangePrice}
                onchangeCategory={onchangeCategory}
                onchangeImageUrl={onchangeImageUrl}
                Submit={Submit}
                Selected={Selected}
                selectionStyleForSmallerDevices={selectionStyleForSmallerDevices}
                setSelectedProduct={setSelectedProduct}
                Delete={Delete}
                buttonStyle={buttonStyle}
                ShowCanvasForm={ShowCanvasForm}
                labelStyle={labelStyle}
                LocalProductsArray={LocalProductsArray}
                buttonStyleForSamllAdmin={buttonStyleForSamllAdmin}
              />
            }
          </div>

        }
        <Router>
         <Routes>
          <Route exact path="/" component={<Main/>} />
         </Routes>
         </Router>
        <Main
         CategoryClicked={CategoryClicked}
           isSmallComputerScreen={isSmallComputerScreen}
           isAuthenticated
           isSmallScreen={isSmallScreen}
           isForPhone={isForPhone}
           Update={Update}
           LocalProductsArray={LocalProductsArray}
           setLocalProductsArray={setLocalProductsArray}
           cart={cart}
           addToCart={addToCart} Products={Products} />

{/* OffCanvas that shows up when you are updating an product properties */}
        <OffCanvas
        Products={Products}
          showCanvas={showCanvas}
          handleCloseCanvas={handleCloseCanvas}
          CanvasTitle={CanvasTitle}
          CanvasDescription={CanvasDescription}
          CanvasImage={CanvasImage}
          CanvasPrice={CanvasPrice}
          setCanvasTitle={setCanvasTitle}
          setCanvasDescription={setCanvasDescription}
          setCanvasImage={setCanvasImage}
          setCanvasPrice={setCanvasPrice}
          Update={Update}
        />
      </div>


    </div>

  );
}

export default App;
