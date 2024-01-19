import React, { useEffect, useState } from 'react'
import '../styles/exercise.css';
import Filter from '../components/filter'

const Exercises = () => {


    let [exercises, setExercises] = useState([]);

    
    let getExerciseinfo = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/exercises/', {
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
            }
        })
    
        
        let data = await response.json()
        console.log('working')
        if(response.status == 200){
            setExercises(data);
        }else{
            console.error(`Failed to get Exercies information. Status: ${response.status}`);
        }
    }

    useEffect(()=>{
        getExerciseinfo()
    }, [])

  return (
    <div>
        <Filter />
        {exercises.map(exercise => (
            <div key={exercise.id} className='list-container'>
                <li>
                    <div className='group-container'>
                        <h3>{exercise.name} | {exercise.muscle} |</h3>
                        Type {exercise.type} 
                    </div> 
                    Instructions <br></br>
                    {exercise.instructions}
                    <h4>{exercise.difficulty}</h4>          
            
                </li>
            </div>
        ))}
    </div>
  )
}

export default Exercises
