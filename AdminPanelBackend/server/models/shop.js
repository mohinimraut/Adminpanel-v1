const mongoose=require("mongoose");
const Schema=mongoose.Schema;


const ShopSchema=Schema({
    shopname:String,
    shopaddress:String,
    product_details : [{
      // shopname :String,
      // shopaddress :String,
      productname:String,
      productcostprice:String,
      productsellingprice:String,
      productcategory:String,
      
  }]
   
})

const shop = mongoose.model("shops",ShopSchema)
module.exports = shop