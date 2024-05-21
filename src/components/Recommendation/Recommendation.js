import React from 'react';
import './Recommendation.css';

const recommendations = {
  "スキニー_ブルー_5000円以下": "おすすめの商品はAジーンズです。",
  "スキニー_ブルー_5000円以上": "おすすめの商品はBジーンズです。",
  "スキニー_ブラック_5000円以下": "おすすめの商品はCジーンズです。",
  "スキニー_ブラック_5000円以上": "おすすめの商品はDジーンズです。",
  "ストレート_ブルー_5000円以下": "おすすめの商品はEジーンズです。",
  "ストレート_ブルー_5000円以上": "おすすめの商品はFジーンズです。",
  "ストレート_ブラック_5000円以下": "おすすめの商品はGジーンズです。",
  "ストレート_ブラック_5000円以上": "おすすめの商品はHジーンズです。"
};

const Recommendation = ({ answers, onRestart }) => {
  const key = answers.join("_");
  const recommendation = recommendations[key] || "おすすめの商品が見つかりませんでした。";

  return (
    <div className="recommendation">
      <h2>{recommendation}</h2>
      <button onClick={onRestart}>もう一度やる</button>
    </div>
  );
};

export default Recommendation;
