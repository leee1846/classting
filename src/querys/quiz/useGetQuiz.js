import { useQuery } from 'react-query';
import { getQuiz } from 'apis/quiz';
import quizKeys from 'querys/quiz/keys';

const useGetQuiz = ({ params, onSuccess, onError, enabled }) => {
  return useQuery(quizKeys.getQuiz(), () => getQuiz(params), {
    onSuccess,
    onError,
    enabled,
  });
};

export default useGetQuiz;
