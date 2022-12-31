import AppDataSource from "../../data-source"
import { Category } from "../../entities/category.entity"

const listPropertiesByCategoryService = async (categoryId: string): Promise<Category> => {        
    const categoryRep = AppDataSource.getRepository(Category)

    const list = await categoryRep.find({
        where: { id: categoryId },
        relations: { properties: true }
    })
    
    return list[0]
}

export default listPropertiesByCategoryService