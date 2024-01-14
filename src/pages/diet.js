import React, { useState } from 'react';
import '../styles/diet.css'; // Import the CSS file

const Diet = () => {

  return (
    <div className="diet-app">
      
      <div className="diet-container">

        <h1>Calorie Calculator</h1>

        <form className="diet-form">

          <label>
            <input type="number" className="diet-input" placeholder='HEIGHT (cm)'/>
          </label>

          <label>
            <input type="number" className="diet-input" placeholder='WEIGHT (kg)'/>
          </label>

          <label>
            <input type="number" className="diet-input" placeholder='AGE'/>
          </label>

          <label>
            Gender:
            <select className="diet-input">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>

          <label>
            Activity Level:
            <select className="diet-input">
              <option value="sedentary">Sedentary</option>
              <option value="lightlyActive">Lightly Active</option>
              <option value="moderatelyActive">Moderately Active</option>
              <option value="active">Active</option>
              <option value="veryActive">Very Active</option>
            </select>
          </label>

          <button type="button"  className="diet-button">
            Calculate Calories
          </button>

        </form>

      </div>

    </div>
  );
  
};

export default Diet;
