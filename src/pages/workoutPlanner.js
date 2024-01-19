// Updated React Code
import React, { useState } from 'react';
import '../styles/workoutPlanner.css';

const WorkoutPlanner = () => {
  const questions = [
    'Select muscle groups (Select at least 2 and at most 4):',
    'Choose the difficulty level:',
    'Pick your preferred equipment:',
    'Select the workout type:',
  ];

  const options = [
    [
      'Triceps', 'Chest', 'Lower Chest', 'Upper Chest', 'Quadriceps', 'Calfs',
      'Biceps', 'Lower Back', 'Upper Back', 'Middle Back', 'Forearms', 'Neck',
      'Traps', 'Lats', 'Glutes', 'Abductors'
    ],
    ['Beginner', 'Intermediate', 'Expert'],
    [
      'Kettle Bell', 'Dumbbells', 'Z-Bar', 'Body-Only', 'Barbell', 'Machines',
      'Cables', 'Bands', 'Other'
    ],
    [
      'Cardio', 'Olympic weightlifting', 'Plyometrics', 'Powerlifting', 'Strength', 'Strongman'
    ],
  ];

  const [selectedOptions, setSelectedOptions] = useState({
    0: [], // For Muscle Groups (initially no muscle groups selected)
    2: {}, // For Equipment (initially no equipment selected)
    3: '', // For Workout Type (initially no workout type selected)
  });

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleSelectOption = (option, questionIndex) => {
    if (questionIndex === 0) {
      // For Muscle Groups (checkboxes)
      const selectedMuscleGroups = selectedOptions[0];

      if (
        (option.target.checked && selectedMuscleGroups.length < 4) ||
        (!option.target.checked && selectedMuscleGroups.length >= 2)
      ) {
        const updatedMuscleGroups = option.target.checked
          ? [...selectedMuscleGroups, option.target.value]
          : selectedMuscleGroups.filter((group) => group !== option.target.value);

        setSelectedOptions({ ...selectedOptions, [0]: updatedMuscleGroups });
      } else {
        alert('You can only select between 2 and 4 muscle groups.');
      }
    } else if (questionIndex === 2) {
      // For Equipment (select boxes)
      setSelectedOptions({ ...selectedOptions, [2]: { ...selectedOptions[2], [option]: '' } });
    } else if (questionIndex === 3) {
      // For Workout Type (buttons)
      setSelectedOptions({ ...selectedOptions, [3]: option });
    } else {
      // For other questions (buttons)
      setSelectedOptions({ ...selectedOptions, [currentQuestion]: option });
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedMuscleGroups = selectedOptions[0];
    const selectedEquipment = selectedOptions[2];
    const selectedWorkoutType = selectedOptions[3];

    if (selectedMuscleGroups.length >= 2 && selectedMuscleGroups.length <= 4 && selectedWorkoutType !== '') {
      console.log('Submitted:', selectedOptions);
      // Add any further logic or API calls for submission here
    } else {
      alert('Please select at least 2 and at most 4 muscle groups, and choose a workout type.');
    }
  };

  return (
    <div className="workout-planner-container">
      <div className="question-container">
        <div className="question-box">
          <h2>Difficulty Level</h2>
          {options[1].map((option) => (
            <button key={option} className="button" onClick={() => handleSelectOption(option, 1)}>
              {option}
            </button>
          ))}
        </div>

        <div className="type-box">
          <h2>Workout Type</h2>
          {options[3].map((typeOption) => (
            <button key={typeOption} className="button" onClick={() => handleSelectOption(typeOption, 3)}>
              {typeOption}
            </button>
          ))}
        </div>

        <div className="question-box muscle-group-box">
          <h2>Muscle Groups</h2>
          {options[0].map((option) => (
            <div key={option} className="checkbox-label">
              <label>
                <input
                  type="checkbox"
                  value={option}
                  checked={selectedOptions[0].includes(option)}
                  onChange={(e) => handleSelectOption(e, 0)}
                />
                {option}
              </label>
              {selectedOptions[0].includes(option) && (
                <select
                  className="select-box"
                  value={selectedOptions[2][option] || ''}
                  onChange={(e) => handleSelectOption(option, 2)}
                >
                  <option value="" disabled>Select Equipment</option>
                  {options[2].map((equipmentOption) => (
                    <option key={equipmentOption} value={equipmentOption}>{equipmentOption}</option>
                  ))}
                </select>
              )}
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
