import { Request, Response } from "express";
import { ICategoryRequest, ICategoryResponse } from "../../interfaces/categories";
import createCategoryService from "../../services/categories/createCategory.service";
import listAllCategoriesService from "../../services/categories/listAllCategories.service";
import listPropertiesByCategoryService from "../../services/categories/listPropertiesByCategory.service";

const createCategoryController = async (req: Request, res: Response) => {
    const data: ICategoryRequest = await createCategoryService(req.body)
    return res.status(201).json(data)
}

const listAllCategoriesController = async (req: Request, res: Response) => {
    const data: ICategoryResponse[] = await listAllCategoriesService()
    return res.json(data)
}

const listPropertiesByCategoriesController = async (req: Request, res: Response) => {
    const data = await listPropertiesByCategoryService(req.params.id)
    return res.json(data)
}

export { createCategoryController, listAllCategoriesController, listPropertiesByCategoriesController }