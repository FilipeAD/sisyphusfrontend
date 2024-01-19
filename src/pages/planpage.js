import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import '../styles/planpage.css'

function Planpage() {
    let {TrainingplanExercises} = useContext(AuthContext)

    const exercisesPerDay = 6; 
    const days = Math.ceil(TrainingplanExercises.length / exercisesPerDay);
    const validDays = Math.max(1, days);
  
    return (
      <div>
        <button className='buttonConnect'>connect to acount</button>   
        {[...Array(validDays)].map((_, dayIndex) => (
        
          <div key={dayIndex}>
            <h2>Day {dayIndex + 1}</h2>
            {TrainingplanExercises.slice(
              dayIndex * exercisesPerDay,
              (dayIndex + 1) * exercisesPerDay

            ).map((exercise, index) => (

              <div key={index} className='list-container'>
                <li>
                  <div className='group-container'>
                    <h3>{exercise.name} | {exercise.muscle} |</h3>
                    Type {exercise.type}
                  </div>
                  Instructions <br />
                  {exercise.instructions}
                  <h4>{exercise.difficulty}</h4>
                </li>
              </div>

            ))}
          </div>


        ))}
      </div>
    );
  }
  

export default Planpage
