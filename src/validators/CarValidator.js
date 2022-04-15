import Joi from "joi";

const carValidator = Joi.object({
    model: Joi.string().min(2).max(20).required(),
    // regex(/^[a-zA-Zа-яА-Я]{1-20}$/),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required(),
    price: Joi.number().min(1).max(1000000).required()
});

export {carValidator};