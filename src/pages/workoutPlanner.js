// Updated React Code
import React, { useContext, useState } from 'react';
import '../styles/workoutPlanner.css';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const WorkoutPlanner = () => {

  const generic_musclegroups = [
    
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
    <div className="workout-planner-container">
      <div className="question-container">
        <div className="question-box">
          <h2>Difficulty Level</h2>
          <button value="beginner">Beginner</button>
          <button value="intermediate">Intermediate</button>
          <button value="expert">Expert</button>
        </div>

        <div className="type-box">
          <h2>Workout Type</h2>
          <button value="cardio">Cardio</button>
          <button value="olympic-weightlifting">Olympic Weightlifting</button>
          <button value="plyometrics">Plyometrics</button>
          <button value="powerlifting">Powerlifting</button>
          <button value="strength">Strength</button>
          <button value="strongman">Strongman</button>
        </div>

        <div className="question-box muscle-group-box">
          <h2>Muscle Groups</h2>
          <div className="checkbox-label">
            <label>
              <input type="checkbox" id='chest' value="chest"/>
              Chest 
            </label>
            <label>
              <input type="checkbox" value="glutes" />
              Glutes
            </label>
            <label>
              <input type="checkbox" value="hamstrings" />
              Hamstrings
            </label>
            <label>
              <input type="checkbox" value="traps" />
              Traps
            </label>
            <label>
              <input type="checkbox" value="abdominals" />
              Abdominals
            </label>
            <label>
              <input type="checkbox" value="abductors" />
              Abductors
            </label>
            <label>
              <input type="checkbox" value="lats" />
              Lats
            </label>
            <label>
              <input type="checkbox" value="biceps" />
              Biceps
            </label>
            <label>
              <input type="checkbox" value="neck" />
              Neck
            </label>
            <label>
              <input type="checkbox" value="quadriceps" />
              Quadriceps
            </label>
            <label>
              <input type="checkbox" value="calves" />
              Calves
            </label>
            <label>
              <input type="checkbox" value="lower-back" />
              Lower Back
            </label>
            <label>
              <input type="checkbox" value="middle-back" />
              Middle Back
            </label>
            <label>
              <input type="checkbox" value="forearm" />
              Forearm
            </label>
          </div>
        </div>
      </div>

    

      <button type="submit" className="submit-button">
        Genrate Training Plan
      </button>
    </div>
  );
};

export default WorkoutPlanner;

