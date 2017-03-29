import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {
  getVisibleQuizzes,
  getErrorMessage,
  getIsFetching } from '../reducers';
import QuizList from './QuizList';


class VisibleQuizList extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    const { filter, fetchQuizzes } = this.props;
    fetchQuizzes(filter);
  }

  render() {
    const {
      isFetching,
      errorMessage, toggleQuiz, showHint, quizzes } = this.props;

    if (isFetching && !quizzes.length) {
      return <p>Loading...</p>;
    }

    return (
      <QuizList
        quizzes={quizzes}
        onQuizClick={toggleQuiz}
        onHintClick={showHint}
      />
    );
  }
}

VisibleQuizList.propTypes = {
  filter: PropTypes.oneOf(['all', 'active', 'completed']).isRequired,
  errorMessage: PropTypes.string,
  quizzes: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchQuizzes: PropTypes.func.isRequired,
  toggleQuiz: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  const filter = 'all';
  return {
    isFetching: getIsFetching(state, filter),
    errorMessage: getErrorMessage(state, filter),
    quizzes: getVisibleQuizzes(state, filter),
    filter,
  };
};

VisibleQuizList = connect(
  mapStateToProps,
  actions
)(VisibleQuizList);

export default VisibleQuizList;
