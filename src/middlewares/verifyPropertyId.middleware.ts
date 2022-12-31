import { NextFunction, Request, Response } from "express"
import AppDataSource from "../data-source"
import { Property } from "../entities/property.entity"
import { AppError } from "../errors"

const verifyPropertyIdMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const PropertyRep = AppDataSource.getRepository(Property)

    const property = await PropertyRep.findOneBy({ id: req.params.id })
    if(!property){
        throw new AppError("Property not found", 404)
    }
    
    return next()
}

export default verifyPropertyIdMiddleware