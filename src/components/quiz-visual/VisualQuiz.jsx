import React, { useState, useEffect } from 'react';
import '../quiz-visual/visual-quiz.css';
import img1 from './assets/img1.jpg';
import optionA from './assets/optionA.jpg';
import optionB from './assets/optionB.jpg';
import optionC from './assets/optionC.jpg';
import optionD from './assets/optionD.jpg';

export const VisualQuiz = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    if (selectedOption === 'D') {
      setVerified(true);
    } else {
      setVerified(false);
    }
  }, [selectedOption]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="VisualQuiz"> {/* Cambié visualQuiz a VisualQuiz */}
      <h1 className='h2'>VisualQuiz</h1> {/* Asegúrate de que la clase sea VisualQuiz */}
      <div className="">
        <img src={img1} alt="Question"/>
      </div>
      <div className="">
        <h2 className='h2'>Options</h2>
        <br/>
        <div className="options-row">
          <div className={`option ${selectedOption === 'A' ? 'selected' : ''}`} onClick={() => handleOptionClick('A')}>
            <img src={optionA} alt="Option A" />
          </div>
          <div className={`option ${selectedOption === 'B' ? 'selected' : ''}`} onClick={() => handleOptionClick('B')}>
            <img src={optionB} alt="Option B" />
          </div>
          <div className={`option ${selectedOption === 'C' ? 'selected' : ''}`} onClick={() => handleOptionClick('C')}>
            <img src={optionC} alt="Option C" />
          </div>
          <div className={`option ${selectedOption === 'D' ? 'selected' : ''}`} onClick={() => handleOptionClick('D')}>
            <img src={optionD} alt="Option D" />
          </div>
        </div>
      </div>
      {verified && selectedOption !== null ? <p className='p'>Respuesta correcta ✔️</p> : null}
      {!verified && selectedOption !== null ? <p className='p'>Respuesta incorrecta ❌. Inténtalo de nuevo.</p> : null}
    </div>
  );
};
