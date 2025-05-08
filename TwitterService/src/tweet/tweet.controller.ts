import { Request, Response } from 'express';
import { TweetModel } from "../../Lib/models/tweet.model";
import { 
    manageCreateTweet, 
    manageReadAllTweets, 
    manageReadTweet, 
    manageUpdateTweet, 
    manageDeleteTweet 
} from "./tweet.manager";
import { TweetType } from "../../Lib/types/tweet.type";
import {errorHandler } from '../../Lib/handler/error.handler';
import {sucessHandler} from '../../Lib/handler/sucess.handler';


//Q: Do all functions in manager and repository also have to be async and await? or just here in controller? 
//Q: Is the function inside the catch considered a annonymouse function and should be done differently? 
// Create
export const controlCreateTweet = async (req: Request, res: Response) => {
    const tweet = new TweetModel(req.body as TweetType);
    const createTweetResult = await manageCreateTweet(tweet).catch(errorHandler(res, 400));
    if(createTweetResult)
        sucessHandler(res, 'Created new tweet (in controller)', createTweetResult, 200);
};

// Read All
export const controlReadAllTweets = async (req: Request, res: Response) => {
    const tweets = await manageReadAllTweets().catch(errorHandler(res, 400));
    if(tweets)
        sucessHandler(res, 'Read all tweets (in controller)', tweets, 200);
};

// Read One
export const controlReadTweet = async (req: Request, res: Response) => {
    const { id: tweetId } = req.params;
    const tweet = await manageReadTweet(tweetId).catch(errorHandler(res, 400));
    if(tweet) 
        sucessHandler(res, 'Read 1 tweet (in controller)', tweet, 200);
};

// Update
export const controlUpdateTweet = async (req: Request, res: Response) => {
    const { id: tweetId } = req.params;
    const updateData = req.body as Partial<TweetType>;
    const updatedTweet = await manageUpdateTweet(tweetId, updateData).catch(errorHandler(res, 400));
    if(updatedTweet) 
        sucessHandler(res, 'Updated 1 tweet (in controller)', updatedTweet, 200);
};

// Delete
export const controlDeleteTweet = async (req: Request, res: Response) => {
    const { id: tweetId } = req.params;
    const deleteTweetResult = await manageDeleteTweet(tweetId).catch(errorHandler(res, 400));
    if(deleteTweetResult)
        sucessHandler(res, 'Deleted 1 tweet (in controller)', deleteTweetResult, 200);
}

