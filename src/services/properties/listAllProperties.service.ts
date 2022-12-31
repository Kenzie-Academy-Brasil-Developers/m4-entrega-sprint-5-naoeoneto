import AppDataSource from "../../data-source";
import { Property } from "../../entities/property.entity";

const listAllPropertiesService = async (): Promise<Property[]> => {
    const propertyRep = AppDataSource.getRepository(Property)

    const list = await propertyRep.find({
        relations: {
            address: true,
            category: true
        }
    })

    return list
}

export default listAllPropertiesService