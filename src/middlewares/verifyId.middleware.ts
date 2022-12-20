import { NextFunction, Request, Response } from "express"
import AppDataSource from "../data-source"
import { User } from "../entities/user.entity"
import { AppError } from "../errors"

const verifyIdMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const userRep = AppDataSource.getRepository(User)

    const user = await userRep.findOneBy({ id: req.params.id })
    if(!user){
        throw new AppError("User not found", 404)
    }
    
    return next()
}

export default verifyIdMiddleware