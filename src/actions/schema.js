import { Schema, arrayOf } from 'normalizr';

export const hint = new Schema('hints');

export const quiz = new Schema('quizzes', {
  hints: [ hint ]
});

export const arrayOfQuiz = arrayOf(quiz);
