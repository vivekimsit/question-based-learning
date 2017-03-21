import { Schema, arrayOf } from 'normalizr';

export const hint = new Schema.Entity('hints');

export const quiz = new Schema.Entity('quizzes', {
  hints: [ hint ]
});

export const arrayOfQuiz = arrayOf(quiz);
