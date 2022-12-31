import { Router } from "express";
import { createPropertyController, 
    listAllPropertiesController } from "../controllers/properties/properties.controller";
import validateDataMiddleware from "../middlewares/validateData.middleware";
import verifyAuthMiddleware from "../middlewares/verifyAuth.middleware";
import verifyCategoryIdMiddleware from "../middlewares/verifyCategoryId.middleware";
import verifyIfAddressExistsMiddleware from "../middlewares/verifyIfAddressExists.middleware";
import verifyUserIsAdmMiddleware from "../middlewares/verifyUserIsAdm.middleware";
import { createPropertySchema } from "../schemas/property.schema";

const propertyRoutes = Router()

propertyRoutes.post("", 
    verifyAuthMiddleware, 
    verifyUserIsAdmMiddleware, 
    verifyCategoryIdMiddleware,
    verifyIfAddressExistsMiddleware, 
    validateDataMiddleware(createPropertySchema), 
    createPropertyController)
propertyRoutes.get("",
    listAllPropertiesController)

export default propertyRoutes