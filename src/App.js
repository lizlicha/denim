import React, { useState } from 'react';
import './App.css';
import Start from './components/Start/Start';
import Question from './components/Question/Question';
import Recommendation from './components/Recommendation/Recommendation';

const App = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleStart = () => {
    setStep(1);
  };

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    setStep(step + 1);
  };

  const handleRestart = () => {
    setStep(0);
    setAnswers([]);
  };

  return (
    <div className="app">
      {step === 0 && <Start onStart={handleStart} />}
      {step > 0 && step < 4 && <Question step={step} onAnswer={handleAnswer} />}
      {step === 4 && <Recommendation answers={answers} onRestart={handleRestart} />}
    </div>
  );
};

export default App;
