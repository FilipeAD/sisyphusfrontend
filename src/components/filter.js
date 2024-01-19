import React, { useState } from 'react';
import '../styles/filter.css';

const WorkoutFilters = ({ onFilterChange, onSortChange }) => {
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

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
    onFilterChange({ ...filters, [name]: value });
  };

  const handleSortChange = (e) => {
    const sortOrder = e.target.value;
    onSortChange(sortOrder);
  };

  return (
    <div className='filter-container'>
      <div className='select-boxes'>
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
