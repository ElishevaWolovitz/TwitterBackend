import express, { Router } from 'express';
import { 
    controlCreateTweet, 
    controlReadAllTweets, 
    controlReadTweet, 
    controlUpdateTweet, 
    controlDeleteTweet 
} from './tweet.controller';
// import {
//     createItemSchema,
//     updateItemSchema,
//     idParamSchema
//   } from './item.validator';
//   import { validateBody, validateParams } from '../joi.functions';


const router: Router = express.Router();

router.post(
    '/newtweet', 
    //validateBody(createItemSchema), 
    controlCreateTweet
);
router.get(
    '/alltweets', 
    controlReadAllTweets
);
router.get(
    '/tweet/:id', 
    //validateParams(idParamSchema), 
    controlReadTweet
);
router.put(
    '/updatetweet/:id', 
    //validateParams(idParamSchema), 
    //validateBody(updateItemSchema), 
    controlUpdateTweet
);
router.delete(
    '/deletetweet/:id', 
    //validateParams(idParamSchema), 
    controlDeleteTweet
);

export default router;
