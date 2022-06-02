import { Answer, AnswerOption, Question, QuestionType, Quiz, QuizInfo } from '@di-strix/quizee-types';

import * as Joi from 'joi';

const questionTypes: QuestionType[] = ['ONE_TRUE', 'SEVERAL_TRUE', 'WRITE_ANSWER'];

export const questionIdSchema = Joi.string().uuid();
export const answerOptionIdSchema = Joi.string().uuid();
export const customAnswerOptionSchema = Joi.string();

export const quizeeInfoSchema = Joi.object<QuizInfo>({
  caption: Joi.string().required(),
  img: Joi.string().uri().allow(''),
  id: Joi.string().uuid().allow(''),
  questionsCount: Joi.number().greater(0).required(),
});

export const answerConfigSchema = Joi.object<Answer['config']>({
  equalCase: Joi.bool().required(),
});

export const answerOptionSchema = Joi.object<AnswerOption>({
  id: answerOptionIdSchema.required(),
  value: Joi.string().trim().required(),
});

export const questionSchema = Joi.object<Question>({
  caption: Joi.string().required(),
  id: Joi.string().uuid().required(),
  type: Joi.string()
    .allow(...questionTypes)
    .required(),
  answerOptions: Joi.array().items(answerOptionSchema).required(),
});

export const answerSchema = Joi.object<Answer>({
  answer: Joi.array().items(answerOptionIdSchema, customAnswerOptionSchema).required(),
  answerTo: questionIdSchema.required(),
  config: answerConfigSchema.required(),
});

export const quizeeSchema = Joi.object<Quiz>({
  questions: Joi.array().items(questionSchema).required(),
  answers: Joi.array().items(answerSchema).required(),
  info: quizeeInfoSchema.required(),
});
