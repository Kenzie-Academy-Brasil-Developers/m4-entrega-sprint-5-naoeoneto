import AppDataSource from "../../data-source";
import { Category } from "../../entities/category.entity";
import { Property } from "../../entities/property.entity";
import { AppError } from "../../errors";
import { IPropertyRequest, IPropertyResponse } from "../../interfaces/properties";
import { returnedPropertySchema } from "../../schemas/property.schema";

const createPropertyService = async (data: IPropertyRequest): Promise<IPropertyResponse> => {
    const propertyRep = AppDataSource.getRepository(Property)
    // const categoryRep = AppDataSource.getRepository(Category)

    // const category = categoryRep.findOneBy({ id: idCategory })
    // console.log(category)
    // if(!category){
    //     throw new AppError("Category doesn't exists", 404)
    // }

    const newProperty = propertyRep.create(data)
    await propertyRep.save(newProperty)

    const returnedProperty = returnedPropertySchema.validate(newProperty, {
        stripUnknown: true
    })

    return returnedProperty
}

export default createPropertyService