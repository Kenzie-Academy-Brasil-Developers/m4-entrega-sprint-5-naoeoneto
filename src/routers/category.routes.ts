import { Router } from "express";
import { createCategoryController, 
        listAllCategoriesController, 
        listPropertiesByCategoriesController } 
        from "../controllers/categories/categories.controller";
import verifyAuthMiddleware from "../middlewares/verifyAuth.middleware";
import verifyCategoryExistsMiddleware from "../middlewares/verifyCategoryExists.middleware";
import verifyCategoryIdMiddleware from "../middlewares/verifyCategoryId.middleware";
import verifyIdMiddleware from "../middlewares/verifyId.middleware";
import verifyUserIsAdmMiddleware from "../middlewares/verifyUserIsAdm.middleware";

const categoriesRoutes = Router()

categoriesRoutes.post("", verifyAuthMiddleware, verifyUserIsAdmMiddleware, verifyCategoryExistsMiddleware, createCategoryController)
categoriesRoutes.get("", listAllCategoriesController)
categoriesRoutes.get("/:id/properties", verifyCategoryIdMiddleware, listPropertiesByCategoriesController)

export default categoriesRoutes