import express, { Request, Response } from "express";
import { addQuestionSQL, getAllQuestion, getQuestionByAnswerSQL, getQuestionByIdSQL } from "../services/question.services";

export const getQuestionById = async (req: Request, res: Response)=>{
      try {
        const {id} = req.params
        const result = await getQuestionByIdSQL(Number(id));
        console.log("result123",result);
        
        res.status(200).json(result);
    } catch (error) {
        console.log("error", error);
    }
}

export const getQuestionByAnswer = async (req: Request, res: Response)=>{
      try {
        const {id} = req.params
        const result = await getQuestionByAnswerSQL(Number(id));
        res.status(200).json(result);
    } catch (error) {
        console.log("error", error);
    }
}
export const getQuestionAll = async (req: Request, res: Response) => {
    try {
        const result = await getAllQuestion();
        console.log("result",result);
        
        res.status(200).json(result);
    } catch (error) {
        console.log("error", error);
    }
};
export const addQuestion = async (req: Request, res: Response)=>{
    try {        
        const {content,categoryId,level} = req.body
        const result = await addQuestionSQL(Number(categoryId),String(content),Number(level))
        res.status(200).json({
            result,
            message:"them thanh cong"
        })
    } catch (error) {
        console.log(error)
    }
}