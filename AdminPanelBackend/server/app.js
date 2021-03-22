const express=require('express');
var bodyParser = require('body-parser')

const app=express();
const port=process.env.PORT|| 5000;
app.use(function (req,res,next)
{
    res.setHeader('Access-Control-Allow-Origin','*'),
    res.setHeader('Access-Control-Allow-Methods','GET');
    next();
});


app.use(express.static('public'))
require('./models/wish')
require('./models/grade')
require('./models/shop')
require('./models/productdetail')

require('./models/gradeedit')

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
require('./routes')(app);


app.set('view engine','ejs')
app.listen(port,()=>{
    console.log("Server running on  port"+port)
 
})
