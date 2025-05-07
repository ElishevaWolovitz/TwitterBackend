import Joi from 'joi';

export const canCreateUser = Joi.object({
    userName: Joi.string().required(),
    displayName: Joi.string().required()
})
