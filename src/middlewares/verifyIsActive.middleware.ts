import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors";

const verifyIsActiveMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const userRep = AppDataSource.getRepository(User)

    const user = await userRep.findOneBy({ id: req.params.id })
    if(!user.isActive){
        throw new AppError("You are not active", 400)
    }
    
    return next()
        
}

export default verifyIsActiveMiddleware