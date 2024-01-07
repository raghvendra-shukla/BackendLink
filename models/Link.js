const mongoose=require("mongoose");
const { Schema } = mongoose;
// Bookname, Subject, BookImg, Author, Class, Price, Buy

const CartSchema = new Schema({
    Link:{
        type:String,
        require:true
    },
    ShortLink:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports=mongoose.model("Cart",CartSchema);