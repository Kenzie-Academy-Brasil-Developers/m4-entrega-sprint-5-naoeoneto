import { Router } from "express";
import { createScheduleController } from "../controllers/schedules/schedules.controller";
import verifyAuthMiddleware from "../middlewares/verifyAuth.middleware";
import verifyScheduleDataMiddleware from "../middlewares/verifyScheduleData.middleware";
import verifyScheduleExistsMiddleware from "../middlewares/verifyScheduleExists.middleware";
import verifyUserIsAdmMiddleware from "../middlewares/verifyUserIsAdm.middleware";

const scheduleRoutes = Router()

scheduleRoutes.post("", 
    verifyAuthMiddleware,
    verifyScheduleDataMiddleware,
    // verifyScheduleExistsMiddleware,
    createScheduleController)
// scheduleRoutes.get("", verifyUserIsAdmMiddleware, createScheduleController)

export default scheduleRoutes