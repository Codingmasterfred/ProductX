// getting-started.js
const mongoose = require('mongoose');
const Product = require("./databasestuff/products")
require("dotenv").config()

async function seed() {
    try {
        console.log("hkdwbchw", process.env.DATABASE_URL)
        await mongoose.connect(process.env.DATABASE_URL,

            {
                useNewUrlParser: true,
                useUnifiedTopology: true


            })

        await Product.create({
            Title: "Iphone",
            Description: "Im rich",
            Image: "http//",
            Price: 1000,
            Category: "electronics"
        })

        // await mongoose.disconnect()

    } catch (error) {
        console.error("cant connect to database", error)
    }
    finally{
       mongoose.disconnect()

    }
    

}
seed()
