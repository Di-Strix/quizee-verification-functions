import { AsyncValidationOptions, Schema, ValidationResult } from 'joi';

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
  (testSubject: T, options?: AsyncValidationOptions): Promise<ValidationResult<T>> =>
    schema.validateAsync(testSubject, { abortEarly: false, ...options });

export const verifyQuizeeInfo = generateVerifier(quizeeInfoSchema);
export const verifyAnswerConfig = generateVerifier(answerConfigSchema);
export const verifyAnswerOption = generateVerifier(answerOptionSchema);
export const verifyQuestion = generateVerifier(questionSchema);
export const verifyAnswer = generateVerifier(answerSchema);
export const verifyQuizee = generateVerifier(quizeeSchema);
