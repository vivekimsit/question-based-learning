import { v4 } from 'node-uuid';

// This is a fake in-memory implementation of something
// that would be implemented by calling a REST server.

const fakeDatabase = {
  quizzes: [{
    id: v4(),
    title: 'Get started',
    text: 'hey',
    active: false,
    completed: true
  }, {
    id: v4(),
    title: 'What are you waiting for?',
    text: 'ho',
    active: false,
    completed: true
  }, {
    id: v4(),
    title: 'Remember! create more than you consume',
    text: 'let’s go',
    active: false,
    completed: false
  }],
};

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchQuizzes = (filter) =>
  delay(500).then(() => {
    switch (filter) {
      case 'all':
        return fakeDatabase.quizzes;
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  });

export const toggleQuiz = (id) =>
  delay(500).then(() => {
    const quiz = fakeDatabase.quizzes.find(q => q.id === id);
    quiz.completed = !quiz.completed;
    quiz.active = true;
    return quiz;
  });
