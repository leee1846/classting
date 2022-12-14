import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import QuizPage from 'pages/QuizPage';
import ResultPage from 'pages/ResultPage';

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
}

export default MainRouter;
