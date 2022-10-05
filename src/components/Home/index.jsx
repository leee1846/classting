import React from 'react';
import { useNavigate } from 'react-router-dom';
import quizStore from 'globalState/quizStore';
import LoadingSpinner from 'components/Global/LoadingSpinner';
import useGetQuiz from 'querys/quiz/useGetQuiz';
import { CommonMessages } from 'constants/messages';

function Home() {
  const navigate = useNavigate();

  const initQuiz = quizStore((store) => store.initQuiz);
  const setTime = quizStore((store) => store.setTime);

  const { isLoading, refetch: fetchQuiz } = useGetQuiz({
    params: { amount: 5, type: 'multiple' },
    onSuccess: (response) => {
      initQuiz(
        response.map((quiz, index) => {
          return { ...quiz, seq: index + 1 };
        }),
      );
      setTime({ key: 'startTime', value: new Date() });
      navigate('/quiz');
    },
    onError: () => {
      window.alert(CommonMessages.ErrorAlert);
    },
    enabled: false,
  });

  const navigateToQuiz = async () => {
    if (window.confirm(CommonMessages.StartQuiz)) {
      fetchQuiz().then();
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <>
      <h1>클래스팅</h1>
      <button type="button" onClick={navigateToQuiz}>
        퀴즈 풀기
      </button>
    </>
  );
}

export default Home;
