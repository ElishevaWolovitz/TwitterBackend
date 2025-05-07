import Joi from 'joi';

export const userBodySchema = Joi.object({
    userName: Joi.string().required(),
    displayName: Joi.string().required()
})
