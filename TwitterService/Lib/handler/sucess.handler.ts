import { Response } from "express";

const handleSuccess = (res: Response, message: string, data: any, statCode: number) => 
    res.status(statCode).json({ message: `${message}: ${JSON.stringify(data)}` });