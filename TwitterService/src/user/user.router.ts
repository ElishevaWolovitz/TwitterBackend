import express, { Router } from 'express';
import { controlCreateUser, controlReadAllUsers } from './user.controller';
import { canCreateUser } from './user.validator';
import { validateBody, validateParams } from '../../Lib/joi/joi.functions';


const router: Router = express.Router();

router.post(
    '/newuser', 
    validateBody(canCreateUser), 
    controlCreateUser
);
router.get(
    '/allusers', 
    controlReadAllUsers
);

export default router;
