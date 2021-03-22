const mongoose=require("mongoose");
const Schema=mongoose.Schema;


const GradeSchema=Schema({
    grade:String
    
})

mongoose.model("grades",GradeSchema)