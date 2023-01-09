import AppDataSource from "../../data-source"
import { Category } from "../../entities/category.entity"
import { AppError } from "../../errors"

const listPropertiesByCategoryService = async (categoryId: string): Promise<Category> => {        
    const categoryRep = AppDataSource.getRepository(Category)

    const category = await categoryRep.findOneBy({ id: categoryId })
    if(!category){
        throw new AppError("Category not found", 404)
    }

    const list = await categoryRep.findOne({
        where: { id: categoryId },
        relations: { properties: true }
    })
    
    return list
}

export default listPropertiesByCategoryService