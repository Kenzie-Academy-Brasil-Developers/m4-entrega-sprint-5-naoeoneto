import AppDataSource from "../../data-source"
import { Property } from "../../entities/property.entity"
import { Schedule } from "../../entities/schedules.entity"
import { User } from "../../entities/user.entity"

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

    console.log(prop)

    return prop

    // const scheduleRep = AppDataSource.getRepository(Schedule)

    // const list = await scheduleRep.createQueryBuilder("schedules")
    //             .innerJoinAndSelect("schedules.property", "property")
    //             .innerJoinAndSelect("schedules.user", "user")
    //             .where("schedules.property = :id", { id: propId })
    //             .select(["schedules.id", "schedules.date", "schedules.hour", "schedules.property.id", "schedules.user.id"])
    //             .getRawMany()
    // console.log(list)
    // return list

    // const scheduleRep = AppDataSource.getRepository(Schedule)

    // const list = await scheduleRep.createQueryBuilder("schedulesToUsersAndProperties")
    //             .leftJoinAndSelect(Property, "property")
    //             // .leftJoinAndSelect(User, "user")
    //             // .select("property.schedule", "schedules")
    //             .where("property.id = :id", { id: propId })
    //             .getMany()
    //             console.log(list)
    // return list
}

export default listSchedulesByPropertiesService