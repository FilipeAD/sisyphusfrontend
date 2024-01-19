import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import '../styles/planpage.css'
import { useNavigate } from 'react-router-dom';

function Planpage() {
  const history = useNavigate();
    let {user, TrainingplanExercises} = useContext(AuthContext)

    const exercisesPerDay = 6; 
    const days = Math.ceil(TrainingplanExercises.length / exercisesPerDay);
    const validDays = Math.max(1, days);

    let updateCalories = async (userId, newCalories) => {
      const url = `http://127.0.0.1:8000/api/update-calories/${userId}/`;
  
      try {
          const response = await fetch(url, {
              method: 'PUT',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ calorieIntake: newCalories }),
          });
  
          if (response.ok) {
              const data = await response.json();
              console.log('Calories updated:', data);
          } else {
              console.error('Failed to update calories:', response.status);
          }
      } catch (error) {
          console.error('Error updating calories:', error);
      }
  };

  const conectThePlan = (e) =>{
      if(user){
          history('/profilepage')
      }else{
          alert("You are not logged in.'Create Account' to connect plan.")
          history('/register');
      }
  }
  
    return (
      <div>
        <button className='buttonConnect' onClick={conectThePlan}>connect to acount</button>   

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
