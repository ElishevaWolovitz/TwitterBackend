import express, { Router } from 'express';
import { 
    controlCreateTweet, 
    controlReadAllTweets, 
    controlReadTweet, 
    controlUpdateTweet, 
    controlDeleteTweet 
} from './tweet.controller';
import {
    tweetBodySchema,
    tweetUpdateBodySchema,
    tweetIdParamSchema
  } from './tweet.validator';
  import { validateBody, validateParams } from '../../Lib/joi/joi.functions';


const router: Router = express.Router();

router.post(
    '/newtweet', 
    validateBody(tweetBodySchema), 
    controlCreateTweet
);
router.get(
    '/alltweets', 
    controlReadAllTweets
);
router.get(
    '/tweet/:id', 
    validateParams(tweetIdParamSchema), 
    controlReadTweet
);
router.put(
    '/updatetweet/:id', 
    validateParams(tweetIdParamSchema), 
    validateBody(tweetUpdateBodySchema), 
    controlUpdateTweet
);
router.delete(
    '/deletetweet/:id', 
    validateParams(tweetIdParamSchema), 
    controlDeleteTweet
);

export default router;
