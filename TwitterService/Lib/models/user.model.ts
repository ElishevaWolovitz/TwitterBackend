import mongoose, {Document, Schema, model } from 'mongoose';
import { UserType } from '../types/user.types';

const userSchema: Schema = new Schema({
  username: { 
    type: String, 
    required: true,
    unique: true,
    index: true,
  },
  displayName: {
    type: String,
    required: true
  }
},{collection: 'users'});

//userSchema.index({ username: 1 }); // 1 = ascending order;
//Q: What is the purpose of the & Document? 
export const UserModel = model<UserType & Document>('UserModel', userSchema);