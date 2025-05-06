import { Request, Response } from 'express';
import { TweetModel } from "../../Lib/models/tweet.model";
import { 
    manageCreateTweet, 
    manageReadAllTweets, 
    manageReadTweet, 
    manageUpdateTweet, 
    manageDeleteTweet 
} from "./tweet.manager";
//import { handleError } from '../item.functions';
import { TweetType } from "../../Lib/types/tweet.type";

// Create
//Q: Do all functions in manager and repository also have to be async and await? or just here in controller? 
//Q: Is the function inside the catch considered a annonymouse function and should be done differently? 
export const controlCreateTweet = async (req: Request, res: Response) => {
    const tweet = new TweetModel(req.body as TweetType);
    const createTweetResult = await manageCreateTweet(tweet).catch((error) => {
        res.status(400).json({ error: error.message })});
    if(createTweetResult)
        res.status(201).json(createTweetResult);
};

// Read All
export const controlReadAllTweets = async (req: Request, res: Response) => {
    const tweets = await manageReadAllTweets().catch((error) => 
        res.status(400).json({ error: error.message }));
    if(tweets)
        res.status(200).json(tweets);
    else 
        res.status(404).json({ message: "Tweets could not be read (in controlReadAllTweets)" });
};

// Read One
export const controlReadTweet = async (req: Request, res: Response) => {
    const { id: tweetId } = req.params;
    const tweet = await manageReadTweet(tweetId).catch((error) => 
        res.status(400).json({error: error.message}));
    if(tweet) 
        res.status(200).json(tweet);
    else 
        res.status(404).json({ message: "Tweet could not be read (in controlReadR=Tweet)" });
};

// Update
export const controlUpdateTweet = async (req: Request, res: Response) => {
    const { id: tweetId } = req.params;
    const updateData = req.body as Partial<TweetType>;
    const updatedTweet = await manageUpdateTweet(tweetId, updateData).catch((error) => 
        {res.status(400).json({ error: error.message })});
    if(updatedTweet) 
        res.status(200).json(updatedTweet);
    else 
        res.status(404).json({ message: "Tweet could not be updated (in controlUpdateTweet)" });
};

// Delete
export const controlDeleteTweet = async (req: Request, res: Response) => {
    const { id: tweetId } = req.params;
    const deleteTweetResult = await manageDeleteTweet(tweetId).catch((error) => 
        res.status(400).json({ error: error.message }));
    if(deleteTweetResult)
        res.status(200).json({ message: "Tweet deleted successfully (in controlDeleteTweet)" });
    else
        res.status(404).json({ message: "Tweet could not be deleted (in controlDeleteTweet" });

}

