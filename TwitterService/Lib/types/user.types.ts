//Q: what is the difference between ObjectId and String?
//Q: what is the difference between 
//   importing from mongo or from mongoose?
import { ObjectId } from "mongoose";

export type UserType = {
    //Q: Do i not need to put _id as part of the type 
    //   even though it is part of the schema? 
    _id?: ObjectId;
    username: string;
    displayName: string;
}