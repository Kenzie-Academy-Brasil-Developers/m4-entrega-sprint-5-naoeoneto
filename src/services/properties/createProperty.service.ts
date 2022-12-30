import AppDataSource from "../../data-source";
import { Category } from "../../entities/category.entity";
import { Property } from "../../entities/property.entity";
import { Address } from "../../entities/address.entity";
import { AppError } from "../../errors";
import { IPropertyRequest, IPropertyResponse } from "../../interfaces/properties";
import { returnedPropertySchema } from "../../schemas/property.schema";

const createPropertyService = async (data: IPropertyRequest): Promise<Property> => {
    const { value, size, address, categoryId } = data
    const { district, zipCode, number, city, state } = address
    
    const categoryRep = AppDataSource.getRepository(Category)
    const addressRep = AppDataSource.getRepository(Address)
    const propertyRep = AppDataSource.getRepository(Property)

    const category = await categoryRep.findOneBy({ id: categoryId })
    if(!category){
        throw new AppError("Category doesn't exists", 404)
    }

    const newAddress = addressRep.create({ district, zipCode, number, city, state })
    await addressRep.save(newAddress)

    const newProperty = propertyRep.create({
        value, size, address: newAddress, category: category
    })
    await propertyRep.save(newProperty)

    // const returnedProperty = returnedPropertySchema.validate(newProperty, {
    //     stripUnknown: true
    // })

    return newProperty
}

export default createPropertyService