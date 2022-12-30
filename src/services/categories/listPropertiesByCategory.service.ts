import AppDataSource from "../../data-source"
import { Property } from "../../entities/property.entity"
import { Category } from "../../entities/category.entity"
import { IPropertyResponse } from "../../interfaces/properties"
import { listPropertiesSchema } from "../../schemas/property.schema"
import { AppError } from "../../errors"

const listPropertiesByCategoryService = async (categoryId: string) => {
        // const propertyRep = AppDataSource.getRepository(Property)
    const categoryRep = AppDataSource.getRepository(Category)
//     const list = await categoryRep.createQueryBuilder("category")
//                 .innerJoinAndSelect("category.properties", "props")
//                 .where("category.id = :id_category", { id_category: categoryId })
//                 .getMany()
    
    const list = await categoryRep.find({
        where: {
                id: categoryId
                }
        })

      
        console.log(list[0].properties)
        const returnedList = listPropertiesSchema.validate(list[0].properties, {
            stripUnknown: true
        })
    
        return returnedList
}

export default listPropertiesByCategoryService