
// Diet.js
import React, { useState } from 'react';
import '../styles/diet.css'; // Import the CSS file
import Question from '../components/question'; // Adjust the import path

const Diet = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [inputValue, setInputValue] = useState('');
  const questions = [
    {
      question: '🚻 What is your gender?',
      options: ['👨 Male', '👩 Female'],
    },
    {
      question: '📏 What is your height? (cm)',
      options: 'input',
    },
    {
      question: '🎂 What is your age?',
      options: 'input',
    },
    {
      question: '🏋️‍♂️ What is your activity level?',
      options: [
        '🛋️ Sedentary (little or no exercise)',
        '🚶 Lightly active (light exercise/sports 1-3 days/week)',
        '🏋️ Moderately active (moderate exercise/sports 3-5 days/week)',
        '🏃 Very active (hard exercise/sports 6-7 days a week)',
      ],
    },
    {
      question: '⚖️ What is your weight range? (kg)',
      options: 'input',
    },
  ];


  const handleSelectOption = (option) => {
    // Check if it's an input question
    if (questions[currentQuestion].options === 'input') {
      // Check if the input is a valid number and not empty
      const numericInputValue = parseFloat(inputValue);
      if (isNaN(numericInputValue) || inputValue.trim() === '') {
        alert('Please enter a valid number before submitting.');
        return;
      }

      // Update selectedOptions for input question
      setSelectedOptions({ ...selectedOptions, [currentQuestion]: numericInputValue });
      setInputValue('');
    } else {
      // Update selectedOptions for non-input question
      setSelectedOptions({ ...selectedOptions, [currentQuestion]: option });
    }

    // Move to the next question
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className='diet-container'>
      {currentQuestion < questions.length ? (
        <Question
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          inputValue={inputValue}
          onInputChange={(value) => {
            // Allow only numeric input
            const numericValue = value.replace(/[^0-9]/g, '');
            setInputValue(numericValue);
          }}
          onSelectOption={handleSelectOption}
        />
      ) : (
        <div className='answer-container'>
          <h2>Thank you for answering the questions!</h2>
          <ul>
            {Object.entries(selectedOptions).map(([question, answer]) => (
              <li key={question}>
                <strong>{questions[question].question}</strong>: {answer}
              </li>
            ))}
          </ul>
          <button>Calculate your Calories</button>
        </div>
      )}
    </div>
  );
};

export default Diet;

