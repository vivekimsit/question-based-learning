import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import QuizList from './QuizList';

const getVisibleQuizzes = (quizzes, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return quizzes;
    case 'SHOW_COMPLETED':
      return quizzes.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return quizzes.filter(t => !t.completed);
    default:
      throw new Error(`Unknown filter: ${filter}.`);
  }
};

const mapStateToProps = (state) => {
  return {
    quizzes: getVisibleTodos(state.quizzes, state.visibilityFilter),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onQuizClick: (id) => {
      dispatch(toggleQuiz(id));
    },
  };
};

const VisibleQuizList = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizList);

export default VisibleQuizList;
