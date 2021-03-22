const express=require('express');
const mongoose=require("mongoose");
const {mongourl}=require('./config/keys')
const app=express();

const Wish=mongoose.model("wishes");

const Grade=mongoose.model("grades");
const Shop=mongoose.model("shops");
const Productdetails=mongoose.model("productdetail");
const shopSchema = require('./models/shop')

const GradeEdit=mongoose.model("gradeedit");


mongoose.connect(mongourl,{useNewUrlParser:true})
module.exports=(app)=>{
    app.get('/data',(req,res)=>{
        Wish.find({}).then(data=>{
            console.log(data)
            // res.render('home',{wish:data})
            res.send(data)
        })
    })

    app.get('/getGrades',(req,res)=>{
        Grade.find({}).then(data=>{
            console.log(data)
            // res.render('home',{wish:data})
            res.send(data)
        })
    })


    app.post('/addGrade',(req,res)=>{
        // console.log(req.body.item)
        // data.push(req.body.item)
        // res.send(data)
        const Item=new Grade({
           grade:req.body.grade
        })
        Item.save().then(data=>{
            console.log("saved")
            res.send(data)
        }).catch(err=>{
            throw err;
        })
    })

    app.post('/addPro',(req,res)=>{
      /*  if shopid fetch from db using id update product productdetails push
       else
 push product from shopid
      */
        console.log("shopname==============================",req.body.shopname)
        console.log("shopid==============================",req.body._id)

        
        const shopname = req.body.shopname;
        const shopid = req.body._id;
       
console.log("_id",shopid)
console.log("with OBJECT",  mongoose.Types.ObjectId(shopid))
let updateProductdetails={
   "$push": {
   "product_details" : 
        {
            "productname":req.body.productname,
            "productcostprice":req.body.productcostprice,
            "productcategory":req.body.productcategory,
            "productsellingprice":req.body.productsellingprice,
        }
    }
    
}
shopSchema.findOneAndUpdate({"_id" : mongoose.Types.ObjectId(shopid)}, updateProductdetails
 , {new:true}
 ,  (err, prodet) => {
     if (err) console.log("err", err)
     console.log("prodet", prodet)
     res.send({"message" : prodet})} )

})


app.post('/addProduct',(req,res)=>{
    
   
    const Item=new Productdetails({
      shopid : req.body.shopid,
       shopname:req.body.shopname,
       shopaddress:req.body.shopaddress,
      productname:req.body.productname,
     productcostprice:req.body.productcostprice,
   productsellingprice:req.body.productsellingprice,
   category:req.body.category
    })
    Item.save().then(data=>{
        console.log("saved")
        res.send(data)
    }).catch(err=>{
        throw err;
    })
})

    app.post('/addShop',(req,res)=>{
        // console.log(req.body.item)
        // data.push(req.body.item)
        // res.send(data)
        const salonId = req.body._id;
        const Item=new Shop({
            // shopId=req.body._id,
           shopname:req.body.shopname,
           shopaddress:req.body.shopaddress,
        })
        Item.save().then(data=>{
            console.log("saved")
            res.send(data)
        }).catch(err=>{
            throw err;
        })
    })
    
    
    app.get('/getShops',(req,res)=>{
        Shop.find({}).then(data=>{
            console.log(data)
            // res.render('home',{wish:data})
            res.send(data)
        })
    })


    // app.get('/getProducts',(req,res)=>{

    //     Productdetails.find({}).then(data=>{
    //         console.log("products details",data)
    //         // res.render('home',{wish:data})
    //         res.send(data)
    //     })
    // })



    app.get('/getProducts',(req,res)=>{

        shopSchema.find({}).then(data=>{
            console.log("products details",data)
            // res.render('home',{wish:data})
            res.send(data)
        })
    })


    //post route
    app.post('/sent',(req,res)=>{
        // console.log(req.body.item)
        // data.push(req.body.item)
        // res.send(data)
        const Item=new Wish({
           wish:req.body.item
        })
        Item.save().then(data=>{
            console.log("saved")
            res.send(data)
        }).catch(err=>{
            throw err;
        })
    })

    app.post('/gradeedit',(req,res)=>{
        console.log(req.body)
        // data.push(req.body.item)
        // res.send(data)
        const Item=new GradeEdit({
            gname:req.body.gname,
            selectedOption:req.body.selectOption,
            selectedOption2:req.body.selectOption2,
            min:req.body.min,
            max:req.body.max,
            avg:req.body.avg,
            rem:req.body.rem,
            impurity:req.body.impurity
        })
        Item.save().then(data=>{
            console.log("saved")
            res.send(data)
        }).catch(err=>{
            throw err;
        })
    })


    //delete route
    app.delete('/removeshop/:id',(req,res)=>{
        // const shopid = req.body._id;
        shopSchema.findOneAndRemove({_id:req.params.id}).then(data=>{
            console.log("deleted")
            res.send(data)

        })
        
//        data= data.map(item=>{
//           if(item!=req.params.id)  
//           return item;
//         })
// console.log("arr h",req.params.id)
    })


    app.delete('/remove/:id',(req,res)=>{
        Wish.findOneAndRemove({_id:req.params.id}).then(data=>{
            console.log("deleted")
            res.send(data)

        })
        

    })
    
}
