import { Router } from "express";
import createSessionController from "../controllers/session/session.controller";

const sessionRouter = Router()

sessionRouter.post("", createSessionController)

export default sessionRouter