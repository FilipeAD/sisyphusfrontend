
// Diet.js

import React, { useState } from 'react';
import Navbar from '../components/navbar'; // Adjust the path accordingly
import '../styles/diet.css'; // Import the CSS file

const Diet = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [activityLevel, setActivityLevel] = useState('lightlyActive');
  const [caloriesResult, setCaloriesResult] = useState(null);

  const handleInputChange = (e, setterFunction) => {
    setterFunction(e.target.value);
  };

  const handleActivityLevelChange = (e) => {
    setActivityLevel(e.target.value);
  };

  const calculateCalories = () => {
    // Check if all input fields are filled
    if (height && weight && gender && age) {
      // Add your logic to calculate calories based on the input values
      // Here's a basic example, you'll need to customize it based on your formula
      const basalMetabolicRate = gender === 'male' ? 88.362 : 447.593;
      const maintenanceCalories =
        basalMetabolicRate +
        13.397 * weight +
        4.799 * height -
        5.677 * age;

      // Adjust the calorie calculation based on the selected activity level
      let activityMultiplier;
      switch (activityLevel) {
        case 'lightlyActive':
          activityMultiplier = 1.375;
          break;
        case 'moderatelyActive':
          activityMultiplier = 1.55;
          break;
        case 'active':
          activityMultiplier = 1.725;
          break;
        case 'veryActive':
          activityMultiplier = 1.9;
          break;
        default:
          activityMultiplier = 1.375; // Default to lightly active
      }

      const maintenanceCaloriesWithActivity = maintenanceCalories * activityMultiplier;

      // You can calculate surplus and cutting calories based on your formula

      // Set the result in the state to display it
      setCaloriesResult({
        maintenance: maintenanceCaloriesWithActivity,
        surplus: maintenanceCaloriesWithActivity + 500, // Example for bulking
        cutting: maintenanceCaloriesWithActivity - 300, // Example for cutting
      });
    } else {
      // If any required input field is missing, show an error or alert
      alert('Please fill in all required fields');
    }
  };


  return (
    <div className="diet-app">
      <div className="diet-container">
        <h1>Calorie Calculator</h1>
        <form className="diet-form">
          {/* Input fields */}
          <label>
            Height (cm):
            <input
              type="number"
              value={height}
              onChange={(e) => handleInputChange(e, setHeight)}
              className="diet-input"
            />
          </label>

          <label>
            Weight (kg):
            <input
              type="number"
              value={weight}
              onChange={(e) => handleInputChange(e, setWeight)}
              className="diet-input"
            />
          </label>

          <label>
            Age:
            <input
              type="number"
              value={age}
              onChange={(e) => handleInputChange(e, setAge)}
              className="diet-input"
            />
          </label>

          <label>
            Gender:
            <select
              value={gender}
              onChange={(e) => handleInputChange(e, setGender)}
              className="diet-input"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>

          <label>
            Activity Level:
            <select value={activityLevel} onChange={handleActivityLevelChange} className="diet-input">
              <option value="lightlyActive">Lightly Active</option>
              <option value="moderatelyActive">Moderately Active</option>
              <option value="active">Active</option>
              <option value="veryActive">Very Active</option>
            </select>
          </label>

          <button type="button" onClick={calculateCalories} className="diet-button">
            Calculate Calories
          </button>
        </form>

        {/* Display the result if available */}
        {caloriesResult && (
          <div className="diet-result-container">
            <h2>Calories Result</h2>
            <p>Maintenance Calories: {caloriesResult.maintenance.toFixed(2)}</p>
            <p>Surplus Calories (for bulking): {caloriesResult.surplus.toFixed(2)}</p>
            <p>Cutting Calories: {caloriesResult.cutting.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Diet;
