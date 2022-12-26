import { NextFunction, Request, Response } from "express"
import AppDataSource from "../data-source"
import { Property } from "../entities/property.entity"
import { AppError } from "../errors"

const verifyCategoryIdMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const propertyRep = AppDataSource.getRepository(Property)

    const property = await propertyRep.findOneBy({ id: req.body.categoryId })
    if(!property){
        throw new AppError("Category not found", 404)
    }
    
    return next()
}

export default verifyCategoryIdMiddleware