import { NextFunction, Request, Response } from "express"
import { AnySchema } from "yup"

const validateDataMiddleware = (schema: AnySchema) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const validated = await schema.validate(req.body, {
            abortEarly: false,
            stripUnknown: true
        })

        req.body = validated

        return next()
        
    } catch (error: any) {
        console.log(error)
        return res.status(400).json({ error: error.errors })
    }
}

export default validateDataMiddleware