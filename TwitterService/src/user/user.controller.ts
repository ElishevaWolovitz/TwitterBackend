import { Request, Response } from 'express';
import { UserModel } from "../models/user.model";
import { 
    manageCreateUser, 
    manageReadAllUsers
} from "./user.manager";
import { UserType } from "../types/user.types";
import { errorHandler } from '../handler/error.handler';
import { successHandler } from '../handler/success.handler';

//Q9: Do all functions in manager and repository also have to be async and await? or just here in controller?  
// Create
export const controlCreateUser = async (req: Request, res: Response) => {
    const user = new UserModel(req.body as UserType);
    const createUserResult = await manageCreateUser(user).catch(errorHandler(res, 400));
    if(createUserResult)
        successHandler(res, 'Created new user (in controller)', createUserResult, 200);
};

// Read All
export const controlReadAllUsers = async (req: Request, res: Response) => {
    const users = await manageReadAllUsers().catch(errorHandler(res, 400));
    if(users)
        successHandler(res, 'Read all users (in controller)', users, 200);
};