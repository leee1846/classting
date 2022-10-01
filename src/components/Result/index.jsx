import React, { useEffect } from 'react';
import quizStore from 'globalState/quizStore';
import { useNavigate } from 'react-router-dom';
import { msToKorTime } from 'util/timeUtil';

function Result() {
  const navigate = useNavigate();

  const quizzes = quizStore((store) => store.quizState);
  const times = quizStore((store) => store.timeState);

  useEffect(() => {
    if (quizzes.length < 1) {
      navigate('/');
    }
  }, [quizzes]);

  if (quizzes.length < 1 || !times.startTime || !times.endTime) {
    return null;
  }

  const resultCount = () => {
    const correct = quizzes.filter(
      (quiz) => quiz.correct_answer === quiz.selectedAnswer,
    ).length;

    return {
      correct,
      inCorrect: quizzes.length - correct,
    };
  };

  return (
    <main>
      <div>
        <p>소요시간 : {msToKorTime(times.endTime - times.startTime)}</p>
        <p>정답 갯수 : {resultCount().correct}개</p>
        <p>오답 갯수 : {resultCount().inCorrect}개</p>
      </div>
    </main>
  );
}

export default Result;
