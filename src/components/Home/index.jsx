import React from 'react';
import { useNavigate } from 'react-router-dom';
import quizStore from 'globalState/quizStore';
import LoadingSpinner from 'components/Global/LoadingSpinner';
import useGetQuiz from 'querys/quiz/useGetQuiz';

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
      window.alert('에러가 발생하였습니다.\n고객센터에 문의 바랍니다.');
    },
    enabled: false,
  });

  const navigateToQuiz = async () => {
    if (window.confirm('퀴즈를 시작하시겠습니까?')) {
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
