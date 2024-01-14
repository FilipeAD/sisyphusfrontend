import React, { useState } from 'react';
import '../styles/workoutPlanner.css';

const WorkoutPlanner = () => {
  const muscleGroupOptions = [
    'Triceps',
    'Chest',
    'Lower Chest',
    'Upper Chest',
    'Quads',
    'Calfs',
    'Biceps',
    'Lower Back',
    'Upper Back',
  ];

  const difficultyOptions = ['Easy', 'Intermediate', 'Hard'];

  const equipmentOptions = [
    'Kettle Bell',
    'Dumbbells',
    'Z-Bar',
    'Calisthenics',
    'Barbell',
    'Machines',
  ];

  const [muscleGroup, setMuscleGroup] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [equipment, setEquipment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your submission logic here
    console.log('Submitted:', { muscleGroup, difficulty, equipment });
  };

  return (
    <div className="workout-planner-container">
      <form onSubmit={handleSubmit}>
        <h2>Workout Planner</h2>
        <label>
          <select value={muscleGroup} onChange={(e) => setMuscleGroup(e.target.value)}>
            <option value="" disabled>
              Select Muscle Group
            </option>
            {muscleGroupOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label>
          <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
            <option value="" disabled>
              Select Difficulty
            </option>
            {difficultyOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label>
          <select value={equipment} onChange={(e) => setEquipment(e.target.value)}>
            <option value="" disabled>
              Select Equipment
            </option>
            {equipmentOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default WorkoutPlanner;

