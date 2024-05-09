import React, { useState, useEffect } from "react";
import data from "./data/data.json";

import "./quizquestion.css";
import Calculator from "../calculator/Calculator";

export const QuizQuestion = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(data[currentIndex]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isLocked, setIsLocked] = useState(false);
  const [allCorrect, setAllCorrect] = useState(false);
  const [showScore, setShowScore] = useState(false); // Estado para mostrar el puntaje

  const checkAnswer = (e, answerIndex) => {
    if (!isLocked) {
      setSelectedAnswer(answerIndex);
      setIsLocked(true);

      if (answerIndex === currentQuestion.correctAnswer) {
        e.target.classList.add("correct");
      } else {
        e.target.classList.add("wrong");

        const correctOption = document.querySelector(
          `.option:nth-child(${currentQuestion.correctAnswer + 1})`
        );
        correctOption.classList.add("correct"); // Resaltar la opción correcta
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < data.length) {
      const options = document.querySelectorAll(".option");
      options.forEach((option) => {
        option.classList.remove("correct");
        option.classList.remove("wrong");
        setIsLocked(false); // Restablecer bloqueo para la siguiente pregunta
      });

      if (selectedAnswer === currentQuestion.correctAnswer) {
        // Solo proceder si la respuesta es correcta
        if (currentIndex === data.length - 1) {
          // Establecer allCorrect en true si es la última pregunta
          setAllCorrect(true);
        } else {
          setCurrentIndex((prevIndex) => prevIndex + 1);
          setCurrentQuestion(data[currentIndex + 1]);
          setSelectedAnswer(null); // Restablecer respuesta seleccionada
        }
      } else {
        console.log("Respuesta incorrecta. Intenta de nuevo.");
      }
    } else {
      setShowScore(true); // Mostrar puntaje cuando no hay más preguntas disponibles
    }
  };

  useEffect(() => {
    if (allCorrect) {
      setCurrentIndex(0);
      setCurrentQuestion(data[0]);
      setSelectedAnswer(null);
    }
  }, [allCorrect]);

  const resetQuiz = () => {
    setAllCorrect(false);
    setShowScore(false); // Ocultar puntaje al reiniciar el quiz
  };

  return (
    <>
      <div className="container">
        <h1>Quiz App</h1>
        <hr />
        {allCorrect ? (
          <h2>
            ¡Respondiste correctamente las 5 preguntas! (Completaste todas las 5 de 5 preguntas)
          </h2>
        ) : (
          <>
            <h2>{currentIndex + 1}. {currentQuestion.question}</h2>
            <ul>
              <li className="option" onClick={(e) => checkAnswer(e, 0)}>{currentQuestion.option1}</li>
              <li className="option" onClick={(e) => checkAnswer(e, 1)}>{currentQuestion.option2}</li>
              <li className="option" onClick={(e) => checkAnswer(e, 2)}>{currentQuestion.option3}</li>
              <li className="option" onClick={(e) => checkAnswer(e, 3)}>{currentQuestion.option4}</li>
            </ul>
            <button className="index" onClick={handleNextQuestion}>
              {currentIndex + 1 === data.length ? "Mostrar Puntaje" : "Siguiente"}
            </button>
            <div className="question-count">
              {currentIndex + 1} de {data.length} preguntas
            </div>
          </>
        )}
        {showScore && ( // Mostrar puntaje si showScore es true
          <h2>Puntaje: {currentIndex + 1} de {data.length}</h2>
        )}
        {allCorrect && (
          <button onClick={resetQuiz}>Reiniciar Quiz</button>
        )}
      </div>
      <section>
        <Calculator/>
      </section>
    </>
  );
};
