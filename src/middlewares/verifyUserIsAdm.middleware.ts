import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";

const verifyUserIsAdmMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const userRep = AppDataSource.getRepository(User)
    
    const user = await userRep.findOneBy({ id: req.user.id })
    if(!user?.isAdm){
        return res.status(403).json({ message: "You are not allowed do to this" })
    }

    return next()
}

export default verifyUserIsAdmMiddleware