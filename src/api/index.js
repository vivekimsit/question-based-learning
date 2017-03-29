import { v4 } from 'node-uuid';

// This is a fake in-memory implementation of something
// that would be implemented by calling a REST server.

const IMG_SRC = 'https://d3hvwccx09j84u.cloudfront.net/680,480/image/w14-r2-7460327b.jpg';

const fakeDatabase = {
  quizzes: [{
    id: v4(),
    img: IMG_SRC,
    title: 'Get started',
    text: 'hey',
    completed: true,
    showHints: true,
    hints: [{
      id: v4(),
      text: 'Hint 1'
    }, {
      id: v4(),
      text: 'Hint 2'
    }]
  }, {
    id: v4(),
    title: 'What are you waiting for?',
    text: 'ho',
    completed: true,
    showHints: false,
    hints: [{
      id: v4(),
      text: 'Hint 3'
    }, {
      id: v4(),
      text: 'Hint 4'
    }]
  }, {
    id: v4(),
    img: IMG_SRC,
    title: 'Remember! create more than you consume',
    text: 'let’s go',
    completed: false,
    showHints: false,
    hints: [{
      id: v4(),
      text: 'Hint 5'
    }, {
      id: v4(),
      text: 'Hint 6'
    }]
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

export const addQuiz = (text) =>
  delay(500).then(() => {
    const quiz = {
      id: v4(),
      text,
      completed: false,
    };
    fakeDatabase.quizzes.push(quiz);
    return quiz;
  });

export const toggleQuiz = (id) =>
  delay(500).then(() => {
    const quiz = fakeDatabase.quizzes.find(q => q.id === id);
    quiz.completed = !quiz.completed;
    return quiz;
  });

