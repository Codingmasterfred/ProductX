require("dotenv").config()
const PORT = process.env.PORT || 3001
const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors({origin:"http://localhost:3000"}))
const mongoose = require('mongoose');
const Product = require("./databasestuff/products")
app.use(express.json())
app.use(express.urlencoded({ entended:true}))

app.get("/products",async (req,res) => {
try{
    await mongoose.connect(process.env.LOCALDATABASE)
    let ProductFromDatabase = await Product.find({})
    await mongoose.disconnect()
    res.json(ProductFromDatabase)
}catch(error){
    console.error(error.message)
    mongoose.disconnect()
    res.send({message: "error from get route /"})
}
})


app.post("/products",async (req,res) => {
    const {Title,Description,Image,Category} = req.body
    const Price = parseInt(req.body.Price)
try{
    await mongoose.connect(process.env.LOCALDATABASE)
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
    await mongoose.connect(process.env.LOCALDATABASE)
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
        await mongoose.connect(process.env.LOCALDATABASE)
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