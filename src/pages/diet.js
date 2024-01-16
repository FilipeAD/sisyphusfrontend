
// Diet.js
import React, { useState } from 'react';
import '../styles/diet.css'; // Import the CSS file
import Question from '../components/question'; // Adjust the import path

const Diet = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [inputValue, setInputValue] = useState('');
  let [calories, setCalorie] = useState();

  const questions = [
    {
      question: 'GENDER',
      options: [' Male', ' Female'],
    },
    {
      question: 'HEIGTH',
      options: 'input',
    },
    {
      question: 'AGE',
      options: 'input',
    },
    {
      question: 'ACTIVITY LEVEL',
      options: [
        ' Sedentary',
        ' Lightly active',
        ' Moderately active',
        ' Very active',
      ],
    },
    {
      question: 'WEIGTH',
      options: 'input',
    },
  ];
  
  let getCalories = async (weigth, heigth, age, sex, activity) => {

      let response = await fetch(`http://127.0.0.1:8000/api/calories/${weigth}&${heigth}&${sex}&${activity}&${age}`,{
          method:'GET',
          headers:{
              'Content-Type': 'application/json',
          }
      })
  

      let data = await response.json()
      console.log('working')
      if(response.status == 200){
          setCalorie(data);
      }else{
          console.error(`Failed to get calories information. Status: ${response.status}`);
      }
  }

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
          <button onClick={() => getCalories(selectedOptions.questions[0].question)}>Calculate your Calories</button>
        </div>
      )}
    </div>
  );
};

export default Diet;

