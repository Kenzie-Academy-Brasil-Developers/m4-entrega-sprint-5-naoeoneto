import { NextFunction, Request, Response } from "express"
import AppDataSource from "../data-source"
import { User } from "../entities/user.entity"
import { AppError } from "../errors"

const verifyEmailExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const userRep = AppDataSource.getRepository(User)

    const verifyEmail = await userRep.findOneBy({ email: req.body.email })
    if(verifyEmail){
        throw new AppError("User already exists", 400)
    }

    return next()
}

export default verifyEmailExistsMiddleware