import mongoose, {Document, Schema, model} from 'mongoose';
import { TweetType } from '../types/tweet.type';

const tweetSchema: Schema = new Schema({
  // Q: App does not run when this is uncommented. Why?
  // _id: {
  //   type: String, 
  //   required: true
  // },
  //Q: needs to be indexed here in code or only in compass is okay?
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
export const TweetModel = model<TweetType & Document>('Tweet', tweetSchema);