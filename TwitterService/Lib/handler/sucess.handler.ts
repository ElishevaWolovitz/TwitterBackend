import { Response } from "express";

export const sucessHandler = (res: Response, message: string, data: any, statCode: number) => 
    res.status(statCode).json({ message: `${message}: ${JSON.stringify(data)}` });