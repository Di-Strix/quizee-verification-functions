import { Schema, ValidationResult } from 'joi';

import {
  answerConfigSchema,
  answerOptionSchema,
  answerSchema,
  questionSchema,
  quizeeInfoSchema,
  quizeeSchema,
} from './schemas';

export * as QuizeeSchemas from './schemas';

const generateVerifier =
  <T>(schema: Schema<T>) =>
  (testSubject: T): Promise<ValidationResult<T>> =>
    schema.validateAsync(testSubject);

export const verifyQuizeeInfo = generateVerifier(quizeeInfoSchema);
export const verifyAnswerConfig = generateVerifier(answerConfigSchema);
export const verifyAnswerOption = generateVerifier(answerOptionSchema);
export const verifyQuestion = generateVerifier(questionSchema);
export const verifyAnswer = generateVerifier(answerSchema);
export const verifyQuizee = generateVerifier(quizeeSchema);
