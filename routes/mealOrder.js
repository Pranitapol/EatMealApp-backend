const express=require('express');
const router=express.Router();
const mealOrders=require('../models/orderMealModel')


router.post('/ordermeal',async(req,res)=>{
    console.log('posting data',req.body)
    const data=new mealOrders({
        user:req.body.user,
        orderItems:req.body.orderItems,

    })
    try{
        const result=await data.save();
        res.status(200).json(result)
    }catch(err){
        res.status(400).json({message:err.message})
    }
})
 router.get('/getorder',async(req,res)=>{
    try{
        const data=await mealOrders.find({})
        res.json(data)
    }catch(err){
        res.json(500).json({message:err.message})
    }
 })

 module.exports=router;