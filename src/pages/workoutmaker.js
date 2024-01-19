import React, { useContext, useEffect, useState } from 'react'
import sisyphusIcon from '../resources/sisyphusIcon.png';
import '../styles/basicForms.css'; 
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Workoutmaker() {
  const generic_musclegroups = [
    'lats',
    'chest',
    'abdominals',
    'quadriceps',
    'chest',
    'triceps',
    'glutes',
    'quadriceps',
  ];

  const history = useNavigate();



  let{setTrainingplanExercises}  = useContext(AuthContext)

  let createPlan = async (e) => {
    e.preventDefault();

    const exercises = [];

    for (const muscle of generic_musclegroups) {
      const url = `http://127.0.0.1:8000/api/exercises/strength/${muscle}/body_only/intermediate/`;

      exercises.push(
        fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => {
            if (response.status === 200) {
              return response.json();
            } else {
              console.log(response);
              return [];
            }
          })
          .catch((error) => {
            console.error('Error fetching exercises:', error);
            return [];
          })
      );

    }

    const exercisesResults = await Promise.all(exercises);

    const flattenedExercises = exercisesResults.reduce((acc, exercises) => {
      return acc.concat(exercises);
    }, []);

    setTrainingplanExercises(flattenedExercises);
    history('/planpage');
  };

 

  return (
    <div className='basic-container'>
      <div className="profile-container">
        <form  className='menu-Edit' onSubmit={createPlan}>
          <h1>Generate Workout Plan</h1>
          <img src={sisyphusIcon} alt="Logo" />
          <p>Our personal algoritham will make u a 4 day workout plan for the basic muscle groups</p>
          <button type="submit" tabIndex={0}>Generate</button>
        </form>
        
      </div>
      
    </div>
  )
}

export default Workoutmaker
