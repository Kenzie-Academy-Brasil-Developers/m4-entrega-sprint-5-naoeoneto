import { Router } from "express";
import { createScheduleController, listSchedulesByPropertiesController } from "../controllers/schedules/schedules.controller";
import validateDataMiddleware from "../middlewares/validateData.middleware";
import verifyAuthMiddleware from "../middlewares/verifyAuth.middleware";
import verifyPropertyIdMiddleware from "../middlewares/verifyPropertyId.middleware";
import verifyScheduleDataMiddleware from "../middlewares/verifyScheduleData.middleware";
import verifyScheduleExistsMiddleware from "../middlewares/verifyScheduleExists.middleware";
import verifyUserIsAdmMiddleware from "../middlewares/verifyUserIsAdm.middleware";

const scheduleRoutes = Router()

scheduleRoutes.post("", 
    verifyAuthMiddleware,
    verifyScheduleDataMiddleware,
    verifyScheduleExistsMiddleware,
    createScheduleController)
scheduleRoutes.get("/properties/:id", 
    verifyAuthMiddleware,
    verifyUserIsAdmMiddleware, 
    verifyPropertyIdMiddleware,
    listSchedulesByPropertiesController)

export default scheduleRoutes