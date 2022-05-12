import { Answer, AnswerOption, Question, QuestionType, Quiz, QuizInfo } from '@di-strix/quizee-types';

import * as Joi from 'joi';

const questionTypes: QuestionType[] = ['ONE_TRUE', 'SEVERAL_TRUE', 'WRITE_ANSWER'];

export const questionIdSchema = Joi.string().uuid();
export const answerOptionIdSchema = Joi.string().uuid();

export const quizeeInfoSchema = Joi.object<QuizInfo>({
  caption: Joi.string().required(),
  img: Joi.string().uri(),
  id: Joi.string().uuid(),
  questionsCount: Joi.number().greater(0).required(),
});

export const answerConfigSchema = Joi.object<Answer['config']>({
  equalCase: Joi.bool().required(),
});

export const answerOptionSchema = Joi.object<AnswerOption>({
  id: answerOptionIdSchema.required(),
  value: Joi.string().required(),
});

export const questionSchema = Joi.object<Question>({
  caption: Joi.string().required(),
  id: Joi.string().uuid().required(),
  type: Joi.string()
    .allow(...questionTypes)
    .required(),
  answerOptions: Joi.array().items().required(),
});

export const answerSchema = Joi.object<Answer>({
  answer: Joi.array().items(answerOptionIdSchema).required(),
  answerTo: questionIdSchema.required(),
  config: answerConfigSchema.required(),
});

export const quizeeSchema = Joi.object<Quiz>({
  questions: Joi.array().items(questionSchema).required(),
  answers: Joi.array().items(answerSchema).required(),
  info: quizeeInfoSchema.required(),
});
