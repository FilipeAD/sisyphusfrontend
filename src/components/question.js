// Question.js
import React from 'react';
import '../styles/question.css';

const Question = ({ question, options, inputValue, onInputChange, onSelectOption }) => {
  const isInputQuestion = options === 'input';

  const handleInputSubmit = () => {
    onSelectOption(inputValue);
  };

  return (
    <div className="question-container">
      <h2 className="question-text">{question}</h2>
      {isInputQuestion ? (
        <div className="input-container">
          <input
            type="text"
            className="input-field"
            value={inputValue}
            onChange={(e) => onInputChange(e.target.value)}
          />
          <button className="submit-button" onClick={handleInputSubmit}>
            Submit
          </button>
        </div>
      ) : (
        <div className="options-container">
          {options.map((option, index) => (
            <button
              key={index}
              className="option-button"
              onClick={() => onSelectOption(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Question;
