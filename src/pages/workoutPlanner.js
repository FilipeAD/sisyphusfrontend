// Updated React Code
import React from 'react';
import '../styles/workoutPlanner.css';

const WorkoutPlanner = () => {
<<<<<<< HEAD
=======
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

>>>>>>> origin/main
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

<<<<<<< HEAD
      <button type="submit" className="submit-button">
        Generate
=======
      <button type="submit" onClick={handleSubmit} className="submit-button">
        
>>>>>>> origin/main
      </button>
    </div>
  );
};

export default WorkoutPlanner;

