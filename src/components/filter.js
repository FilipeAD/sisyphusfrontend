import React, { useContext, useState } from 'react';
import '../styles/filter.css';
import AuthContext from '../context/AuthContext';

const WorkoutFilters = () => {

  let {exercises, setExercises} = useContext(AuthContext)


  const handleSortChange = (e) => {
    const exerciseIds = exercises.map(exercise => exercise.exercise_id);
  
    const sortedExercises = exercises.slice().sort((a, b) => {
      if (e.target.value === 'Ascending') {
        return a.exercise_id - b.exercise_id;
      } else if (e.target.value === 'Descending') {
        return b.exercise_id - a.exercise_id;
      }
      return 0; 
    });
  
    setExercises(sortedExercises);
  };

  const handleFilterChange = (e) => {
    const sortOrder = e.target.value;

  };

  const typeOptions = ['Strength', 'Cardio', 'Flexibility', 'Balance'];
  const muscleOptions = [
    'Abdominals', 'Abductors', 'Adductors', 'Biceps', 'Calves', 'Chest', 'Forearms',
    'Glutes', 'Hamstrings', 'Lats', 'Lower Back', 'Middle Back', 'Neck', 'Quadriceps',
    'Traps', 'Triceps'
  ];
  const difficultyOptions = ['Beginner', 'Intermediate', 'Expert'];

  const [filters, setFilters] = useState({
    type: '',
    muscle: '',
    name: '',
    difficulty: '',
  });

  return (
    <div className='filter-container'>
      <div className='filter-select'>
       {/*
      <label>
          Type:
          <select name="type" value={filters.type} onChange={handleFilterChange}>
            <option value="" disabled>Select Type</option>
            {typeOptions.map((option) => (
              <option key={option} value={option.toLowerCase()}>
                {option}
              </option>
            ))}
          </select>
        </label>
        -->

        <label>
          Muscle:
          <select name="muscle" value={filters.muscle} onChange={handleFilterChange}>
            <option value="" disabled>Select Muscle</option>
            {muscleOptions.map((option) => (
              <option key={option} value={option.toLowerCase()}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label>
          Difficulty:
          <select name="difficulty" value={filters.difficulty} onChange={handleFilterChange}>
            <option value="" disabled>Select Difficulty</option>
            {difficultyOptions.map((option) => (
              <option key={option} value={option.toLowerCase()}>
                {option}
              </option>
            ))}
          </select>
        </label>
        */}

        <label>
          Sort Order:
          <select onChange={handleSortChange}>
            <option value="" disabled>Select Sort Order</option>
            <option value="Ascending">Ascending</option>
            <option value="Descending">Descending</option>
          </select>
        </label>
      </div>

    </div>
  );
};

export default WorkoutFilters;
