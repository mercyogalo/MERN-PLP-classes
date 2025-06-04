const mongoose=require("mongoose");

const bookSChema=new mongoose.Schema({
    title:{type: String, required:true },
    author: String,
    publisherYear:Number,
    genre:String
});

module.exports=mongoose.model('Book',bookSChema)