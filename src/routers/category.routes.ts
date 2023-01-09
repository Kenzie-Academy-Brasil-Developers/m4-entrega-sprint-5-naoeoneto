import { Router } from "express";
import { createCategoryController, 
        listAllCategoriesController, 
        listPropertiesByCategoriesController } 
        from "../controllers/categories/categories.controller";
import verifyAuthMiddleware from "../middlewares/verifyAuth.middleware";

import verifyUserIsAdmMiddleware from "../middlewares/verifyUserIsAdm.middleware";

const categoriesRoutes = Router()

categoriesRoutes.post("", 
        verifyAuthMiddleware, 
        verifyUserIsAdmMiddleware, 
        createCategoryController)
categoriesRoutes.get("", 
        listAllCategoriesController)
categoriesRoutes.get("/:id/properties", 
        listPropertiesByCategoriesController)

export default categoriesRoutes