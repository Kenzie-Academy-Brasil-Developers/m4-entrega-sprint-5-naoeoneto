import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { Property } from "../entities/property.entity";
import { AppError } from "../errors";

const verifyScheduleDataMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { date, hour, propertyId } = req.body
    const propertyRep = AppDataSource.getRepository(Property) 

    const property = await propertyRep.findOneBy({ id: propertyId })
    if(!property){
        throw new AppError("Property not found", 404)
    }

    const checkDate = new Date(date).toLocaleDateString('en-US',{ weekday: 'long' })
    if(checkDate === "Sunday" || checkDate === "Saturday"){
        throw new AppError("You can't book at this day", 400)
    }
    
    const checkHour = hour.split(":")
    if(checkHour[0] < 8 || checkHour[0] > 17){
        throw new AppError("You can't book at this hour", 400)
    }
    
    return next()
}

export default verifyScheduleDataMiddleware