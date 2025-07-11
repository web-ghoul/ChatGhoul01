import { validate } from "class-validator";
import { Response } from "express";

export const validationHelper = async (validatation, res: Response): Promise<boolean> => {
    const errors = await validate(validatation)
    if (errors.length > 0) {
        const messages = errors.flatMap(err =>
            Object.values(err.constraints || {})
        );
        res.status(400).json({
            message: messages,
            error: 'Bad Request',
        });
        return false
    }
    return true
}