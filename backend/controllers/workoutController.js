const Workout=require('../models/workoutModel')
const mongoose=require('mongoose')

//get all workouts
const getWorkouts=async(req,res)=>{
    const workouts=await Workout.find({}).sort({createdAt:-1})
    res.status(200).json(workouts)
}


//get a single workout
const getWorkout= async(req,res)=>{
    const{id}=req.params
if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:'No such workout'})
}
const workout= await Workout.findById(id)
if(!Workout){
    return res.status(404).json({error:'No such workout'})
}

res.status(200).json(workout)

}


//create new workout 
const createWorkout = async(req,res)=>{
    const {title,load,reps}=req.body
    //add doc to db
    try{
    const workout=await Workout.create({title,load,reps})
    res.status(200).json(workout)
    }

    catch(error){
    res.status(400).json({error: error.message})
    }
    res.json({mssg:'post a new workout'})
}


//delete a workout
const deleteWorkout=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such workout'})
    }
    const workout= await Workout.findOneAndDelete({_id: id})
    if(!Workout){
        return res.status(400).json({error:'No such Workout'})

    }
    res.status(200).json(workout)
}

//update workout
const updateWorkout= async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such workout'})
    }
    const workout= await Workout.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!Workout){
        return res.status(400).json({error:'No such Workout'})

    }
    res.status(200).json(workout)
}



module.exports={
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}