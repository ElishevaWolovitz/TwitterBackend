import { UserModel }from "../models/user.model";
import { UserType } from "../types/user.types";


//Create/Post
export const reposCreateUser = async (user: UserType): Promise<UserType> => {
    return await new UserModel(user).save();
    //Q8: was not sure if i should do error handling like what is commented below or if the above is better and simpler? 
    // const newUser = new UserModel(user);
    // await newUser.save();
    // if(!newUser)
    //     throw new Error('User could not be created in DB (in reposCreateUser)');
    // return newUser; 
};
 
//Read All/Get All
export const reposReadAllUsers = async (): Promise<UserType[]>  => {
    return await UserModel.find();
    //Q8: was not sure if i should do error handling like what is commented below or if the above is better and simpler? 
    // const readUsers = await UserModel.find();
    // if(!readUsers)
    //     throw new Error('Users not found in DB (in reposReadAllUsers)');
    // return readUsers;
}