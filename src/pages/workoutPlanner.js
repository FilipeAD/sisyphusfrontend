import React, { useState } from 'react';
import '../styles/workoutPlanner.css';

const WorkoutPlanner = () => {
  const muscleGroupOptions = [
    'Triceps',
    'Chest',
    'Lower Chest',
    'Upper Chest',
    'Quadriceps',
    'Calfs',
    'Biceps',
    'Lower Back',
    'Upper Back',
    'Middle Back',
    'Forearms',
    'Neck',
    'Traps',
    'Lats',
    'Glutes',
    'Abductors',
  ];

  const difficultyOptions = ['Beginner', 'Intermediate', 'Expert'];

  const equipmentOptions = [
    'Kettle Bell',
    'Dumbbells',
    'Z-Bar',
    'Body-Only',
    'Barbell',
    'Machines',
    'Cables',
    'Bands',
    'Other',
  ];

  const typeOptions = [
    'Cardio',
    'Olympic weightlifting',
    'Plyometrics',
    'Powerlifting',
    'Strength',
    'Strongman',
  ]

  const [selectedOptions, setSelectedOptions] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

 
  const handleSelectOption = (option) => {
    setSelectedOptions({ ...selectedOptions, [currentQuestion]: option });
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', selectedOptions);
  };

  return (
    <div className="workout-planner-container">
      
        <div>
          <h2>Workout Planner</h2>
          <ul>
          </ul>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      
    </div>
  );
};

export default WorkoutPlanner;
