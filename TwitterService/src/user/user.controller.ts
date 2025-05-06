import { Request, Response } from 'express';
import { UserModel } from "../../Lib/models/user.model";
import { 
    manageCreateUser, 
    manageReadAllUsers
} from "./user.manager";
//import { handleError } from '../item.functions';
import { UserType } from "../../Lib/types/user.types";

// Create
//Q: Do all functions in manager and repository also have to be async and await? or just here in controller? 
//Q: Is the function inside the catch considered a annonymouse function and should be done differently? 
export const controlCreateUser = async (req: Request, res: Response) => {
    const user = new UserModel(req.body as UserType);
    const createUserResult = await manageCreateUser(user).catch((error) => {
        res.status(400).json({ error: error.message })});
    if(createUserResult)
        res.status(201).json(createUserResult);
};

// Read All
export const controlReadAllUsers = async (req: Request, res: Response) => {
    const users = await manageReadAllUsers().catch((error) => res.status(400).json({ error: error.message }));
    if(users)
        res.status(200).json(users);
    else 
        res.status(404).json({ message: "Users could not be read" });
};