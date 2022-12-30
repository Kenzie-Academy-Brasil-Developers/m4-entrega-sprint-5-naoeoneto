import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { Property } from "../entities/property.entity";
import { AppError } from "../errors";

const verifyIfAddressExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const propertyRep = AppDataSource.getRepository(Property)
    const { address } = req.body

    const findAddress = await propertyRep.findOneBy({ address: address })
    if(findAddress){
        throw new AppError("Address already exists in our database", 409)
    }
    
    return next()
}

export default verifyIfAddressExistsMiddleware