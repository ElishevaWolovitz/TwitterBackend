import { Request, Response } from 'express';
import { UserModel } from "../../Lib/models/user.model";
import { 
    manageCreateUser, 
    manageReadAllUsers
} from "./user.manager";
import { UserType } from "../../Lib/types/user.types";
import {errorHandler } from '../../Lib/handler/error.handler';
import {sucessHandler} from '../../Lib/handler/sucess.handler';

//Q: Do all functions in manager and repository also have to be async and await? or just here in controller? 
//Q: Is the function inside the catch considered a annonymouse function and should be done differently? 
// Create
export const controlCreateUser = async (req: Request, res: Response) => {
    const user = new UserModel(req.body as UserType);
    const createUserResult = await manageCreateUser(user).catch(errorHandler(res, 400));
    if(createUserResult)
        sucessHandler(res, 'Created new user (in controller)', createUserResult, 200);
};

// Read All
export const controlReadAllUsers = async (req: Request, res: Response) => {
    const users = await manageReadAllUsers().catch(errorHandler(res, 400));
    if(users)
        sucessHandler(res, 'Read all users (in controller)', users, 200);
};