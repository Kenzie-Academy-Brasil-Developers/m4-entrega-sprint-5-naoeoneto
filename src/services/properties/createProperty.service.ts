import AppDataSource from "../../data-source";
import { Property } from "../../entities/property.entity";
import { IPropertyRequest, IPropertyResponse } from "../../interfaces/properties";
import { returnedPropertySchema } from "../../schemas/property.schema";

const createPropertyService = async (data: IPropertyRequest): Promise<IPropertyResponse> => {
    const propertyRep = AppDataSource.getRepository(Property)

    const newProperty = propertyRep.create(data)
    await propertyRep.save(newProperty)

    const returnedProperty = returnedPropertySchema.validate(newProperty, {
        stripUnknown: true
    })

    return returnedProperty
}

export default createPropertyService