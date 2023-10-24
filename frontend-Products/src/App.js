import React from "react"
import logo from './logo.svg';
import './App.css';
import NavBar1 from "./navbar"
import { useAuth0 } from "@auth0/auth0-react"
import Main from "./Main"
import { useState, useEffect } from "react";
import axios from "axios"
import { useMediaQuery } from 'react-responsive';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';





function App() {
  const {
    loginWithPopup,
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    getAccessTokenSilenty
  } = useAuth0()

  const [cart, addToCart] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [Title, setTitle] = useState("")
  const [Description, setDescription] = useState("")
  const [Price, setPrice] = useState("")
  const [Image, setImageUrl] = useState("")
  const [Category, setCategory] = useState("")
  const [Products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState("")
  const [LocalProductsArray, setLocalProductsArray] = useState([])
  const [showCanvas, setShowCanvas] = useState(false);
  const [CurrentCanvasItem, setCurrentCanvasItem] = useState({})
  const [CanvasTitle, setCanvasTitle] = useState(CurrentCanvasItem.Title)
  const [CanvasDescription, setCanvasDescription] = useState("")
  const [CanvasPrice, setCanvasPrice] = useState(0)
  const [CanvasImage, setCanvasImage] = useState("")


  const isForPhone = useMediaQuery({ maxWidth: 418 }); // Adjust the breakpoint as needed
  const isSmallScreen = useMediaQuery({ maxWidth: 727, }); // Adjust the breakpoint as needed
  const isForAdminSmallScreen = useMediaQuery({maxWidth:874})
  const isSmallComputerScreen = useMediaQuery({ maxWidth: 992, }); // Adjust the breakpoint as needed
  const isForAdminMediumScreen = useMediaQuery({maxWidth:1277})
  const iaLargeComputerScreen = useMediaQuery({ maxWidth: 1920 }); // Adjust the breakpoint as needed


  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get("https://productbackend-5lj2.onrender.com/products");
        console.log(response.data);
        setLocalProductsArray(response.data);
        setProducts(response.data);
        console.log(LocalProductsArray, "Array");
      } catch (error) {
        console.error(error);
      }
    }

    getProducts();
  }, []);

  // console.log(CurrentCanvasItem.Title);


  // console.log("cart", cart)

  function Selected(event) {
    setSelectedProduct(event.target.value)

  }

  function ShowCanvasForm(event) {
    event.preventDefault();
    console.log("inside")
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

  useEffect(() => {
    console.log(CurrentCanvasItem);
    setCanvasTitle(CurrentCanvasItem.Title)
    setCanvasDescription(CurrentCanvasItem.Description)
    setCanvasImage(CurrentCanvasItem.Image)
    setCanvasPrice(CurrentCanvasItem.Price)
  }, [CurrentCanvasItem]);


  



  function Delete(event) {
    event.preventDefault()
    async function DeleteProduct() {
      try {
        let deletedItem = await axios.delete(`https://productbackend-5lj2.onrender.com/products/${selectedProduct}`)
        let filterItem = Products.filter(arr => {
          if (selectedProduct === arr._id) {
            return false
          } else {
            return true
          }
        })
        setLocalProductsArray(filterItem)
        console.log("deletedItem", deletedItem.data)
      } catch (error) {
        console.error(error)
      }
    }
    DeleteProduct()
  }

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

      // setLocalProductsArray(filterArray)
    }
    Updateproduct()
  }

  function onclick() {
    if (!showForm) {

      setShowForm(true)
    } else {
      setShowForm(false)
    }
  }

  function handleCloseCanvas() {

    setShowCanvas(false)

  } function handleShowCanvas() {

    setShowCanvas(true)

  }


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


      try {
        var added = await axios.post("https://productbackend-5lj2.onrender.com/products", {
          Title,
          Description,
          Image,
          Category,
          Price

        }

        )

        console.log(added)
      } catch (error) {
        console.error(error)
      }
    }
    AddData()
  }


  const labelStyle = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    margin: '10px',
  };

  const labelStyleForMediumAdmin = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    margin: '10px',
    minWidth:"20%"
  };

  const selectionStyle = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    margin: '10px',
    maxWidth: "60%"
  };

  const selectionStyleForSmallerDevices = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    margin: '10px',
    width: "100%"
  };


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
    width:"30%"
  };

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
    minWidth:"210px"
  };


  return (
    <div>
      <NavBar1
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
        <div><h1>{user ? `Welcome ${user.given_name ? user.given_name : user.name}` : <></>}</h1> {user && user.email === "fredrickg777@gmail.com" ? <button onClick={onclick} style={buttonStyle}>Admin</button> : <></>}</div>
        {showForm &&
          <div style={{ border: "1px solid black", height: "fit-content", display: "flex", flexDirection: "column", justifyContent: "space-around", backgroundColor: "grey", width: "99%", margin: "auto" }}>
           {  iaLargeComputerScreen && !isForAdminMediumScreen && !isSmallComputerScreen && !isSmallScreen && !isForPhone&&
           <>
            <form type="submit" onSubmit={Submit} style={{ display: "flex", justifyContent: "space-around" }}>
              <label style={labelStyle} htmlFor="Title"><input type="text" placeholder="Title" id="Title" onChange={onchangeTitle}></input></label>
              <label style={labelStyle} htmlFor="Description"><input type="text" placeholder="Description" id="Description" onChange={onchangeDescription}></input></label>
              <label style={labelStyle} htmlFor="Price"><input type="text" placeholder="Price" id="Price" onChange={onchangePrice}></input></label>
              <label style={labelStyle} htmlFor="Category"><input type="text" placeholder="Category" id="Category" onChange={onchangeCategory}></input></label>
              <label style={labelStyle} htmlFor="Image"><input type="text" placeholder="Image" id="Image" onChange={onchangeImageUrl}></input></label>
              <button type="submit" style={buttonStyle} onClick={Submit} >Submit</button>
            </form>
            <form style={{ border: "1px solid black", width: "50%", alignSelf: "center", display: "flex", justifyContent: "space-between" }}>
            <div id="deletedSection" style={{  width: "50%", display: "flex", justifyContent: "space-around" }}>
              <select onChange={Selected} style={selectionStyle}>
                <option value="">Delete A Product</option>
                {
                  Products.map(arr => {
                    return (
                      <option onClick={() => setSelectedProduct(arr)} value={arr._id}>{arr.Title}</option>
                    )
                  })
                }
              </select>
              <button onClick={Delete} style={buttonStyle} >delete</button>
            </div>
            <div id="updateSection" style={{ width: "50%", display: "flex", justifyContent: "space-around" }}>
              <select onChange={Selected} style={selectionStyle}>
                <option value="">Update A Product</option>
                {
                  Products.map(arr => {
                    return (
                      <>
                        <option value={arr._id}>{arr.Title}</option>
                        {/* {SelectedProductForUpdate(arr)} */}



                      </>
                    )
                  })
                }
              </select>
              <button onClick={ShowCanvasForm} style={buttonStyle} >Update</button></div>
          </form>
          </>}
            { isForAdminMediumScreen && !isSmallComputerScreen && !isSmallScreen && !isForPhone  &&
            <>
            <form type="submit" onSubmit={Submit} style={{ display: "flex", flexDirection:"column",alignItems:"center" }}>
             <div style={{border:"1px solid black",width:"80%",display:"flex",justifyContent:"space-evenly"}}> <label style={labelStyleForMediumAdmin} htmlFor="Title"><input type="text" placeholder="Title" id="Title" onChange={onchangeTitle}></input></label>
              <label style={labelStyleForMediumAdmin} htmlFor="Description"><input type="text" placeholder="Description" id="Description" onChange={onchangeDescription}></input></label>
              <label style={labelStyleForMediumAdmin} htmlFor="Price"><input type="text" placeholder="Price" id="Price" onChange={onchangePrice}></input></label></div>
             <div style={{border:"1px solid black",width:"80%",display:"flex",justifyContent:"space-evenly"}}> <label style={labelStyleForMediumAdmin} htmlFor="Category"><input type="text" placeholder="Category" id="Category" onChange={onchangeCategory}></input></label>
              <label style={labelStyleForMediumAdmin} htmlFor="Image"><input type="text" placeholder="Image" id="Image" onChange={onchangeImageUrl}></input></label>
              <button type="submit" style={buttonStyleForMediumAdmin} onClick={Submit} >Submit</button></div>
            </form>
            <form style={{ border: "1px solid black", width: "80%", alignSelf: "center", display: "flex", justifyContent: "space-between" }}>
              <div id="deletedSection" style={{ border: "1px solid black", width: "50%", display: "flex", justifyContent: "space-around" }}>
                <select onChange={Selected} style={selectionStyle}>
                  <option value="">Delete A Product</option>
                  {
                    Products.map(arr => {
                      return (
                        <option onClick={() => setSelectedProduct(arr)} value={arr._id}>{arr.Title}</option>
                      )
                    })
                  }
                </select>
                <button onClick={Delete} style={buttonStyle} >delete</button>
              </div>
              <div id="updateSection" style={{ border: "1px solid black", width: "50%", display: "flex", justifyContent: "space-around" }}>
                <select onChange={Selected} style={selectionStyle}>
                  <option value="">Update A Product</option>
                  {
                    Products.map(arr => {
                      return (
                        <>
                          <option value={arr._id}>{arr.Title}</option>
                          {/* {SelectedProductForUpdate(arr)} */}



                        </>
                      )
                    })
                  }
                </select>
                <button onClick={ShowCanvasForm} style={buttonStyle} >Update</button></div>
            </form>
            </>}
            { isForAdminMediumScreen && isSmallComputerScreen && !isForAdminSmallScreen  && !isSmallScreen && !isForPhone  &&
            <>
            <form type="submit" onSubmit={Submit} style={{ display: "flex", flexDirection:"column",alignItems:"center" }}>
             <div style={{border:"1px solid black",width:"80%",display:"flex",justifyContent:"space-evenly"}}> <label style={labelStyleForMediumAdmin} htmlFor="Title"><input type="text" placeholder="Title" id="Title" onChange={onchangeTitle}></input></label>
              <label style={labelStyleForMediumAdmin} htmlFor="Description"><input type="text" placeholder="Description" id="Description" onChange={onchangeDescription}></input></label>
              <label style={labelStyleForMediumAdmin} htmlFor="Price"><input type="text" placeholder="Price" id="Price" onChange={onchangePrice}></input></label></div>
             <div style={{border:"1px solid black",width:"80%",display:"flex",justifyContent:"space-evenly"}}> <label style={labelStyleForMediumAdmin} htmlFor="Category"><input type="text" placeholder="Category" id="Category" onChange={onchangeCategory}></input></label>
              <label style={labelStyleForMediumAdmin} htmlFor="Image"><input type="text" placeholder="Image" id="Image" onChange={onchangeImageUrl}></input></label>
              <button type="submit" style={buttonStyleForMediumAdmin} onClick={Submit} >Submit</button></div>
            </form>
            <form style={{ border: "1px solid black", width: "80%", alignSelf: "center", display: "flex", justifyContent: "space-between" }}>
              <div id="deletedSection" style={{ border: "1px solid black", width: "50%", display: "flex", justifyContent: "space-around" }}>
                <select onChange={Selected} style={selectionStyle}>
                  <option value="">Delete A Product</option>
                  {
                    Products.map(arr => {
                      return (
                        <option onClick={() => setSelectedProduct(arr)} value={arr._id}>{arr.Title}</option>
                      )
                    })
                  }
                </select>
                <button onClick={Delete} style={buttonStyle} >delete</button>
              </div>
              <div id="updateSection" style={{ border: "1px solid black", width: "50%", display: "flex", justifyContent: "space-around" }}>
                <select onChange={Selected} style={selectionStyle}>
                  <option value="">Update A Product</option>
                  {
                    Products.map(arr => {
                      return (
                        <>
                          <option value={arr._id}>{arr.Title}</option>
                          {/* {SelectedProductForUpdate(arr)} */}



                        </>
                      )
                    })
                  }
                </select>
                <button onClick={ShowCanvasForm} style={buttonStyle} >Update</button></div>
            </form>
            </>
            }
             {isForAdminSmallScreen && !isSmallScreen && !isForPhone  &&
            <>
            <form type="submit" onSubmit={Submit} style={{ display: "flex", flexDirection:"column",alignItems:"center" }}>
             <div style={{border:"1px solid black",width:"80%",display:"flex",justifyContent:"space-evenly"}}> 
             <label style={labelStyleForMediumAdmin} htmlFor="Title"><input type="text" placeholder="Title" id="Title" onChange={onchangeTitle}></input></label>
              <label style={labelStyleForMediumAdmin} htmlFor="Description"><input type="text" placeholder="Description" id="Description" onChange={onchangeDescription}></input></label>
              </div>
             <div style={{border:"1px solid black",width:"80%",display:"flex",justifyContent:"space-evenly"}}>
               <label style={labelStyleForMediumAdmin} htmlFor="Category"><input type="text" placeholder="Category" id="Category" onChange={onchangeCategory}></input></label>
              <label style={labelStyleForMediumAdmin} htmlFor="Price"><input type="text" placeholder="Price" id="Price" onChange={onchangePrice}></input></label>
              </div>
              <div style={{border:"1px solid black",width:"80%",display:"flex",justifyContent:"space-evenly"}}>
              <label style={labelStyleForMediumAdmin} htmlFor="Image"><input type="text" placeholder="Image" id="Image" onChange={onchangeImageUrl}></input></label>
              <button type="submit" style={buttonStyleForSamllAdmin} onClick={Submit} >Submit</button>
              </div>
            </form>
            <form style={{ border: "1px solid black", width: "80%", alignSelf: "center", display: "flex", justifyContent: "space-between" }}>
              <div id="deletedSection" style={{ border: "1px solid black", width: "50%", display: "flex", justifyContent: "space-around" }}>
                <select onChange={Selected} style={selectionStyle}>
                  <option value="">Delete A Product</option>
                  {
                    Products.map(arr => {
                      return (
                        <option onClick={() => setSelectedProduct(arr)} value={arr._id}>{arr.Title}</option>
                      )
                    })
                  }
                </select>
                <button onClick={Delete} style={buttonStyle} >delete</button>
              </div>
              <div id="updateSection" style={{ border: "1px solid black", width: "50%", display: "flex", justifyContent: "space-around" }}>
                <select onChange={Selected} style={selectionStyle}>
                  <option value="">Update A Product</option>
                  {
                    Products.map(arr => {
                      return (
                        <>
                          <option value={arr._id}>{arr.Title}</option>
                          {/* {SelectedProductForUpdate(arr)} */}



                        </>
                      )
                    })
                  }
                </select>
                <button onClick={ShowCanvasForm} style={buttonStyle} >Update</button></div>
            </form>
            </>
            }
           {  isSmallScreen  && 
           <>
           <form type="submit" onSubmit={Submit} style={{ display: "flex", justifyContent: "space-around",flexDirection:"column" }}>
              <label style={labelStyle} htmlFor="Title"><input type="text" placeholder="Title" id="Title" onChange={onchangeTitle}></input></label>
              <label style={labelStyle} htmlFor="Description"><input type="text" placeholder="Description" id="Description" onChange={onchangeDescription}></input></label>
              <label style={labelStyle} htmlFor="Price"><input type="text" placeholder="Price" id="Price" onChange={onchangePrice}></input></label>
              <label style={labelStyle} htmlFor="Category"><input type="text" placeholder="Category" id="Category" onChange={onchangeCategory}></input></label>
              <label style={labelStyle} htmlFor="Image"><input type="text" placeholder="Image" id="Image" onChange={onchangeImageUrl}></input></label>
              <button type="submit" style={buttonStyle} onClick={Submit} >Submit</button>
            </form>
            <form style={{ border: "1px solid black", width: "100%", alignSelf: "center", display: "flex", justifyContent: "space-between",flexDirection:"column" }}>
              <div id="deletedSection" style={{ border: "1px solid black", width: "100%", display: "flex", justifyContent: "space-around" }}>
                <select onChange={Selected} style={selectionStyleForSmallerDevices}>
                  <option value="">Delete A Product</option>
                  {
                    Products.map(arr => {
                      return (
                        <option onClick={() => setSelectedProduct(arr)} value={arr._id}>{arr.Title}</option>
                      )
                    })
                  }
                </select>
                <button onClick={Delete} style={buttonStyle} >delete</button>
              </div>
              <div id="updateSection" style={{ border: "1px solid black", width: "100%", display: "flex", justifyContent: "space-around" }}>
                <select onChange={Selected} style={selectionStyleForSmallerDevices}>
                  <option value="">Update A Product</option>
                  {
                    Products.map(arr => {
                      return (
                        <>
                          <option value={arr._id}>{arr.Title}</option>
                          {/* {SelectedProductForUpdate(arr)} */}



                        </>
                      )
                    })
                  }
                </select>
                <button onClick={ShowCanvasForm} style={buttonStyle} >Update</button></div>
            </form>
            </>
            }
          </div>

        }
        <Main
          Update={Update}
          LocalProductsArray={LocalProductsArray}
          setLocalProductsArray={setLocalProductsArray}
          cart={cart}
          addToCart={addToCart} Products={Products} />

        <Offcanvas show={showCanvas} onHide={handleCloseCanvas}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form >
              <FloatingLabel controlId="title" label="Title" className="mb-3">
                <Form.Control type="text" value={CanvasTitle} onChange={(e) => setCanvasTitle(e.target.value)} />
              </FloatingLabel>

              <FloatingLabel controlId="description" label="Description" className="mb-3">
                <Form.Control type="text" value={CurrentCanvasItem.Description} onChange={(e) => setCanvasDescription(e.target.value)} />
              </FloatingLabel>

              <FloatingLabel controlId="price" label="Price" className="mb-3">
                <Form.Control type="number" value={CurrentCanvasItem.Price} onChange={(e) => setCanvasPrice(e.target.value)} />
              </FloatingLabel>

              <FloatingLabel controlId="image" label="Image URL" className="mb-3">
                <Form.Control type="text" value={CurrentCanvasItem.Image} onChange={(e) => setCanvasImage(e.target.value)} />
              </FloatingLabel>

              <Button variant="primary" onClick={Update}>
                Submit
              </Button>
            </Form>
          </Offcanvas.Body>
        </Offcanvas>
      </div>


    </div>

  );
}

export default App;
