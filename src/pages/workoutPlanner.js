import React, { useState } from 'react';
import '../styles/workoutPlanner.css';
import Question from '../components/question'; // Adjust the import path

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

  const questions = [
    {
      question: '🏋️‍♂️ Select Muscle Group:',
      options: muscleGroupOptions,
    },
    {
      question: '🏋️‍♂️ Select the Workout Type:',
      options: typeOptions,
    },
    {
      question: '💪 Select Difficulty:',
      options: difficultyOptions,
    },
    {
      question: '🏋️‍♀️ Select Equipment:',
      options: equipmentOptions,
    },
  ];

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
      {currentQuestion < questions.length ? (
        <Question
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          onSelectOption={handleSelectOption}
        />
      ) : (
        <div>
          <h2>Workout Planner</h2>
          <ul>
            {Object.entries(selectedOptions).map(([question, answer]) => (
              <li key={question}>
                <strong>{questions[question].question}</strong>: {answer}
              </li>
            ))}
          </ul>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default WorkoutPlanner;
