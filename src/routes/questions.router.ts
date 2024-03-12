
import express from 'express'
import { checkQuestionAnswer, createQuestion, deleteQuestion, getAllQuestion, getQuestionById, updateQuestion } from '~/controllers/questions.controller'
export const questionRouter = express.Router()

questionRouter.get('/questions', getAllQuestion)
questionRouter.post('/questions', createQuestion)
questionRouter.put('/question/:id', updateQuestion)
questionRouter.delete('/question/:id', deleteQuestion)
questionRouter.get('/question/:id', getQuestionById)
questionRouter.post('/quesion/check/:id' , checkQuestionAnswer)