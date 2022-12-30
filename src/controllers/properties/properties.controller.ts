import { Request, Response } from "express";
import { IPropertyRequest, IPropertyResponse } from "../../interfaces/properties";
import createPropertyService from "../../services/properties/createProperty.service";
import listAllPropertiesService from "../../services/properties/listAllProperties.service";

const createPropertyController = async (req: Request, res: Response) => {
    const data = await createPropertyService(req.body)
    return res.status(201).json(data)
}

const listAllPropertiesController = async (req: Request, res: Response) => {
    const data = await listAllPropertiesService()
    return res.json(data)
}

export { createPropertyController, listAllPropertiesController }