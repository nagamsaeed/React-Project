import Joi from "joi";

const urlRegex = /^(https?:\/\/.+)$/i;

const cardSchema = {
    title: Joi.string().min(2).max(256).required(),
    subtitle: Joi.string().min(2).max(256).required(),
    description: Joi.string().min(2).max(1024).required(),
    phone: Joi.string()
        .regex(/^[0-9]{9,11}$/)
        .rule({
            message:
                'card "phone" must be a valid phone number with 9-11 digits',
        })
        .required(),
    email: Joi.string()
        .min(5)
        .regex(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)
        .rule({ message: 'card "email" must be a valid email address' })
        .required(),
    webUrl: Joi.string()
        .min(14)
        .regex(urlRegex)
        .rule({
            message:
                'card "webUrl" must be a valid URL with at least 14 characters',
        })
        .allow(""),
    imageUrl: Joi.string()
        .min(14)
        .regex(urlRegex)
        .rule({
            message:
                'card "imageUrl" must be a valid URL with at least 14 characters',
        })
        .required(),
    imageAlt: Joi.string().min(2).max(256).required(),
    state: Joi.string().allow(""),
    country: Joi.string().min(2).max(256).required(),
    city: Joi.string().min(2).max(256).required(),
    street: Joi.string().min(2).max(256).required(),
    houseNumber: Joi.number()
        .min(1)
        .rule({ message: 'card "houseNumber" must be at least 1 character' })
        .required(),
    zip: Joi.number().allow(""),
};

export default cardSchema;
