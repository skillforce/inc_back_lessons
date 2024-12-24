import { body, validationResult } from "express-validator";
import { NextFunction, Request, Response } from 'express';

export const inputValidationMiddleware = (req:Request, res:Response, next:NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }else{
        next()
    }
}

export const titleBodyFieldValidationMiddleware = body('title')
    .isLength({min:3, max:30 })
    .withMessage('title should be between 4 and 30 symbols');
