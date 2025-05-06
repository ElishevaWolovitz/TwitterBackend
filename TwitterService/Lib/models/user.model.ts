import mongoose, {Document, Schema, model } from 'mongoose';
import { UserType } from '../types/user.types';

const userSchema: Schema = new Schema({
  _id: {
    type: String, 
    required: true
  },
  //needs to be indexed
  username: { 
    type: String, 
    required: true,
    unique: true 
  },
  displayName: {
    type: String,
    required: true
  }
},{collection: 'users'});

//Q: What is the purpose of the & Document? 
export const UserModel = model<UserType & Document>('User', userSchema);