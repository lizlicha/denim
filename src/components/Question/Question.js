import React from 'react';
import './Question.css';

const questions = [
  "どのタイプのジーンズが好きですか？",
  "色は何色が良いですか？",
  "予算はいくらですか？"
];

const options = [
  ["スキニー", "ストレート"],
  ["ブルー", "ブラック"],
  ["5000円以下", "5000円以上"]
];

const Question = ({ step, onAnswer }) => {
  return (
    <div className="question">
      <h2>{questions[step - 1]}</h2>
      <div className="options">
        {options[step - 1].map((option, index) => (
          <button key={index} onClick={() => onAnswer(option)}>{option}</button>
        ))}
      </div>
    </div>
  );
};

export default Question;
