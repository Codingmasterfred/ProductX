import React from "react"
import logo from './logo.svg';
import './App.css';
import NavBar1 from "./navbar"
import {useAuth0} from "@auth0/auth0-react"
import Main from "./Main"
import Data from "./data.json"
import { useState , useEffect} from "react";
import axios from "axios"




function App() {
  const {
    loginWithPopup,
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    getAccessTokenSilenty
  } = useAuth0()

  const [cart,addToCart] = useState([])
  const [showForm,setShowForm] = useState(false)
  const [Title,setTitle] = useState("")
  const [Description,setDescription] = useState("")
  const [Price,setPrice] = useState("")
  const [Image, setImageUrl] = useState("")
  const [Category, setCategory] = useState("")
  const [Products,setProducts] = useState([])
  const [selectedProduct,setSelectedProduct] = useState("")

  useEffect( () =>{
    async function getProducts(){
      let response = await axios.get("https://productbackend-5lj2.onrender.com/products")
      console.log(response.data)
      setProducts(response.data)
    }
    getProducts()
  },[])


  console.log("cart",cart)

function Selected(event){
  console.log(event.target.value)
setSelectedProduct(event.target.value)
}

function Backend(event){
  event.preventDefault()
  async function BackEnd(){
    let Home = await axios.put(`https://productbackend-5lj2.onrender.com/products`)
    
  }
}


  function Delete(event){
    event.preventDefault()
    async function DeleteProduct(){
      try{
        let deletedItem = await axios.delete(`https://productbackend-5lj2.onrender.com/products/${selectedProduct}`)
        let filterItem = Products.filter(arr =>{
          if(selectedProduct === arr._id){
            setCategory(arr.Category)
            setImageUrl(arr.Image)
            setTitle(arr.Title)
            return false
          }else{
            return true
          }
        })
        setProducts(filterItem)
        console.log("deletedItem",deletedItem.data)
      }catch(error){
        console.error(error)
      }
    }
    DeleteProduct()
  }

  function Update(event){
    event.preventDefault()
    async function Updateproduct(){
      try{
        let UpdateThisItem = await axios.put(`https://productbackend-5lj2.onrender.com/products/${selectedProduct}`)
      }catch(error){
     console.error(error)
      }
    }
    Updateproduct()
  }
  
  function onclick(){
    setShowForm(true)
  }
  function onchangeTitle(event){
    setTitle(event.target.value)
  }

  function onchangeDescription(event){
    setDescription(event.target.value)
  }
  function onchangePrice(event){
    setPrice(event.target.value)
  }
  function onchangeCategory(event){
    setCategory(event.target.value)
  }
  function onchangeImageUrl(event){
    setImageUrl(event.target.value)
  }
   function Submit(event){
    event.preventDefault()
    async function AddData(){


      try{
       let added  = await axios.post("https://productbackend-5lj2.onrender.com/products", {
        Title,
        Description,
        Image,
        Category,
        Price

       })
  
      }catch(error){
        console.error(error)
      }
    }
    AddData()
  }

  function SelectedProductForUpdate(arr){
    setTitle(arr.Title)
  }
  
  
  return (
    <div >
      <NavBar1 cart={cart}/>
      <div className="App">
      <div><h1>{user?`Welcome ${user.given_name?user.given_name:user.name }` : <></>}</h1> {user && user.email === "fredrickg777@gmail.com" ? <button onClick={onclick}>Admin</button>:<></>}</div>
      {showForm && 
      <>
      <form type="submit" onSubmit={Submit}>
        <label htmlFor="Title"><input type="text" placeholder="Title" id="Title" onChange={onchangeTitle}></input></label>
        <label htmlFor="Description"><input type="text" placeholder="Description" id="Description" onChange={onchangeDescription}></input></label>
        <label htmlFor="Price"><input type="text" placeholder="Price" id="Price"onChange={onchangePrice}></input></label>
        <label htmlFor="Category"><input type="text" placeholder="Category" id="Category"onChange={onchangeCategory}></input></label>
        <label htmlFor="Image"><input type="text" placeholder="Image" id="Image"onChange={onchangeImageUrl}></input></label>
        <button type="submit">Submit</button>
      </form>
      <form>
        <select onChange={Selected}>
          <option value="">Delete A Product</option>
          {
            Products.map(arr =>{
              return(
                <option value={arr._id}>{arr.Title}</option>
              )
            })
          }
        </select>
        <button onClick={Delete} >delete</button>

        <select onChange={Selected}>
          <option value="">Update</option>
          {
            Products.map(arr =>{
              return(
                <>
                <option value={arr._id}>{arr.Title}</option>
                  {/* {SelectedProductForUpdate(arr)} */}
               
                

                </>
              )
            })
          }
        </select>
        <button onClick={Delete} >delete</button>
      </form>
      </>

      }
      <Main cart={cart} addToCart={addToCart}/>
     
      </div>
    </div>
  );
}

export default App;
