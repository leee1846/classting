import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getQuiz } from 'apis/quiz';
import quizStore from 'globalState/quizStore';

function Home() {
  const navigate = useNavigate();

  const initQuiz = quizStore((store) => store.initQuiz);
  const setTime = quizStore((store) => store.setTime);

  const navigateToQuiz = async () => {
    if (window.confirm('퀴즈를 시작하시겠습니까?')) {
      getQuiz({ amount: 5, type: 'multiple' }).then((response) => {
        initQuiz(
          response.map((quiz, index) => {
            return { ...quiz, seq: index + 1 };
          }),
        );
        setTime({ key: 'startTime', value: new Date() });
        navigate('/quiz');
      });
    }
  };

  return (
    <button type="button" onClick={navigateToQuiz}>
      퀴즈 풀기
    </button>
  );
}

export default Home;
