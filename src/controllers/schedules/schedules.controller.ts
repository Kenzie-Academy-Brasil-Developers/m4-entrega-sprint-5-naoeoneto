import { Request, Response } from "express";
import createScheduleService from "../../services/schedules/createSchedule.service";
import listSchedulesByPropertiesService from "../../services/schedules/listSchedulesByProperties.service";

const createScheduleController = async (req: Request, res: Response) => {
    const data = await createScheduleService(req.body, req.user.id)
    return res.status(201).json({ message: data })
}

const listSchedulesByPropertiesController = async (req: Request, res: Response) => {
    const data = await listSchedulesByPropertiesService(req.params.id)
    return res.json(data)
}

export { createScheduleController, listSchedulesByPropertiesController }