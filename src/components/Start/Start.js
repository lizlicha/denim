import React from 'react';
import './Start.css';

const Start = ({ onStart }) => {
  return (
    <div className="start">
      <h1>おすすめのジーンズを見つけましょう！</h1>
      <button onClick={onStart}>スタート</button>
    </div>
  );
};

export default Start;
