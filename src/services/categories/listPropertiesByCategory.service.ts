import AppDataSource from "../../data-source"
import { Property } from "../../entities/property.entity"
import { Category } from "../../entities/category.entity"
import { IPropertyResponse } from "../../interfaces/properties"
import { listPropertiesSchema } from "../../schemas/property.schema"
import { AppError } from "../../errors"

const listPropertiesByCategoryService = async (categoryId: string): Promise<Category> => {        
    const categoryRep = AppDataSource.getRepository(Category)

    const list = await categoryRep.find({
        where: { id: categoryId },
        relations: { properties: true }
    })
   
        // const returnedList = listPropertiesSchema.validate(list[0].properties, {
        //     stripUnknown: true
        // })
    
    return list[0]
}

export default listPropertiesByCategoryService