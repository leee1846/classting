import React, { useEffect, useState } from 'react';
import quizStore from 'globalState/quizStore';
import { shuffle } from 'util/arrayUtil';
import RadioBox from 'components/Global/RadioBox';
import { useNavigate } from 'react-router-dom';

function Quiz() {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [currentQuiz, setCurrentQuiz] = useState();
  const [answers, setAnswers] = useState();
  const [selectedAnswer, setSelectedAnswer] = useState();

  const quizzes = quizStore((store) => store.quizState);
  const setResult = quizStore((store) => store.setResult);
  const setTime = quizStore((store) => store.setTime);

  const clearState = () => {
    setAnswers(undefined);
    setSelectedAnswer(undefined);
  };

  const checkAnswer = () => {
    if (selectedAnswer === currentQuiz.correct_answer) {
      window.alert('정답입니다.');
      return;
    }
    window.alert('오답입니다.');
  };

  const onNextQuiz = () => {
    setResult({
      result: {
        ...currentQuiz,
        selectedAnswer,
      },
    });
    checkAnswer();

    if (page >= 5) {
      setTime({ key: 'endTime', value: new Date() });
      navigate('/result');
      return;
    }

    setPage((prev) => prev + 1);
    clearState();
  };

  const onSelectAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  // 현재 페이지에맞는 퀴즈 세팅
  useEffect(() => {
    if (!quizzes) {
      return;
    }

    setCurrentQuiz(quizzes.find((quiz) => quiz.seq === page));
  }, [page, quizzes]);

  // answer보기 조합 만들기
  useEffect(() => {
    if (!currentQuiz) {
      return;
    }

    const { incorrect_answers, correct_answer } = currentQuiz;
    setAnswers(shuffle([...incorrect_answers, correct_answer]));
  }, [currentQuiz]);

  useEffect(() => {
    if (quizzes.length < 1) {
      navigate('/');
    }
  }, [quizzes]);

  if (!currentQuiz || !answers) {
    return null;
  }
  return (
    <main>
      <div>
        <p>문제 {page}번</p>
        <p>{currentQuiz.question}</p>
      </div>
      <ul>
        {answers.map((answer, index) => (
          <li key={`answer-${index + 1}`}>
            <RadioBox
              id={answer}
              text={answer}
              checked={answer === selectedAnswer}
              onChange={() => onSelectAnswer(answer)}
            />
          </li>
        ))}
      </ul>
      <button type="button" onClick={onNextQuiz} disabled={!selectedAnswer}>
        다음
      </button>
    </main>
  );
}

export default Quiz;
