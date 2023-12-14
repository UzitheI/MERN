const express =require('express')
const router=express.Router()

//this is to get all workouts
router.get('/',(req,res)=>{
    res.json({mssg:"Get workouts"})

})
//get a single workout, here : means the id keeps on changing
router.get('/:id',(req,res)=>{
    res.json({mssg:'Get single workout'})
})
//post a new workout
router.post('/',(req,res)=>{
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