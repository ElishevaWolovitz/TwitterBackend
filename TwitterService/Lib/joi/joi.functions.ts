import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';


const runValidation = (
  schema: Joi.ObjectSchema,
  data: any,
  res: Response,
  next: NextFunction
): void => {
  const { error } = schema.validate(data, { abortEarly: false });

  if (error) {
    const errorMessages = error.details.map(getErrorMessage);
    res.status(400).json({ error: errorMessages });
  } else {
    next();
  }
};

const getErrorMessage = (detail: Joi.ValidationErrorItem): string => detail.message;

export const validateBody = (schema: Joi.ObjectSchema) =>
//Q: I dont really understand why here it needs to be a function in a function why can it not be 
//   (schema: Jpo.ObjectSchema, req: Request, res: Response, next: NextFunction) => void { runValidation(...)}
  function validateRequestBody(req: Request, res: Response, next: NextFunction): void {
    runValidation(schema, req.body, res, next);
  };

export const validateParams = (schema: Joi.ObjectSchema) =>
  function validateRequestParams(req: Request, res: Response, next: NextFunction): void {
    runValidation(schema, req.params, res, next);
  };
