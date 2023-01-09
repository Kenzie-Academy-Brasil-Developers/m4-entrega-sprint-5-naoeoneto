import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { Schedule } from "../entities/schedules.entity";
import { AppError } from "../errors";

const verifyScheduleExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const scheduleRep = AppDataSource.getRepository(Schedule)

    const findSchedule = await scheduleRep.exist(req.body)
    if(findSchedule){
        throw new AppError("Schedule already exists", 409)
    }

    return next()
}

export default verifyScheduleExistsMiddleware