import express, { Application } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './src/user/user.router';

dotenv.config();
const app:  Application = express();
const PORT: number = parseInt(process.env.PORT || '5000', 10); 
const mongoDBURL: string = process.env.MONGODB_URL || "mongodb://localhost:27017/MiniCRUD";
app.use(express.json());
app.use(userRoutes);

//Q: Should there be a catch in here?
//Q: Should startServer be async/await? 
const startServer = () => {
    mongoose.connect(mongoDBURL)
    console.log("DB Connection Successful");
    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);
    });
};


startServer();
