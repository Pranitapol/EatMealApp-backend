const mongoose=require('mongoose');

const mealSchema=new mongoose.Schema({
    mealId:{
        type:Number
    },
    name:{
        type:String
    },
    description:{
        type:String
    },
    price:{
        type:Number
    }
})

module.exports=mongoose.model('Meal',mealSchema)