import { AsyncValidationOptions, Schema, ValidationErrorItem } from 'joi';

import {
  answerConfigSchema,
  answerOptionSchema,
  answerSchema,
  questionSchema,
  quizeeInfoSchema,
  quizeeSchema,
} from './schemas';

export * as QuizeeSchemas from './schemas';

export type VerificationError = ValidationErrorItem;
export type VerificationErrors = VerificationError[];

const generateVerifier =
  <T>(schema: Schema<T>) =>
  async (testSubject: T, options?: AsyncValidationOptions): Promise<VerificationErrors> => {
    try {
      await schema.validateAsync(testSubject, { abortEarly: false, ...options });
      return [];
    } catch (err: any) {
      return err.details;
    }
  };

export const verifyQuizeeInfo = generateVerifier(quizeeInfoSchema);
export const verifyAnswerConfig = generateVerifier(answerConfigSchema);
export const verifyAnswerOption = generateVerifier(answerOptionSchema);
export const verifyQuestion = generateVerifier(questionSchema);
export const verifyAnswer = generateVerifier(answerSchema);
export const verifyQuizee = generateVerifier(quizeeSchema);
