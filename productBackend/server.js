require("dotenv").config()
const PORT = process.env.PORT || 3001
const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())
const mongoose = require('mongoose');
const Product = require("./Schemas/products")
app.use(express.json())
const seedData = require("./seed")
// app.use(express.urlencoded({ entended:true}))

app.get("/products",async (req,res) => {
    console.log(process.env.DATABASE_URL,"heyyy , this is your datavase url")
try{
    await mongoose.connect(process.env.DATABASE_URL)
    let ProductFromDatabase = await Product.find({})
    // await mongoose.disconnect()
    res.json(ProductFromDatabase)
}catch(error){
    console.error(error.message)
   
    res.send({message: "error from get route /"})
}finally{
    mongoose.disconnect()
}
})


app.post("/products",async (req,res) => {
    const {Title,Description,Image,Category} = req.body
    const Price = parseInt(req.body.Price)
try{
    await mongoose.connect(process.env.DATABASE_URL)
    let ProductFromDatabase = await Product.create({Title,Description,Image,Price,Category})
    await mongoose.disconnect()
    res.json(ProductFromDatabase)
}catch(error){
    console.error(error.message)
    mongoose.disconnect()
    res.send({message: "error from post route /"})
}
})

app.delete("/products/:id",async (req,res) => {
try{
    await mongoose.connect(process.env.DATABASE_URL)
    let ProductFromDatabase = await Product.findByIdAndDelete(req.params.id)
    await mongoose.disconnect()
    res.json(ProductFromDatabase)
}catch(error){
    console.error(error.message)
    mongoose.disconnect()
    res.send({message: "error from delete route /"})
}
})

app.put("/products/:id",async (req,res) => {
    try{
        await mongoose.connect(process.env.DATABASE_URL)
        const {Title,Description,Image,Price,Category} = req.body
        let ProductFromDatabase = await Product.findByIdAndUpdate(req.params.id,{Title,Description,Image,Price,Category}, { new: true })
        await mongoose.disconnect()
        res.json(ProductFromDatabase)
    }catch(error){
        console.error(error.message)
        mongoose.disconnect()
        res.send({message: "error from delete route /"})
    }
    })





app.listen(PORT)