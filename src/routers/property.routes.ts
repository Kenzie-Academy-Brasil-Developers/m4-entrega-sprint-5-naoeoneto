import { Router } from "express";
import { createPropertyController, listAllPropertiesController } from "../controllers/properties/properties.controller";
import validateDataMiddleware from "../middlewares/validateData.middleware";
import verifyAuthMiddleware from "../middlewares/verifyAuth.middleware";
import verifyCategoryIdMiddleware from "../middlewares/verifyCategoryId.middleware";
import verifyUserIsAdmMiddleware from "../middlewares/verifyUserIsAdm.middleware";
import { createPropertySchema } from "../schemas/property.schema";

const propertyRoutes = Router()

propertyRoutes.post("", verifyAuthMiddleware, verifyUserIsAdmMiddleware, verifyCategoryIdMiddleware, validateDataMiddleware(createPropertySchema), createPropertyController)
propertyRoutes.get("", verifyUserIsAdmMiddleware, listAllPropertiesController)

export default propertyRoutes