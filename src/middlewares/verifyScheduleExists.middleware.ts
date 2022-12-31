import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { Schedule } from "../entities/schedules.entity";

const verifyScheduleExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { date, hour, propertyId } = req.body

    const scheduleRep = AppDataSource.getRepository(Schedule)

    const findSchedule = await scheduleRep.createQueryBuilder("schedulesToUsersAndProperties")
                        .select("schedulesToUsersAndProperties")
                        .where("schedulesToUsersAndProperties.date = :scheduleDate", { scheduleDate: date })
                        .andWhere("schedulesToUsersAndProperties.hour = :scheduleHour", { scheduleHour: hour })
                        .getOne()

    return next()
}

export default verifyScheduleExistsMiddleware