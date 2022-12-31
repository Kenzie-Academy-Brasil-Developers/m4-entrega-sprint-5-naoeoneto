import AppDataSource from "../../data-source"
import { Property } from "../../entities/property.entity"
import { Schedule } from "../../entities/schedules.entity"
import { User } from "../../entities/user.entity"
import { IScheduleRequest } from "../../interfaces/schedules"
import { createScheduleSchema } from "../../schemas/schedule.schema"

const createScheduleService = async (data: IScheduleRequest, idUser: string): Promise<string> => {
    const { date, hour, propertyId } = data
    
    const propertyRep = AppDataSource.getRepository(Property)
    const userRep = AppDataSource.getRepository(User)
    const scheduleRep = AppDataSource.getRepository(Schedule)

    const prop = await propertyRep.findOneBy({ id: propertyId })
    const user = await userRep.findOneBy({ id: idUser })

    console.log(user)
    const newSchedule = scheduleRep.create({
        date,
        hour,
        property: prop,
        user: user
    })
    await scheduleRep.save(newSchedule)

    // const saveSchedule = await createScheduleSchema.validate(newSchedule, {
    //     stripUnknown: true
    // })
    // await scheduleRep.save(saveSchedule)

    return "Schedule booked with success"
}

export default createScheduleService