const quizById = (state = {}, action) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.quizzes,
    };
  }
  switch (action.type) {
    case 'TOGGLE_HINTS':
      const quiz = state[action.quizId];
      return {
        ...state,
        [quiz.id]: {...quiz, showHints: !quiz.showHints}
      }
    default:
      return state;
  }
};

export default quizById;

export const getQuiz = (state, id) => state[id];
