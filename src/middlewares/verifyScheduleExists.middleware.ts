import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { Property } from "../entities/property.entity";
import { Schedule } from "../entities/schedules.entity";
import { AppError } from "../errors";

const verifyScheduleExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { date, hour, propertyId } = req.body
    console.log(propertyId)
    const scheduleRep = AppDataSource.getRepository(Schedule)

    const findSchedule = await scheduleRep.createQueryBuilder("schedulesToUsersAndProperties")
                        .select("schedulesToUsersAndProperties")
                        .where("schedulesToUsersAndProperties.date = :scheduleDate", { scheduleDate: date })
                        .andWhere("schedulesToUsersAndProperties.hour = :scheduleHour", { scheduleHour: hour })
                        .getOne()
    console.log(findSchedule)
    // if(findSchedule){
    //     throw new AppError("This schedule already exists", 409)
    // }

    return next()
}

export default verifyScheduleExistsMiddleware