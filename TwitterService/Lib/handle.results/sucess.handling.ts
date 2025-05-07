import { Response } from "express";

const handleSuccess = (res: Response, message: string, data: any) => 
    res.status(200).json({ message: `${message}: ${JSON.stringify(data)}` });