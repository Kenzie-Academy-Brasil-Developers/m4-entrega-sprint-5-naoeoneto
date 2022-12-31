import AppDataSource from "../../data-source"
import { Property } from "../../entities/property.entity"

const listSchedulesByPropertiesService = async (propId: string) => {
    const propertyRep = AppDataSource.getRepository(Property)

    const list = await propertyRep.find({
        where: { id: propId },
        relations: { schedules: true }
    })

    const prop = list[0]
    delete prop.id
    delete prop.sold
    delete prop.value
    delete prop.createdAt
    delete prop.updatedAt
    delete prop.size

    return prop
}

export default listSchedulesByPropertiesService