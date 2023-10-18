// getting-started.js
require("dotenv").config()
const Product = require("./databasestuff/products")
const mongoose = require('mongoose');

async function seed(){
    try{
        console.log("hkdwbchw",process.env.LOCALDATABASE)
        mongoose.connect(process.env.LOCALDATABASE,
            {
                useNewUrlParser:true,
                useUnifiedTopology:true
                

        })

        await Product.create({
            Title:"Iphone",
            Description:"Im rich",
            Image:"http//",
            Price:1000, 
            Category:"electronics"
        })

        mongoose.disconnect()

    }catch(error){
        console.error("cant connect to database",error)
        mongoose.disconnect()
    }


}
seed()
