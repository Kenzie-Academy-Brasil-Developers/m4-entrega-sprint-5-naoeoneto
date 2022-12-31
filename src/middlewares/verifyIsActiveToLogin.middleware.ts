import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors";

const verifyIsActiveToLoginMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const userRep = AppDataSource.getRepository(User)

    const login = await userRep.findOneBy({ email: req.body.email })
    if(!login.isActive){
        throw new AppError("You are not allowed to login", )
    }

    return next()
}

export default verifyIsActiveToLoginMiddleware