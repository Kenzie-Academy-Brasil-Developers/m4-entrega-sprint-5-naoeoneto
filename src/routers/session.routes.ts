import { Router } from "express";
import createSessionController from "../controllers/session/session.controller";
import verifyIsActiveToLoginMiddleware from "../middlewares/verifyIsActiveToLogin.middleware";

const sessionRouter = Router()

sessionRouter.post("", verifyIsActiveToLoginMiddleware, createSessionController)

export default sessionRouter