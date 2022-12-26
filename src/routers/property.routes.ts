import { Router } from "express";
import { createPropertyController, listAllPropertiesController } from "../controllers/properties/properties.controller";
import verifyAuthMiddleware from "../middlewares/verifyAuth.middleware";
import verifyCategoryIdMiddleware from "../middlewares/verifyCategoryId.middleware";
import verifyUserIsAdmMiddleware from "../middlewares/verifyUserIsAdm.middleware";

const propertyRoutes = Router()

propertyRoutes.post("", verifyAuthMiddleware, verifyUserIsAdmMiddleware, verifyCategoryIdMiddleware, createPropertyController)
propertyRoutes.get("", verifyUserIsAdmMiddleware, listAllPropertiesController)

export default propertyRoutes