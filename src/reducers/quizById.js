const quizById = (state = {}, action) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.quizzes,
    };
  }
  return state;
};

export default quizById;

export const getQuiz = (state, id) => state[id];
