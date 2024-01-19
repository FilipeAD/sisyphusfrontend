// Updated React Code
import React, { useState } from 'react';
import '../styles/workoutPlanner.css';

const WorkoutPlanner = () => {




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
              <input type="checkbox" value="chest" />
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
        Genrate

      </button>
    </div>
  );
};

export default WorkoutPlanner;

