const express =require('express')
const router=express.Router()
const Workout=require('../models/workoutModel')

//this is to get all workouts
router.get('/',(req,res)=>{
    res.json({mssg:"Get workouts"})

})
//get a single workout, here : means the id keeps on changing
router.get('/:id',(req,res)=>{
    res.json({mssg:'Get single workout'})
})
//post a new workout
router.post('/',async(req,res)=>{
    const {title,load,reps}=req.body
    try{
    const workout=await Workout.create({title,load,reps})
    res.status(200).json(workout)
    }
    catch(error){
    res.status(400).json({error: error.message})
    }
    res.json({mssg:'post a new workout'})
})
//delete a workout
router.delete('/:id',(req,res)=>{
    res.json({mssg:'delete a workout'})
})
//update a workout
router.patch('/:id',(req,res)=>{
    res.json({mssg:'patch a new workout'})
})

module.exports=router