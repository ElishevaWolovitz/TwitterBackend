import { ObjectId } from 'mongoose';

export type TweetType = {
    _id?: ObjectId;
    tweetName: string;
    userId: ObjectId;
    text: string;
    media?: string;
    likes?: number;
    createdAt?: Date;
}