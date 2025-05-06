import express, { Router } from 'express';
import { 
    controlCreateUser, 
    controlReadAllUsers
} from './user.controller';
// import {
//     createItemSchema,
//     updateItemSchema,
//     idParamSchema
//   } from './item.validator';
//   import { validateBody, validateParams } from '../joi.functions';


const router: Router = express.Router();

router.post(
    '/newuser', 
    //validateBody(createItemSchema), 
    controlCreateUser
);
router.get(
    '/allusers', 
    controlReadAllUsers
);

export default router;
