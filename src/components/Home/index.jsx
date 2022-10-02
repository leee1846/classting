import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getQuiz } from 'apis/quiz';
import quizStore from 'globalState/quizStore';
import LoadingSpinner from 'components/Global/LoadingSpinner';

function Home() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const initQuiz = quizStore((store) => store.initQuiz);
  const setTime = quizStore((store) => store.setTime);

  const navigateToQuiz = async () => {
    if (window.confirm('퀴즈를 시작하시겠습니까?')) {
      setLoading(true);
      getQuiz({ amount: 5, type: 'multiple' }).then((response) => {
        initQuiz(
          response.map((quiz, index) => {
            return { ...quiz, seq: index + 1 };
          }),
        );
        setLoading(false);
        setTime({ key: 'startTime', value: new Date() });
        navigate('/quiz');
      });
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <button type="button" onClick={navigateToQuiz}>
      퀴즈 풀기
    </button>
  );
}

export default Home;
