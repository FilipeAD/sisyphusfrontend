import React, { useContext, useEffect, useState } from 'react'
import '../styles/exercise.css';
import '../styles/filter.css';
import WorkoutFilters from '../components/filter'
import '../styles/exercise.css'; 
import AuthContext from '../context/AuthContext';

const Exercises = () => {
    let{exercises, getExerciseinfo} = useContext(AuthContext)


    useEffect(()=>{
        getExerciseinfo()
    }, [])

  return (
    <div>
        <WorkoutFilters />
        <div>
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
    </div>
  )
}

export default Exercises
