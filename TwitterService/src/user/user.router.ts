import express, { Router } from 'express';
import { controlCreateUser, controlReadAllUsers } from './user.controller';
import { userBodySchema } from './user.validator';
import { validateBody } from '../../Lib/joi/joi.functions';


const router: Router = express.Router();

router.post(
    '/newuser', 
    validateBody(userBodySchema), 
    controlCreateUser
);
router.get(
    '/allusers', 
    controlReadAllUsers
);

export default router;
