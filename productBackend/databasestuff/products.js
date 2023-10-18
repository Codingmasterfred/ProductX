const mongoose = require("mongoose")
const {Schema} = mongoose

const productSchema = new Schema({
    Title:String,
    Description:String,
    Image:String,
    Price:Number,
    Category:String
})

const Product = mongoose.model("Product",productSchema)


module.exports = Product;