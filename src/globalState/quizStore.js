import create from 'zustand';

const quizStore = create((set) => ({
  quizState: [],
  timeState: {
    startTime: null,
    endTime: null,
  },
  initQuiz: (questions) => {
    set((state) => ({
      ...state,
      quizState: questions,
    }));
  },
  setResult: ({ result }) => {
    set((state) => ({
      ...state,
      quizState: state.quizState.map((quiz) => {
        if (quiz.seq === result.seq) {
          return result;
        }
        return quiz;
      }),
    }));
  },
  resetQuiz: () => {
    set((state) => ({
      ...state,
      quizState: [],
    }));
  },
  setTime: ({ key, value }) => {
    set((state) => ({
      ...state,
      timeState: {
        ...state.timeState,
        [key]: value,
      },
    }));
  },
}));

export default quizStore;
