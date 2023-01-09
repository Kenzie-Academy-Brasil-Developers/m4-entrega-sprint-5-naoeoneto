import AppDataSource from "../../data-source"
import { Property } from "../../entities/property.entity"
import { Schedule } from "../../entities/schedules.entity"
import { AppError } from "../../errors"

const listSchedulesByPropertiesService = async (propId: string) => {
    const schedulesRep = AppDataSource.getRepository(Schedule)
    const PropertyRep = AppDataSource.getRepository(Property)

    const property = await PropertyRep.findOneBy({ id: propId })
    if(!property){
        throw new AppError("Property not found", 404)
    }

    const schedules = await schedulesRep.createQueryBuilder("schedulesToUsersAndProperties")
        .innerJoinAndSelect('schedulesToUsersAndProperties.property', "properties")
        .innerJoinAndSelect('schedulesToUsersAndProperties.user', "users")
        .where('properties.id = :id', {id: propId})
        .getMany()

    return {schedules: schedules}
}

export default listSchedulesByPropertiesService