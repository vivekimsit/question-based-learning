const byId = (state = {}, action) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.quizzes,
    };
  }
  return state;
};

export default byId;

export const getQuiz = (state, id) => state[id];
