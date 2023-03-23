const mongoose=require('mongoose')

const orderSchema=new mongoose.Schema({
  
    user:{
        city:{
            type:String
        },
        name:{
            type:String
        },
        postalCode:{
            type:String
        },
        street:{
            type:String
        }
    },
    orderItems:[{
        amount:{
            type:Number
        },
        id:{
            type:Number
        },
        name:{
            type:String
        },
        price:{
            type:Number
        }
    }]
})
module.exports=mongoose.model('mealOrders',orderSchema)