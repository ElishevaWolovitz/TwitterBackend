import { Response } from "express";

export const successHandler = (res: Response, message: string, data: any, statCode: number) => 
    res.status(statCode).json({ message: message, data: data });