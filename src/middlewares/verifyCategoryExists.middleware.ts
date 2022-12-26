import { NextFunction, Request, Response } from "express"
import AppDataSource from "../data-source"
import { Category } from "../entities/category.entity"
import { AppError } from "../errors"

const verifyCategoryExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const categoryRep = AppDataSource.getRepository(Category)

    const verifyCategory = await categoryRep.findOneBy({ name: req.body.name })
    if(verifyCategory){
        throw new AppError("Category already exists", 409)
    }

    return next()
}

export default verifyCategoryExistsMiddleware