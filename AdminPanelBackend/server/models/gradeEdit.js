const mongoose=require("mongoose");
const Schema=mongoose.Schema;


const GradeEditSchema=Schema({
    gname:String,
    selectedOption:String,
    selectedOption2:String,
    min:String,
    max:String,
    avg:String,
    rem:String,
    impurity:String,

    
})

mongoose.model("gradeedit",GradeEditSchema)