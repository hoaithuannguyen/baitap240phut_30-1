import express from "express"
import { getQuestionAll, getQuestionByAnswer, getQuestionById,addQuestion } from "../controllers/question.controlles"
const questionRoutes = express.Router()

questionRoutes.get("/:id",getQuestionById)
questionRoutes.get("/:id/answer",getQuestionByAnswer)
questionRoutes.get("/",getQuestionAll)
questionRoutes.post("/:id/:level/content",addQuestion)

export default questionRoutes