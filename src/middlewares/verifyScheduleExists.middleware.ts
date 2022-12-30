import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { Property } from "../entities/property.entity";
import { Schedule } from "../entities/schedules.entity";
import { AppError } from "../errors";
import { IScheduleRequest } from "../interfaces/schedules";

const verifyScheduleExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { date, hour, propertyId } = req.body
    
    const scheduleRep = AppDataSource.getRepository(Schedule)

    const findSchedule = await scheduleRep.findOneBy(req.body)
    console.log(findSchedule)
    if(findSchedule){
        throw new AppError("This schedule already exists", 409)
    }

    return next()
}

export default verifyScheduleExistsMiddleware