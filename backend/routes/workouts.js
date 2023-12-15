const express =require('express')
const router=express.Router()
const{
    createWorkout,getWorkouts,getWorkout,deleteWorkout,updateWorkout,
}=require('../controllers/workoutController')

//this is to get all workouts
router.get('/',getWorkouts)
//get a single workout, here : means the id keeps on changing
router.get('/:id',getWorkout)

//post a new workout
router.post('/',createWorkout)
//delete a workout
router.delete('/:id',deleteWorkout)
//update a workout
router.patch('/:id',updateWorkout)

module.exports=router