const express=require('express');
const router=express.Router();
const Meal=require('../models/foodModel');

router.get('/getmeal', async (req, res) => {
    try{
        const data = await Meal.find({}).sort({mealId:1});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.get('/:mealId',async(req,res)=>{
    
    try{
       const data= await Meal.findOne({mealId:req.params.mealId});
       res.json(data);
    }catch(err){
        res.status(500).json({message:err.message})
    }
})

router.post('/post', async (req, res) => {
    const data = new Meal({
        mealId:req.body.mealId,
        name: req.body.name,
        description: req.body.description,
        price:req.body.price
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})


router.patch('/:mealId',async(req,res)=>{

    try{
    const data= await Meal.findOneAndUpdate({mealId:req.params.mealId},
        {
        mealId:req.body.mealId,
        name:req.body.name,
        description:req.body.description,
        price:req.body.price
    })
        res.status(200).json(data)
    }catch(err){
        res.status(400).json({message:err.message})
    }
})

router.delete('/:mealId',async(req,res)=>{

    try{
      const data=await  Meal.findOneAndDelete({mealId:req.params.mealId})
      res.status(200).json(data)
    }catch(err){
        res.status(400).json({message:err.message})
    }
})

module.exports=router;