import mongoose, {Document, Schema, model} from 'mongoose';
import { Tweet } from '../types/tweet.type';

const tweetSchema: Schema = new Schema({
  _id: {
    type: String, 
    required: true
  },
  //needs to be indexed
  tweetName: { 
    type: String, 
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    //Q: how to reference to the _id of the user model?
    ref: 'User',
  },
  text: {
    type: String,
    required: true,
    //Q: Is this how to do max length?
    maxlength: 200,
  },
  media: {
    type: String,
  },
  likes: {
    type: Number, 
    min: 0,
    default: 0,
  },
  createdAt: {
    type: Date, 
    default: Date.now,
  }
},{collection: 'tweets'});

//Q: What is the purpose of the & Document? 
export const TweetModel = model<Tweet & Document>('Tweet', tweetSchema);