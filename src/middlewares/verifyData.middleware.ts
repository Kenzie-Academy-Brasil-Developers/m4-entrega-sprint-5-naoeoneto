import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

const verifyDataMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const data = Object.keys(req.body)

    if(data.includes('isAdm') || data.includes('isActive') || data.includes('id')){
        throw new AppError("Invalid Data", 401)
    }

    return next()
}

export default verifyDataMiddleware