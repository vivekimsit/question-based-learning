const hintById = (state = {}, action) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.hints,
    };
  }
  return state;
};

export default hintById;

export const getHint = (state, id) => state[id];
