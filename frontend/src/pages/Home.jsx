import {useEffect,useState} from 'react'

export default function Home(){
    const[workouts,setWorkouts]=useState(null)
    useEffect(()=>{
        const fetchWorkouts= async()=>{
            const response = await fetch('api/workouts')
        const json= await response.json()
        if(response.ok){
            setWorkouts(json)
        }
        }
        fetchWorkouts()
    }, [])
    return(
        <div className="Home">
            <div className="workouts">
                {workouts && workouts.map(() => (
                    <p key={workouts._id}>{workouts.title}</p>
                ))}
            </div>

        </div>
    )
}