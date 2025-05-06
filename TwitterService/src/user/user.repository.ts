import { UserModel }from "../../Lib/models/user.model";
import { Types } from "mongoose";
import { UserType } from "../../Lib/types/user.types";


//Create/Post
export const reposCreateUser = async (user: UserType): Promise<UserType> => {
    const newUser = new UserModel(user);
    await newUser.save();
    if(!newUser)
        throw new Error('User could not be created in DB (in reposCreateUser)');
    return newUser; 
};

//Read All/Get All
//Q: Is the return type here correct? 
export const reposReadAllUsers = async (): Promise<UserType[]>  => {
    const readUsers = await UserModel.find();
    if(!readUsers)
        throw new Error('Users not found in DB (in reposReadAllUsers)');
    return readUsers;
}