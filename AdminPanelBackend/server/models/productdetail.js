const mongoose=require("mongoose");
const Schema=mongoose.Schema;


const ProductDetailSchema=Schema({
    shopid:String,
    shopname:String,
    shopaddress:String,
    productname:String,
    productcostprice:String,
    productsellingprice:String,
    productcategory:String,
})

const productdetail=mongoose.model("productdetail",ProductDetailSchema)
module.exports=productdetail;


