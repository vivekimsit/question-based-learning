import { normalize, schema } from 'normalizr';

export const hint = new schema.Entity('hints');

export const quiz = new schema.Entity('quizzes', {
  hints: [ hint ]
});

export const arrayOfQuiz = [ quiz ];
