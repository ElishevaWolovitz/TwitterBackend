import { 
    reposCreateUser, 
    reposReadAllUsers
} from "./user.repository";
import { Types } from 'mongoose';
import { UserType } from "../../Lib/types/user.types";

// Create
export const manageCreateUser = async (user: UserType): Promise<UserType> => {
    return reposCreateUser(user); 
};

//Read All
export const manageReadAllUsers = async (): Promise<UserType[]> => {
    return reposReadAllUsers();
}; 