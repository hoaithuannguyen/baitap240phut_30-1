import express, { Request, Response } from "express";
import { addCateSQL, getAllCateSQL, getCateByIdSQL } from "../services/cate.services";

export const getCateById = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const result = await getCateByIdSQL(Number(id));
        res.status(200).json(result);
    } catch (error) {
        console.log("error", error);
    }
};

export const getAllCate = async (req: Request, res: Response) => {
    try {
        const result = await getAllCateSQL();
        console.log("result",result);
        
        res.status(200).json(result);
    } catch (error) {
        console.log("error", error);
    }
};

export const addCate = async (req: Request, res: Response)=>{
    try {        
        const {nameCategory} = req.body
        const result = await addCateSQL(String(nameCategory))
        res.status(200).json({
            result,
            message:"them thanh cong"
        })
    } catch (error) {
        console.log(error)
    }
}