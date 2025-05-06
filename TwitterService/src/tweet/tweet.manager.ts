import { Types } from 'mongoose';
import { 
    reposCreateTweet, 
    reposReadAllTweets, 
    reposReadTweet, 
    reposUpdateTweet, 
    reposDeleteTweet 
} from "./tweet.repository";
import { TweetType } from "../../Lib/types/tweet.type";
//import { UserType } from "../../Lib/types/user.types";

// Create
export const manageCreateTweet = async (tweet: TweetType): 
    Promise<TweetType> => {
    //put check here for userId in tweet to see if it exists in DB 
    return reposCreateTweet(tweet); 
};

//Read All
export const manageReadAllTweets = async ():
    Promise<TweetType[]> => {
    return reposReadAllTweets();
}; 

// //Read One
export const manageReadTweet = async (tweetId: string | Types.ObjectId): 
    Promise<TweetType> => {
    return reposReadTweet(tweetId);
};

//Update   
export const manageUpdateTweet = async ( tweetId: string | Types.ObjectId, 
    updateData: Partial<TweetType>): 
    Promise<TweetType> => {
    return reposUpdateTweet(tweetId, updateData);
};

//Delete
export const manageDeleteTweet = async (tweetId: string | Types.ObjectId): 
    Promise<TweetType> => {
    return reposDeleteTweet(tweetId);
};