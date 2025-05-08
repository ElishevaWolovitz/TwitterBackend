//Q4: what is the difference between ObjectId and String?
//Q5: what is the difference between importing from mongo or from mongoose?
import { ObjectId } from "mongoose";

export type UserType = {
    //Q6: Do i not need to put _id as part of the type even though it is not part of the schema in the code? 
    _id?: ObjectId;
    username: string;
    displayName: string;
}