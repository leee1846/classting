import React, { useEffect } from 'react';
import quizStore from 'globalState/quizStore';
import { useNavigate } from 'react-router-dom';
import { msToKorTime } from 'util/timeUtil';
import ReviewNote from 'components/Result/ReviewNote';
import Score from 'components/Result/Score';
import Chart from 'components/Result/Chart';

function Result() {
  const navigate = useNavigate();

  const quizzes = quizStore((store) => store.quizState);
  const times = quizStore((store) => store.timeState);
  const resetQuiz = quizStore((store) => store.resetQuiz);

  const corrects = quizzes.filter(
    (quiz) => quiz.correct_answer === quiz.selectedAnswer,
  );
  const inCorrects = quizzes.filter(
    (quiz) => quiz.correct_answer !== quiz.selectedAnswer,
  );

  useEffect(() => {
    if (quizzes.length < 1) {
      navigate('/');
    }

    return () => {
      resetQuiz();
    };
  }, [quizzes]);

  if (quizzes.length < 1 || !times.startTime || !times.endTime) {
    return null;
  }

  const tryAgain = () => {
    resetQuiz();
    navigate('/');
  };

  return (
    <main>
      <button type="button" onClick={tryAgain}>
        다시 풀기
      </button>
      <Score
        takenTime={msToKorTime(times.endTime - times.startTime)}
        corrects={corrects}
        inCorrects={inCorrects}
      />
      <Chart correct={corrects.length} incorrect={inCorrects.length} />
      <ReviewNote inCorrects={inCorrects} />
    </main>
  );
}

export default Result;
