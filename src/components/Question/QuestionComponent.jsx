import React, { useState } from 'react';

const QuestionComponent = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [answerResult, setAnswerResult] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const checkAnswer = () => {
    if (selectedOption === 'option2') {
      setAnswerResult('Correcto');
    } else {
      setAnswerResult('Incorrecto');
    }
  };

  return (
    <div className="container-sm">
      <h1 className="question-text text-center">What is the most appropriate summary of paragraph 7?</h1>

      <div className="options">
        <div className="option text-center form-check">
          <input type="radio" id="option1" name="question" value="option1" checked={selectedOption === 'option1'} onChange={handleOptionChange} />
          <label className='h4' htmlFor="option1">Misconception about items left last on shelves.</label>
        </div>
        <div className="option text-center form-check">
          <input type="radio" id="option2" name="question" value="option2" checked={selectedOption === 'option2'} onChange={handleOptionChange} />
          <label className='h4' htmlFor="option2">Rational choice theory and social comparison.</label>
        </div>

        <div className="option text-center form-check">
          <input type="radio" id="option3" name="question" value="option3" checked={selectedOption === 'option3'} onChange={handleOptionChange} />
          <label className='h4' htmlFor="option3">Different consumer decision-making processes.</label>
        </div>
      </div>

      <div className="text-center"> {/* Div para centrar el botón */}
        <button className="btn btn-primary" onClick={checkAnswer}>Verificar respuesta</button>
      </div>
      
      {answerResult && <p className='text-center'>Respuesta: {answerResult}</p>}
    </div>
  );
};

export default QuestionComponent;
