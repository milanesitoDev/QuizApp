import React, { useState } from 'react';
import './Quiz.css';
import QuestionData from './data/questions.json'; 

export const Quiz = () => {
  // Definir el estado para almacenar las respuestas del usuario y el puntaje calculado
  const [userAnswers, setUserAnswers] = useState(Array(QuestionData.length).fill(''));
  const [score, setScore] = useState(null);

  // Función para manejar el cambio de respuesta del usuario
  const handleAnswerChange = (index, value) => {
    setUserAnswers(prevAnswers => {
      const newAnswers = [...prevAnswers];
      newAnswers[index] = value;
      return newAnswers;
    });
  };

  // Función para renderizar las preguntas del quiz
  const renderQuestions = () => {
    return (
      <>
        <h2>Guía para calcular resultados de dados</h2>
        <p>Por favor, selecciona una respuesta para cada pregunta:</p>
        <div className="row row-cols-1 row-cols-sm-2">
          {QuestionData.map((question, index) => (
            <div key={index} className="question-container">
              <p className="h4">Pregunta {index + 1}</p>
              <h3 className='h5'>{question.question}</h3>
              {/* Mostrar el texto de la pregunta */}
              <select className="answer-select" value={userAnswers[index]} onChange={e => handleAnswerChange(index, e.target.value)}>
                <option value="">Selecciona una respuesta...</option>
                {/* Mapear las opciones de respuesta para cada pregunta */}
                {question.options.map((option, optionIndex) => (
                  <option key={optionIndex} value={String.fromCharCode(65 + optionIndex)}>{option}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </>
    );
  };

  // Función para calcular el puntaje del usuario
  const calculateScore = () => {
    // Definir las respuestas correctas
    const correctAnswers = QuestionData.map(question => question.options.findIndex(option => option.startsWith('A')));

    // Contador para almacenar el puntaje del usuario
    let calculatedScore = 0;

    // Comparar las respuestas del usuario con las respuestas correctas
    for (let i = 0; i < userAnswers.length; i++) {
      if (userAnswers[i] === String.fromCharCode(65 + correctAnswers[i])) {
        // Incrementar el puntaje si la respuesta es correcta
        calculatedScore++;
      }
    }

    // Actualizar el estado del puntaje calculado
    setScore(calculatedScore);
  };

  return (
    <div className="calculate-container">
      {renderQuestions()}
            {/* Mostrar el puntaje si está calculado */}
      {score !== null && <p>Tu puntaje es: {score} / {userAnswers.length}</p>}
      <button className="calculate-btn" onClick={calculateScore}>Calcular Puntaje</button>
    </div>
  );
};
