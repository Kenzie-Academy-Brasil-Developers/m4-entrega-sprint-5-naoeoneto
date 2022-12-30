import AppDataSource from "../../data-source";
import { Property } from "../../entities/property.entity";
import { IPropertyResponse } from "../../interfaces/properties";
import { listPropertiesSchema } from "../../schemas/property.schema";

const listAllPropertiesService = async (): Promise<Property[]> => {
    const propertyRep = AppDataSource.getRepository(Property)

    const list = await propertyRep.find({
        relations: {
            address: true,
            category: true
        }
    })

    // const returnedList = await listPropertiesSchema.validate(list, {
    //     stripUnknown: true
    // })

    return list
}

export default listAllPropertiesService