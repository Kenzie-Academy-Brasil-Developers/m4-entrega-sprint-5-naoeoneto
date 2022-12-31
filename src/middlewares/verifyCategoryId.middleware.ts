import { NextFunction, Request, Response } from "express"
import AppDataSource from "../data-source"
import { Category } from "../entities/category.entity"
import { AppError } from "../errors"

const verifyCategoryIdMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const categoryRep = AppDataSource.getRepository(Category)

    const category = await categoryRep.findOneBy({ id: req.params.id })
    if(!category){
        throw new AppError("Category not found", 404)
    }
    
    return next()
}

export default verifyCategoryIdMiddleware