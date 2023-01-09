import { Category } from './../../entities/category.entity';
import AppDataSource from "../../data-source";
import { ICategoryRequest, ICategoryResponse } from "../../interfaces/categories";
import { returnedCategorySchema } from '../../schemas/category.schema';
import { AppError } from '../../errors';

const createCategoryService = async (data: ICategoryRequest): Promise<ICategoryResponse> => {
    const categoryRep = AppDataSource.getRepository(Category)

    const verifyCategory = await categoryRep.findOneBy({ name: data.name })
    if(verifyCategory){
        throw new AppError("Category already exists", 409)
    }

    const category = categoryRep.create(data)
    await categoryRep.save(category)

    const newCategory = returnedCategorySchema.validate(category, {
        stripUnknown: true
    })

    return newCategory
}

export default createCategoryService