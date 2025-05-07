import { Response } from "express";

const handleError = (res: Response, statusCode: number) =>
  (error: Error) => res.status(statusCode).json({ error: error.message });