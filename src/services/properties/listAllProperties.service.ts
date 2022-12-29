import AppDataSource from "../../data-source";
import { Property } from "../../entities/property.entity";
import { IPropertyResponse } from "../../interfaces/properties";
import { listPropertiesSchema } from "../../schemas/property.schema";

const listAllPropertiesService = async (): Promise<IPropertyResponse[]> => {
    const propertyRep = AppDataSource.getRepository(Property)

    const list = await propertyRep.find({ withDeleted: true })
    console.log(list)

    const returnedList = listPropertiesSchema.validate(list, {
        stripUnknown: true
    })

    return returnedList
}

export default listAllPropertiesService