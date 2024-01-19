// Updated React Code
import React, { useState } from 'react';
import '../styles/workoutPlanner.css';

const WorkoutPlanner = () => {
  const questions = [
    'Choose the difficulty level:',
    'Select the workout type:',
    'Select muscle groups (Select at least 2 and at most 4):',
  ];

  const options = [
    ['Beginner', 'Intermediate', 'Expert'],
    [
      'Cardio', 'Olympic weightlifting', 'Plyometrics', 'Powerlifting', 'Strength', 'Strongman'
    ],
    [
      'Triceps', 'Chest', 'Lower Chest', 'Upper Chest', 'Quadriceps', 'Calfs',
      'Biceps', 'Lower Back', 'Upper Back', 'Middle Back', 'Forearms', 'Neck',
      'Traps', 'Lats', 'Glutes', 'Abductors'
    ],
  ];

  const [selectedOptions, setSelectedOptions] = useState({
    1: '', // For Difficulty (initially no difficulty selected)
    2: '', // For Workout Type (initially no workout type selected)
    0: [], // For Muscle Groups (initially no muscle groups selected)
  });

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleSelectOption = (option, questionIndex) => {
    if (questionIndex === 0) {
      // For Difficulty (buttons)
      setSelectedOptions({ ...selectedOptions, [0]: option });
      setCurrentQuestion(currentQuestion + 1);
    } else if (questionIndex === 1) {
      // For Workout Type (buttons)
      setSelectedOptions({ ...selectedOptions, [1]: option });
      setCurrentQuestion(currentQuestion + 1);
    } else if (questionIndex === 2) {
      // For Muscle Groups (checkboxes)
      const selectedMuscleGroups = selectedOptions[2];

      if (
        (option.target.checked && selectedMuscleGroups.length < 4) ||
        (!option.target.checked && selectedMuscleGroups.length >= 2)
      ) {
        const updatedMuscleGroups = option.target.checked
          ? [...selectedMuscleGroups, option.target.value]
          : selectedMuscleGroups.filter((group) => group !== option.target.value);

        setSelectedOptions({ ...selectedOptions, [2]: updatedMuscleGroups });
      } else {
        alert('You can only select between 2 and 4 muscle groups.');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedMuscleGroups = selectedOptions[2];
    const selectedDifficulty = selectedOptions[0];
    const selectedWorkoutType = selectedOptions[1];

    if (selectedMuscleGroups.length >= 2 && selectedMuscleGroups.length <= 4 && selectedDifficulty !== '' && selectedWorkoutType !== '') {
      console.log('Submitted:', selectedOptions);
      // Add any further logic or API calls for submission here
    } else {
      alert('Please select at least 2 and at most 4 muscle groups, choose a difficulty level, and select a workout type.');
    }
  };

  return (
    <div className="workout-planner-container">
      <div className="question-container">
        <div className="question-box">
          <h2>Difficulty Level</h2>
          {options[0].map((option) => (
            <button key={option} className="button" onClick={() => handleSelectOption(option, 0)}>
              {option}
            </button>
          ))}
        </div>

        <div className="type-box">
          <h2>Workout Type</h2>
          {options[1].map((typeOption) => (
            <button key={typeOption} className="button" onClick={() => handleSelectOption(typeOption, 1)}>
              {typeOption}
            </button>
          ))}
        </div>

        <div className="question-box muscle-group-box">
          <h2>Muscle Groups</h2>
          {options[2].map((option) => (
            <div key={option} className="checkbox-label">
              <label>
                <input
                  type="checkbox"
                  value={option}
                  checked={selectedOptions[2].includes(option)}
                  onChange={(e) => handleSelectOption(e, 2)}
                />
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>

      <button type="submit" onClick={handleSubmit} className="submit-button">
        Submit
      </button>
    </div>
  );
};

export default WorkoutPlanner;
