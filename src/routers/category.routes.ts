import { Router } from "express";
import { createCategoryController, listAllCategoriesController } from "../controllers/categories/categories.controller";
import verifyAuthMiddleware from "../middlewares/verifyAuth.middleware";
import verifyCategoryExistsMiddleware from "../middlewares/verifyCategoryExists.middleware";
import verifyUserIsAdmMiddleware from "../middlewares/verifyUserIsAdm.middleware";

const categoriesRoutes = Router()

categoriesRoutes.post("", verifyAuthMiddleware, verifyUserIsAdmMiddleware, verifyCategoryExistsMiddleware, createCategoryController)
categoriesRoutes.get("", listAllCategoriesController)

export default categoriesRoutes